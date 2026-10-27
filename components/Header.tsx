"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Launch Plan", href: "#launch-plan" },
  { name: "Work", href: "#case-studies" },
  { name: "Principals", href: "#principals" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#100B06]/92 backdrop-blur-xl border-b border-[rgba(190,141,63,0.2)] transition-all">
      {/* Top Editorial Ticker Strip */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#16100A] border-b border-[rgba(190,141,63,0.15)] text-[11px] font-mono tracking-widest text-[#C8BBA8] uppercase">
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BE8D3F] animate-pulse" />
          <span className="text-[#F5E4C7] font-semibold">FOODIVERSE HOSPITALITY ADVISORY</span>
          <span className="text-[rgba(200,187,168,0.3)]">/</span>
          <span>TORONTO • DUBAI • MUMBAI • MELBOURNE</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="tel:+917994458027"
            className="hover:text-[#BE8D3F] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[#BE8D3F]">TEL:</span>
            <span>+91-7994458027</span>
          </a>
          <span className="text-[rgba(200,187,168,0.3)]">/</span>
          <a
            href="mailto:foodiversehospitality@gmail.com"
            className="hover:text-[#BE8D3F] transition-colors"
          >
            foodiversehospitality@gmail.com
          </a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="h-18 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Brand Logo & Editorial Typography */}
        <Link
          href="#"
          className="flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-sm bg-[#BE8D3F]/15 border border-[#BE8D3F]/40 flex items-center justify-center text-[#BE8D3F] shadow-[0_0_16px_rgba(190,141,63,0.2)] group-hover:border-[#BE8D3F] group-hover:scale-105 transition-all">
            <span className="material-symbols-outlined text-[20px]">
              restaurant
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-[#F5E4C7] group-hover:text-[#BE8D3F] transition-colors leading-none">
              FOODIVERSE
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#BE8D3F] mt-1 font-semibold">
              ADVISORY ATELIER
            </span>
          </div>
        </Link>

        {/* Minimal Editorial Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-[#C8BBA8] hover:text-[#BE8D3F] transition-all relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#BE8D3F] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#audit-scheduler"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#BE8D3F] text-[#100B06] font-mono text-xs font-bold uppercase tracking-wider editorial-btn-gold"
          >
            <span>SCHEDULE AUDIT</span>
            <span className="text-sm font-bold">↗</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm bg-[#19120C] border border-[rgba(190,141,63,0.3)] text-[#F5E4C7] hover:border-[#BE8D3F] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px] block">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#16100A] border-t border-[rgba(190,141,63,0.25)] px-6 py-8 flex flex-col gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-in fade-in duration-200">
          <div className="font-mono text-[11px] text-[#BE8D3F] uppercase tracking-widest border-b border-[rgba(190,141,63,0.15)] pb-3">
            // NAVIGATION DIRECTORY
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl font-black uppercase tracking-tight text-[#F5E4C7] hover:text-[#BE8D3F] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="font-mono text-sm text-[#BE8D3F]">↗</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[rgba(190,141,63,0.15)] flex flex-col gap-3 font-mono text-xs">
            <span className="text-[#C8BBA8] uppercase tracking-wider">// DIRECT LINES</span>
            <a
              href="tel:+917994458027"
              className="text-[#F5E4C7] hover:text-[#BE8D3F] font-bold"
            >
              +91-7994458027
            </a>
            <a
              href="mailto:foodiversehospitality@gmail.com"
              className="text-[#F5E4C7] hover:text-[#BE8D3F] font-bold break-all"
            >
              foodiversehospitality@gmail.com
            </a>
          </div>

          <a
            href="#audit-scheduler"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3.5 bg-[#BE8D3F] text-[#100B06] font-mono text-xs font-bold uppercase tracking-wider editorial-btn-gold mt-2"
          >
            COMMISSION FUNCTIONAL AUDIT ↗
          </a>
        </div>
      )}
    </header>
  );
}
