import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0804] text-[#F5E4C7] border-t border-[rgba(190,141,63,0.25)]">
      {/* Top Giant Brand Typography Banner */}
      <div className="reveal-init reveal-fade-up border-b border-[rgba(190,141,63,0.18)] px-4 sm:px-6 md:px-8 py-14 md:py-20 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <span className="font-mono text-xs font-bold text-[#BE8D3F] uppercase tracking-widest block mb-4">
            [FOODIVERSE ATELIER &amp; CULINARY LAB]
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight text-[#F5E4C7] leading-none">
            FOODIVERSE
          </h2>
        </div>

        <div className="max-w-md font-mono text-xs text-[#C8BBA8] leading-relaxed border-l border-[#BE8D3F] pl-4">
          Haute-gastronomy conceptualization, Michelin-grade culinary architecture, and turnkey operational rollouts for world-class hotel groups and ambitious independent restaurateurs.
        </div>
      </div>

      {/* Main Grid Directory */}
      <div className="reveal-init reveal-fade-up delay-150 reveal-cascade px-4 sm:px-6 md:px-8 py-14 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 font-mono text-xs">
        {/* Brand Col */}
        <div className="reveal-item lg:col-span-4 flex flex-col justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#BE8D3F]/15 border border-[#BE8D3F]/40 flex items-center justify-center text-[#BE8D3F]">
              <span className="material-symbols-outlined text-[18px]">restaurant</span>
            </div>
            <span className="font-display text-xl font-bold uppercase tracking-tight text-[#F5E4C7]">
              FOODIVERSE
            </span>
          </div>

          <p className="text-[#C8BBA8] leading-relaxed max-w-sm font-sans text-sm font-normal">
            Turning kitchen complexity into compounding gross margin. We eliminate prime cost leaks before opening night.
          </p>

          <div className="inline-block self-start px-2.5 py-1 bg-[#BE8D3F]/15 border border-[#BE8D3F]/30 text-[#BE8D3F] font-bold uppercase text-[10px] tracking-wider">
            ATELIER // REGISTERED ADVISORY
          </div>
        </div>

        {/* Global Footprint */}
        <div className="reveal-item lg:col-span-3 flex flex-col gap-3">
          <span className="text-[#BE8D3F] uppercase font-bold tracking-wider">
            // GLOBAL BUREAUS
          </span>
          <p className="text-[#C8BBA8] text-[11px] leading-relaxed mb-2 font-sans">
            Active advisory hubs delivering concept engineering across key culinary capitals:
          </p>
          <div className="flex flex-wrap gap-2 text-[#F5E4C7] font-semibold text-[11px]">
            <span className="bg-[#16100A] px-2.5 py-1 border border-[rgba(190,141,63,0.2)]">🇨🇦 CANADA</span>
            <span className="bg-[#16100A] px-2.5 py-1 border border-[rgba(190,141,63,0.2)]">🇦🇪 DUBAI</span>
            <span className="bg-[#16100A] px-2.5 py-1 border border-[rgba(190,141,63,0.2)]">🇮🇳 INDIA</span>
            <span className="bg-[#16100A] px-2.5 py-1 border border-[rgba(190,141,63,0.2)]">🇦🇺 AUSTRALIA</span>
            <span className="bg-[#16100A] px-2.5 py-1 border border-[rgba(190,141,63,0.2)]">🇱🇰 SRI LANKA</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="reveal-item lg:col-span-2 flex flex-col gap-3">
          <span className="text-[#BE8D3F] uppercase font-bold tracking-wider">
            // DIRECTORY
          </span>
          <div className="flex flex-col gap-2.5 font-bold text-[#C8BBA8]">
            <a className="hover:text-[#BE8D3F] transition-colors" href="#about">
              → ABOUT ATELIER
            </a>
            <a className="hover:text-[#BE8D3F] transition-colors" href="#services">
              → SERVICES &amp; AUDITS
            </a>
            <a className="hover:text-[#BE8D3F] transition-colors" href="#process">
              → PROCESS WORKFLOW
            </a>
            <a className="hover:text-[#BE8D3F] transition-colors" href="#launch-plan">
              → 6-STEP LAUNCH
            </a>
            <a className="hover:text-[#BE8D3F] transition-colors" href="#case-studies">
              → SELECTED WORK
            </a>
            <a className="hover:text-[#BE8D3F] transition-colors" href="#principals">
              → THE PRINCIPALS
            </a>
          </div>
        </div>

        {/* Direct Inquiries */}
        <div className="reveal-item lg:col-span-3 flex flex-col gap-3">
          <span className="text-[#BE8D3F] uppercase font-bold tracking-wider">
            // DIRECT CHANNELS
          </span>
          <div className="space-y-3">
            <div>
              <div className="text-[#C8BBA8]/60 text-[10px] uppercase">DIRECT LINE / WHATSAPP:</div>
              <a
                href="tel:+917994458027"
                className="text-[#F5E4C7] hover:text-[#BE8D3F] font-bold text-sm"
              >
                +91-7994458027 ↗
              </a>
            </div>
            <div>
              <div className="text-[#C8BBA8]/60 text-[10px] uppercase">EXECUTIVE INQUIRIES:</div>
              <a
                href="mailto:foodiversehospitality@gmail.com"
                className="text-[#F5E4C7] hover:text-[#BE8D3F] font-bold text-xs break-all"
              >
                foodiversehospitality@gmail.com ↗
              </a>
            </div>
            <div>
              <div className="text-[#C8BBA8]/60 text-[10px] uppercase">ADVISORY BOARD:</div>
              <div className="text-[#C8BBA8] text-[11px]">
                Regional Bureaus &amp; Culinary Lab
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Notice */}
      <div className="reveal-init reveal-fade-up delay-200 border-t border-[rgba(190,141,63,0.18)] px-4 sm:px-6 md:px-8 py-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#C8BBA8]/60">
        <div>
          © 2025 FOODIVERSE HOSPITALITY ADVISORY GROUP. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <Link href="#audit-scheduler" className="hover:text-[#BE8D3F] transition-colors">
            PRIVACY CHARTER
          </Link>
          <span>/</span>
          <Link href="#audit-scheduler" className="hover:text-[#BE8D3F] transition-colors">
            TERMS OF ENGAGEMENT
          </Link>
          <span>/</span>
          <Link href="#audit-scheduler" className="hover:text-[#BE8D3F] transition-colors">
            MUTUAL NDA
          </Link>
        </div>
      </div>
    </footer>
  );
}
