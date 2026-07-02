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
    <div className="space-y-2">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.pregunta}
            className={`bg-white rounded-xl border overflow-hidden transition-colors ${
              isOpen ? "border-gray-200" : "border-gray-100"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-3 px-4 py-4 text-left"
            >
              <span className="text-sm font-semibold text-gray-900 leading-snug">
                {faq.pregunta}
              </span>
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-colors ${
                  isOpen ? "bg-brasa text-white" : "bg-gray-100 text-gray-400"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 border-t border-gray-50">
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
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
