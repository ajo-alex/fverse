import Image from "next/image";

export default function MissionVision() {
  return (
    <section
      id="philosophy"
      className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-[rgba(190,141,63,0.2)]"
    >
      {/* Editorial Header Statement */}
      <div className="reveal-init reveal-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(190,141,63,0.2)] mb-16">
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#BE8D3F] mb-4 flex items-center gap-2">
            <span>[THE PHILOSOPHY // 02]</span>
            <span className="w-8 h-[1px] bg-[#BE8D3F]" />
            <span className="text-[#C8BBA8]">FOUNDATIONAL THESIS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5E4C7] leading-[1.02]">
            GREAT RECIPES DON’T RESCUE FLAWED UNIT ECONOMICS.<br />
            <span className="text-[#BE8D3F]">WE ARCHITECT BOTH.</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-[#C8BBA8] max-w-xs leading-relaxed border-l border-[#BE8D3F]/40 pl-4">
          A restaurant without culinary soul bores diners. A culinary soul without operational rigor burns capital. Foodiverse exists to engineer harmony between both.
        </div>
      </div>

      {/* Asymmetric 12-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Col: 2 Atmospheric Editorial Cards */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Mission Card */}
          <div className="reveal-init reveal-fade-up delay-100 reveal-cascade p-8 sm:p-10 bg-[#16100A] border border-[rgba(190,141,63,0.22)] shadow-[0_16px_36px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#BE8D3F] transition-all group">
            <div>
              <div className="reveal-item flex items-center justify-between pb-4 border-b border-[rgba(190,141,63,0.15)] mb-6 font-mono text-xs">
                <span className="px-2.5 py-1 bg-[#BE8D3F]/15 border border-[#BE8D3F]/40 text-[#BE8D3F] font-bold uppercase tracking-wider text-[11px]">
                  PILLAR 01 // OPERATIONAL RIGOR
                </span>
                <span className="text-[#C8BBA8] font-bold">[OUR MISSION]</span>
              </div>

              <h3 className="reveal-item font-display text-2xl sm:text-3xl font-black uppercase text-[#F5E4C7] mb-4 group-hover:text-[#BE8D3F] transition-colors">
                Driving Growth Through Culinary Precision &amp; P&amp;L Forensics
              </h3>

              <p className="reveal-item text-base text-[#C8BBA8] leading-relaxed mb-6 font-normal">
                We streamline complex dining operations by merging Michelin-grade culinary precision with uncompromising engineering. We dissect brigade station ergonomics, prime cost leaks, and prep overhead — transforming volatile kitchens into stable, highly profitable engines.
              </p>
            </div>

            <div className="reveal-item pt-5 border-t border-[rgba(190,141,63,0.15)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#F5E4C7]">
                <span className="material-symbols-outlined text-[18px] text-[#BE8D3F]">
                  skillet
                </span>
                <span className="font-bold">CHEF-MENTORED STATION ARCHITECTURE</span>
              </div>
              <span className="text-[#BE8D3F]">VERIFIED BENCHMARK ↗</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="reveal-init reveal-fade-up delay-200 reveal-cascade p-8 sm:p-10 bg-[#16100A] border border-[rgba(190,141,63,0.22)] shadow-[0_16px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#BE8D3F] transition-all group">
            <div>
              <div className="reveal-item flex items-center justify-between pb-4 border-b border-[rgba(190,141,63,0.15)] mb-6 font-mono text-xs">
                <span className="px-2.5 py-1 bg-[#19120C] border border-[rgba(200,187,168,0.25)] text-[#F5E4C7] font-bold uppercase tracking-wider text-[11px]">
                  PILLAR 02 // GASTRONOMIC SOUL
                </span>
                <span className="text-[#C8BBA8] font-bold">[OUR VISION]</span>
              </div>

              <h3 className="reveal-item font-display text-2xl sm:text-3xl font-black uppercase text-[#F5E4C7] mb-4 group-hover:text-[#BE8D3F] transition-colors">
                Sustainable Longevity &amp; Unforgettable Guest Delight
              </h3>

              <p className="reveal-item text-base text-[#C8BBA8] leading-relaxed mb-6 font-normal">
                A vision where restaurants transcend short-lived hype cycles by unlocking structural longevity. We engineer distinctive sensory identities, calibrate local cultural resonance, and establish zero-waste production routines that safeguard margins for decades.
              </p>
            </div>

            <div className="reveal-item pt-5 border-t border-[rgba(190,141,63,0.15)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#F5E4C7]">
                <span className="material-symbols-outlined text-[18px] text-[#BE8D3F]">
                  eco
                </span>
                <span className="font-bold">ZERO-WASTE SUSTAINABLE MARGINS</span>
              </div>
              <span className="text-[#BE8D3F]">DECADE LONGEVITY ↗</span>
            </div>
          </div>
        </div>

        {/* Right Col: Cinematic Culinary Craft Photography */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="reveal-init reveal-scale delay-200 reveal-cascade h-full bg-[#16100A] border border-[rgba(190,141,63,0.25)] p-2 shadow-[0_20px_45px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden">
            <div className="reveal-item px-3 py-2 bg-[#100B06] text-[#C8BBA8] flex items-center justify-between font-mono text-[10px] uppercase tracking-widest border border-[rgba(190,141,63,0.15)] mb-2">
              <span>[PLATE 02 // ATELIER CRAFT &amp; SENSORY CHEMISTRY]</span>
              <span className="text-[#BE8D3F] font-bold">REDUCTION</span>
            </div>

            <div className="reveal-item relative w-full aspect-[4/3] lg:aspect-auto lg:flex-1 min-h-[300px] bg-[#0D0804] overflow-hidden group">
              <Image
                src="/images/culinary_craft.jpg"
                alt="Chef seasoning copper saucier over gas flame in dark fine dining kitchen"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100B06]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 bg-[#100B06]/90 text-[#F5E4C7] font-mono text-[10px] px-2.5 py-1 uppercase tracking-wider border border-[rgba(190,141,63,0.3)]">
                CULINARY R&amp;D LAB
              </div>
            </div>

            <div className="reveal-item p-6 bg-[#140E08] border border-[rgba(190,141,63,0.15)] mt-2">
              <div className="font-mono text-xs font-bold text-[#BE8D3F] uppercase tracking-wider mb-2">
                THE SENSORY ARCHITECTURE MATRIX
              </div>
              <p className="text-xs text-[#C8BBA8] leading-relaxed mb-4 font-sans">
                Every flavor profile, cooking technique, and portion specification is calibrated against supplier yields to ensure culinary transcendence directly supports bottom-line profitability.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[rgba(190,141,63,0.15)] font-mono text-[11px]">
                <div className="bg-[#19120C] p-2 border border-[rgba(190,141,63,0.2)] text-[#F5E4C7] font-semibold text-center">
                  ✓ YIELD INDEXING
                </div>
                <div className="bg-[#19120C] p-2 border border-[rgba(190,141,63,0.2)] text-[#F5E4C7] font-semibold text-center">
                  ✓ PALATE TUNING
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
