"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  User,
  Rocket,
  Mail,
  BrainCircuit,
  ChevronDown,
  Puzzle,
  Camera,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction and visibility
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      // setIsVisible(true); // Always show header when menu is open is now handled by class logic
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "About", icon: <User className="w-6 h-6" /> },
    {
      href: "#skills",
      label: "Skills",
      icon: <BrainCircuit className="w-6 h-6" />,
    },
    {
      label: "Extensions",
      icon: <Puzzle className="w-6 h-6" />,
      children: [
        {
          href: "/extensions/primeshot",
          label: "PrimeShot",
          icon: <Camera className="w-6 h-6" />,
        },
      ],
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <Rocket className="w-6 h-6" />,
    },
    { href: "#contact", label: "Contact", icon: <Mail className="w-6 h-6" /> },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <header
        className={`fixed top-2 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4 transition-transform duration-500 will-change-transform ${
          isVisible || isMenuOpen ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-6 py-3 rounded-full border transition-all duration-300 ${
            isScrolled || isMenuOpen
              ? "bg-bg-deep/85 border-white/10 shadow-lg shadow-black/10 backdrop-blur-xl"
              : "bg-bg-deep/50 border-white/6 backdrop-blur-md"
          }`}
        >
          {/* Brand */}
          <Link
            href="/"
            className="font-outfit font-bold text-lg sm:text-xl tracking-tight z-50 relative"
            suppressHydrationWarning
          >
            <span className="text-gradient">Shahriar</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.href ? (
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-white text-sm font-medium relative py-1 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-linear-to-r after:from-primary after:to-secondary after:rounded-sm after:transition-all after:duration-300 hover:after:w-full flex items-center gap-1"
                    suppressHydrationWarning
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className="text-text-muted hover:text-white text-sm font-medium relative py-1 transition-colors duration-200 flex items-center gap-1 group-hover:text-white cursor-pointer">
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                )}

                {/* Dropdown Menu */}
                {link.children && (
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-bg-deep/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl shadow-black/20 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-text-muted hover:text-white transition-all duration-200 group/item"
                          suppressHydrationWarning
                        >
                          <span className="text-primary group-hover/item:text-secondary transition-colors">
                            {child.icon}
                          </span>
                          <span className="text-sm font-medium">
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Hamburger Button */}
          <button
            className={`relative w-10 h-10 flex items-center justify-center md:hidden z-50 rounded-full transition-all duration-300 ${
              isMenuOpen ? "bg-primary/10" : "bg-transparent"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen
                    ? "bg-primary rotate-45 translate-y-[7px]"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-full h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen
                    ? "bg-primary -rotate-45 -translate-y-[7px]"
                    : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Nav - Full Screen Menu */}
      <nav
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Menu Container */}
        <div
          className={`absolute right-0 top-0 w-full xs:w-80 h-full bg-linear-to-br from-bg-deep via-bg-deep to-bg-dark transform transition-transform duration-500 ease-out shadow-2xl border-l border-white/10 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-40 -left-20 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          {/* Menu Content */}
          <div className="relative h-full flex flex-col justify-center items-center px-8">
            {/* Nav Links */}
            <div className="flex flex-col items-center gap-2 w-full max-w-xs">
              {navLinks.map((link, index) => (
                <div key={link.label} className="w-full">
                  {link.href ? (
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`group w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-primary/30 transition-all duration-300 ${
                        isMenuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${150 + index * 75}ms`
                          : "0ms",
                      }}
                      suppressHydrationWarning
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-outfit text-xl font-semibold text-white group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      <svg
                        className="w-5 h-5 ml-auto text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ) : (
                    <div className="w-full">
                      <div
                        className={`group w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/2 border border-white/5 mb-2 ${
                          isMenuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: isMenuOpen
                            ? `${150 + index * 75}ms`
                            : "0ms",
                        }}
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <span className="font-outfit text-xl font-semibold text-white">
                          {link.label}
                        </span>
                      </div>
                      <div className="pl-12 space-y-2">
                        {link.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-primary/30 transition-all duration-300 ${
                              isMenuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            }`}
                            style={{
                              transitionDelay: isMenuOpen
                                ? `${200 + index * 75}ms`
                                : "0ms",
                            }}
                            suppressHydrationWarning
                          >
                            <span className="text-primary">{child.icon}</span>
                            <span className="font-outfit text-lg font-medium text-text-muted group-hover:text-white transition-colors">
                              {child.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div
              className={`mt-12 flex gap-4 transition-all duration-500 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
            >
              <a
                href="https://github.com/Steemblocks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/3 border border-white/8 flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                suppressHydrationWarning
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:steemblocks@gmail.com"
                className="w-12 h-12 rounded-full bg-white/3 border border-white/8 flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                suppressHydrationWarning
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/8801749081577"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/3 border border-white/8 flex items-center justify-center text-text-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                suppressHydrationWarning
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </a>
            </div>

            {/* Brand at bottom */}
            <div
              className={`absolute bottom-8 left-0 right-0 text-center transition-all duration-500 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "500ms" : "0ms" }}
            >
              <p className="text-xs text-text-muted">
                © 2025{" "}
                <span className="text-gradient font-semibold">Shahriar</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
