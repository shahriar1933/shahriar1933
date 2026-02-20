"use client";

import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I install PrimeShot?",
      answer:
        "You can install PrimeShot directly from the Chrome Web Store. Simply click the 'Add to Chrome' button on our main page.",
    },
    {
      question: "Does PrimeShot work on Firefox?",
      answer:
        "Currently, PrimeShot is optimized for Chrome-based browsers. We are actively working on a Firefox version which will be released soon.",
    },
    {
      question: "Where are my screenshots saved?",
      answer:
        "By default, PrimeShot saves all screenshots to your local Downloads folder. You can also choose to copy them to your clipboard directly.",
    },
    {
      question: "Can I annotate my screenshots?",
      answer:
        "Absolutely! After capturing a screenshot, you'll be taken to an editing interface where you can add arrows, text, shapes, and highlight important areas.",
    },
    {
      question: "Is PrimeShot free?",
      answer:
        "Yes, the core features of PrimeShot are completely free to use. We may introduce premium features in the future, but the essential capture tools will always be free.",
    },
  ];

  return (
    <main className="min-h-screen bg-bg-dark text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/extensions/primeshot"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to PrimeShot
        </Link>

        <div className="glass-card p-8 sm:p-12 rounded-2xl">
          <div className="flex items-center gap-4 mb-8">
            <HelpCircle className="w-10 h-10 text-primary" />
            <h1 className="font-outfit font-bold text-3xl sm:text-4xl">
              Help Center
            </h1>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/8 transition-colors"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-medium text-lg text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                    >
                      <svg
                        className="w-5 h-5 text-text-muted"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-linear-to-r from-bg-deep to-bg-card rounded-2xl border border-white/10 text-center">
              <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
              <p className="text-text-secondary mb-6">
                Our support team is always ready to help you.
              </p>
              <Link
                href="/extensions/primeshot/contact"
                className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-sm border border-white/20"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
