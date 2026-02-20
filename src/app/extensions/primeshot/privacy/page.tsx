"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
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
          <h1 className="font-outfit font-bold text-3xl sm:text-4xl mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. What We Collect
              </h2>
              <p className="mb-2">
                We do NOT collect any personal data. PrimeShot operates entirely
                offline on your device. We do not:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Track your browsing history</li>
                <li>Collect screenshots or their content</li>
                <li>Send data to external servers</li>
                <li>Use analytics or cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. Local Storage
              </h2>
              <p className="mb-2">
                We only store the following on your device:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>User preferences and settings</li>
                <li>Annotation history</li>
                <li>Tool configurations</li>
              </ul>
              <p className="mt-2 text-text-muted italic">
                This data never leaves your device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. Permissions Explained
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>activeTab:</strong> Captures the current webpage
                </li>
                <li>
                  <strong>scripting:</strong> Enables annotation tools
                </li>
                <li>
                  <strong>clipboardWrite:</strong> Copies screenshots to
                  clipboard
                </li>
                <li>
                  <strong>storage:</strong> Saves your settings
                </li>
              </ul>
              <p className="mt-2">
                All operations happen locally on your device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Your Screenshots
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>You own all screenshots you create</li>
                <li>We have no access to them</li>
                <li>They are never shared or uploaded</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Third-Party Libraries
              </h2>
              <p>
                We use ocrad.js for text extraction. All processing happens on
                your device—no data is sent to external services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. Changes
              </h2>
              <p>
                We may update this Privacy Policy. Changes will be posted here
                with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Contact
              </h2>
              <p>
                For privacy questions:{" "}
                <a
                  href="mailto:steemblocks@gmail.com"
                  className="text-primary hover:underline"
                >
                  steemblocks@gmail.com
                </a>
              </p>
            </section>

            <section className="pt-8 border-t border-white/10 mt-8">
              <p className="text-sm text-text-muted">
                Last updated: February 20, 2026
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
