import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { getRedis } from "@/app/lib/redis";

const KEY_MAIZ = "tortilla:votos:maiz";
const KEY_HARINA = "tortilla:votos:harina";
const VOTE_TTL_SECONDS = 60 * 60 * 24; // 1 voto por IP cada 24h

function hashIp(ip: string) {
  return createHash("sha256").update(ip).digest("hex");
}

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

async function getPercentages() {
  const redis = getRedis();
  const [maizRaw, harinaRaw] = await Promise.all([
    redis.get(KEY_MAIZ),
    redis.get(KEY_HARINA),
  ]);
  const maizN = parseInt(maizRaw || "0", 10);
  const harinaN = parseInt(harinaRaw || "0", 10);
  const total = maizN + harinaN;
  if (total === 0) return { maiz: 50, harina: 50 };
  const maiz = Math.round((maizN / total) * 100);
  return { maiz, harina: 100 - maiz };
}

export async function GET() {
  const pct = await getPercentages();
  return NextResponse.json(pct);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || (body.tipo !== "maiz" && body.tipo !== "harina")) {
    return NextResponse.json({ error: "Voto inválido" }, { status: 400 });
  }

  // Honeypot: campo invisible que los bots suelen rellenar
  if (body.hp) {
    return NextResponse.json({ error: "Rechazado" }, { status: 400 });
  }

  // Bloquea requests sin User-Agent de browser (scrapers básicos)
  const ua = req.headers.get("user-agent") || "";
  if (ua.length < 10) {
    return NextResponse.json({ error: "Rechazado" }, { status: 400 });
  }

  const redis = getRedis();
  const ipHash = hashIp(getClientIp(req));
  const rateLimitKey = `tortilla:voto:${ipHash}`;

  const yaVoto = await redis.get(rateLimitKey);
  if (yaVoto) {
    const pct = await getPercentages();
    return NextResponse.json({ ...pct, yaVotaste: true });
  }

  await redis.incr(body.tipo === "maiz" ? KEY_MAIZ : KEY_HARINA);
  await redis.set(rateLimitKey, "1", "EX", VOTE_TTL_SECONDS);

  const pct = await getPercentages();
  return NextResponse.json(pct);
}
