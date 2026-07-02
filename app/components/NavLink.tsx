'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className="px-3.5 pt-2.5 pb-2 text-sm whitespace-nowrap transition-colors border-b-2 -mb-px"
      style={{
        color: isActive ? '#E8460A' : '#6B6B6B',
        borderBottomColor: isActive ? '#E8460A' : 'transparent',
        fontWeight: isActive ? 600 : 500,
      }}
    >
      {children}
    </Link>
  );
}
