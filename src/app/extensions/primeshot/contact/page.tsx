"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare, Send } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construct mailto link
    const subject = encodeURIComponent(`PrimeShot Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    // Create a temporary link element and click it
    // This is often more reliable than window.location.href for mailto
    const mailtoLink = `mailto:steemblocks@gmail.com?subject=${subject}&body=${body}`;
    const link = document.createElement("a");
    link.href = mailtoLink;

    // For mailto, usually target=_self is standard, but some browsers handle it better with a click
    link.click();

    // Optional: Reset form or show feedback
    alert("Opening your email client to send the message...");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

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
            Contact Us
          </h1>

          <div className="flex flex-col md:flex-row gap-8 text-text-secondary leading-relaxed mb-10">
            <div className="flex-1">
              <p className="mb-6">
                We&apos;d love to hear from you! Whether you have a question
                about PrimeShot, need technical support, or just want to report
                a bug, we&apos;re here to help.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:steemblocks@gmail.com"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-white">Email Support</h3>
                    <p className="text-sm">steemblocks@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group select-text">
                  <MessageSquare className="w-6 h-6 text-[#5865F2] group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-white">Discord</h3>
                    <p className="text-sm">steemblocks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Functional Form */}
            <div className="flex-1 bg-white/2 p-6 rounded-xl border border-white/5">
              <h2 className="text-xl font-semibold text-white mb-4">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-muted mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-muted mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-muted mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-bg-dark font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Message via Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
