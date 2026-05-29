"use client";

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <div
      className={`w-full flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 text-gray-400 text-sm font-medium rounded print:hidden ${className}`}
      style={{ minHeight: 90 }}
    >
      Anuncio
    </div>
  );
}
