"use client";

import { useState } from "react";
import Link from "next/link";

type FaqItem = {
  pregunta: string;
  respuesta: string;
  links?: { label: string; href: string }[];
};

export default function FaqList({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.pregunta}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-4 py-4 text-left"
            >
              <span className="text-sm font-semibold text-gray-900 leading-snug">
                {faq.pregunta}
              </span>
              <span className="flex-shrink-0 text-xl text-gray-400 font-light leading-none mt-0.5">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="pb-4 -mt-1">
                <p className="text-sm text-gray-500 leading-relaxed">
                  {faq.respuesta}
                </p>
                {faq.links && (
                  <div className="flex flex-wrap gap-4 mt-3">
                    {faq.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-xs font-medium text-brasa hover:underline"
                      >
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
