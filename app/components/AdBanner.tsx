"use client";

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <div
      className={`w-full print:hidden ${className}`}
      style={{ minHeight: 90 }}
    >
    </div>
  );
}
