"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Mission & Vision", href: "#mission-vision" },
  { name: "6-Step Launch Plan", href: "#pipeline-section" },
  { name: "Our Process", href: "#our-process" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Global Footprint", href: "#global-footprint" },
  { name: "Leadership Team", href: "#leadership-team" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("About");

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(28,27,26,0.05)] border-b border-surface-variant/40">
      <div className="h-20 w-full px-gutter flex items-center justify-between gap-space-md max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link
          href="#"
          className="flex items-center gap-space-sm shrink-0 group focus:outline-none"
        >
          <Image
            alt="Foodiverse Brand Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1W5ryWGDsfPquLCsCn8pbbQ2_UH6qlcgBTOkaGJsZr5y2_Oe8mmtPrpmV2gOwvk3Hf6WS90kgc8ph5ldkkigUVrFg0QPu3iJejeFyLXxElpjQqh2WHhEWoClJQy0Vn4emhhRaidhHelFLvss8Fmjcn-d_ZWSyAwVDWHz7bkwNQhbq1XZIyil3PmDpRbAk_W0f0e8gtV_7Lw2_GG2qTrkESfmrpwpcN0sI0-0HTcmq7mgcIruohuytbcyezR"
            width={140}
            height={32}
            priority
          />
          <div className="flex flex-col">
            <span className="font-serif text-title-md tracking-tight text-on-surface leading-tight font-medium">
              Foodiverse
            </span>
          </div>
        </Link>



        {/* Actions & Contact */}
        <div className="flex items-center gap-space-sm shrink-0">
          <div className="hidden lg:flex items-center gap-space-sm pr-space-xs border-r border-outline-variant/40 pr-3">
            <a
              className="text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
              href="tel:+917994458027"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">
                call
              </span>
              <span className="text-label-md font-semibold text-on-surface">
                +91-7994458027
              </span>
            </a>
            <span className="text-outline-variant font-light">|</span>
            <a
              className="text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
              href="mailto:foodiversehospitality@gmail.com"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">
                mail
              </span>
              <span className="text-label-md font-semibold text-on-surface">
                Inquire
              </span>
            </a>
          </div>

          <a
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-on-primary text-title-sm font-semibold transition-all duration-300 hover:bg-primary-container shadow-[0_4px_16px_-2px_rgba(168,50,17,0.35)] hover:shadow-[0_0_24px_rgba(168,50,17,0.5)] whitespace-nowrap"
            href="#audit-scheduler"
          >
            Schedule Functional Audit
          </a>


          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors ml-1"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface border-b border-surface-variant/80 px-gutter py-4 flex flex-col gap-3 shadow-lg animate-in fade-in duration-200">

          <div className="pt-3 border-t border-surface-variant flex flex-col gap-2.5">
            <a
              href="tel:+917994458027"
              className="flex items-center gap-2 text-body-sm text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">
                call
              </span>
              <span>+91-7994458027</span>
            </a>
            <a
              href="mailto:foodiversehospitality@gmail.com"
              className="flex items-center gap-2 text-body-sm text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">
                mail
              </span>
              <span>foodiversehospitality@gmail.com</span>
            </a>
            <a
              className="mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-primary text-on-primary text-title-sm font-semibold text-center"
              href="#audit-scheduler"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule Functional Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
