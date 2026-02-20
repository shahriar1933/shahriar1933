"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
            Terms of Service
          </h1>

          <div className="space-y-6 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By installing and using PrimeShot (&quot;the Extension&quot;),
                you agree to comply with and be bound by these Terms of Service.
                If you do not agree to these terms, please do not use the
                Extension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. License Grant
              </h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable license
                to use PrimeShot for personal, non-commercial purposes. You may
                not modify, distribute, or sell the Extension without
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. User Responsibilities
              </h2>
              <p className="mb-2">
                You agree to use PrimeShot only for lawful purposes and in a way
                that does not:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Infringe upon the rights of others or restrict their use and
                  enjoyment of the Extension
                </li>
                <li>
                  Involve the capture and sharing of sensitive information
                  without proper consent
                </li>
                <li>Violate any laws or regulations</li>
                <li>Harass, abuse, or harm any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Content & Screenshots
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Your Screenshots:</strong> You retain all rights to
                  screenshots you create with PrimeShot. The Extension does not
                  claim ownership of your captured content.
                </li>
                <li>
                  <strong>Responsible Use:</strong> You are responsible for
                  ensuring that your screenshots do not violate the privacy or
                  intellectual property rights of others.
                </li>
                <li>
                  <strong>No Liability:</strong> We are not responsible for
                  illegal or harmful use of screenshots created with the
                  Extension.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Privacy & Data
              </h2>
              <p className="mb-2">PrimeShot respects your privacy:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  The Extension operates completely offline and locally on your
                  device
                </li>
                <li>We do not collect, store, or transmit any personal data</li>
                <li>
                  We do not track your browsing history or screenshot content
                </li>
                <li>All annotations and edits remain on your device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. Disclaimer of Warranties
              </h2>
              <p className="mb-2">
                The Extension is provided &quot;AS IS&quot; without warranties
                of any kind, either express or implied, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>Merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
              </ul>
              <p className="mb-2">
                We do not guarantee that the Extension will be:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Error-free or uninterrupted</li>
                <li>Compatible with all websites or browsers</li>
                <li>Without bugs or security vulnerabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Limitation of Liability
              </h2>
              <p className="mb-2">
                To the fullest extent permitted by law, we shall not be liable
                for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Any direct, indirect, incidental, special, or consequential
                  damages
                </li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>
                  Problems caused by third-party websites or browser changes
                </li>
                <li>Issues arising from your use of screenshots</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. Third-Party Content
              </h2>
              <p className="mb-2">
                PrimeShot may include third-party libraries (e.g., OCR
                technology). We are not responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Third-party library performance or issues</li>
                <li>Accuracy of text extraction results</li>
                <li>Changes made by third-party service providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Modifications to the Service
              </h2>
              <p className="mb-2">We reserve the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Update, modify, or discontinue the Extension at any time
                </li>
                <li>Change these Terms of Service with reasonable notice</li>
                <li>Add or remove features without liability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                10. Intellectual Property
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Our Rights:</strong> All PrimeShot source code,
                  design, and branding remain our intellectual property
                </li>
                <li>
                  <strong>Your Rights:</strong> You own the content you create
                  with the Extension
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                11. Termination
              </h2>
              <p>
                We may terminate your license to use PrimeShot if you violate
                these Terms of Service. Upon termination, you must stop using
                the Extension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                12. Governing Law
              </h2>
              <p>
                These Terms of Service are governed by and construed in
                accordance with the laws of Bangladesh, and you irrevocably
                submit to the exclusive jurisdiction of the courts in that
                location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                13. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions shall remain in full
                force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                14. Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact:{" "}
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
