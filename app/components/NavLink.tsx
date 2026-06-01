'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className="nav-pill-3d px-3 py-1.5 text-sm font-semibold whitespace-nowrap"
      style={isActive ? {
        color: '#E8460A',
        background: 'rgba(255,255,255,0.95)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)',
      } : undefined}
    >
      {children}
    </Link>
  );
}
