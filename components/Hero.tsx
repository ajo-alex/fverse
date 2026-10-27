import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full pt-32 md:pt-40 pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Editorial Index & Coordinate Stamp */}
      <div className="reveal-init reveal-fade-down flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(190,141,63,0.2)] pb-4 mb-10 font-mono text-xs text-[#C8BBA8] uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="inline-block px-2.5 py-0.5 bg-[#BE8D3F] text-[#100B06] font-bold text-[10px]">
            ATELIER // 001
          </span>
          <span className="hidden sm:inline text-[#F5E4C7] font-medium">
            HAUTE-GASTRONOMY ARCHITECTURE &amp; TURNKEY ROLLOUTS
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-[#BE8D3F] font-bold">● Q3/Q4 AUDITS COMMENCING</span>
          <span className="hidden md:inline text-[rgba(200,187,168,0.5)]">[BUREAUS: TORONTO • DUBAI • MUMBAI]</span>
        </div>
      </div>

      {/* Main Hero: Interlocking Typography & Editorial Imagery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Col: Oversized Headline & Manifesto */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="reveal-init reveal-fade-up inline-flex items-center gap-2 px-3 py-1 bg-[#19120C] border border-[rgba(190,141,63,0.3)] text-[#BE8D3F] font-mono text-[11px] font-bold uppercase tracking-widest mb-6 w-fit shadow-[0_0_20px_rgba(190,141,63,0.1)]">
            <span className="text-[#BE8D3F]">✦</span>
            <span>MICHELIN-GRADE CULINARY STRATEGY</span>
          </div>

          <h1 className="reveal-init reveal-fade-up delay-100 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-black uppercase tracking-tight text-[#F5E4C7] leading-[0.92] mb-6">
            WE ARCHITECT<br />
            RESTAURANT<br />
            <span className="text-[#BE8D3F] underline decoration-[rgba(190,141,63,0.4)] underline-offset-8">
              BUSINESSES.
            </span>
          </h1>

          <p className="reveal-init reveal-fade-up delay-200 text-base sm:text-lg text-[#C8BBA8] leading-relaxed max-w-xl font-normal border-l-2 border-[#BE8D3F] pl-4 mb-8">
            At Foodiverse, we bridge haute-gastronomy with uncompromising unit economics. We engineer high-yield dining concepts, streamline back-of-house brigades, and insulate margins from concept through grand opening.
          </p>

          {/* Action Buttons */}
          <div className="reveal-init reveal-fade-up delay-250 flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#audit-scheduler"
              className="px-7 sm:px-9 py-4 bg-[#BE8D3F] text-[#100B06] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider editorial-btn-gold flex items-center gap-3 shadow-[0_0_24px_rgba(190,141,63,0.25)]"
            >
              <span>COMMISSION FUNCTIONAL AUDIT</span>
              <span className="text-lg font-bold">↗</span>
            </a>

            <a
              href="#launch-plan"
              className="px-7 sm:px-9 py-4 bg-[#19120C] text-[#F5E4C7] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider editorial-btn-outline flex items-center gap-3"
            >
              <span>6-STEP BLUEPRINT</span>
              <span className="text-lg font-bold">↓</span>
            </a>
          </div>

          {/* Direct Scoping Guarantee */}
          <div className="reveal-init reveal-fade-up delay-300 mt-8 pt-6 border-t border-[rgba(190,141,63,0.15)] flex items-center gap-3 font-mono text-[11px] text-[#C8BBA8]">
            <span className="w-2 h-2 rounded-full bg-[#BE8D3F]" />
            <span>EXECUTIVE RESPONSE WITHIN 24 HOURS // PROTECTED UNDER MUTUAL NDA</span>
          </div>
        </div>

        {/* Right Col: Atmospheric Editorial Image Composition */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="reveal-init reveal-scale delay-150 reveal-cascade relative border border-[rgba(190,141,63,0.3)] bg-[#19120C] p-2 shadow-[0_24px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
            {/* Header Tag */}
            <div className="reveal-item px-3 py-2 bg-[#100B06] text-[#C8BBA8] flex items-center justify-between font-mono text-[10px] uppercase tracking-widest border border-[rgba(190,141,63,0.2)] mb-2">
              <span>[PLATE 01 // KITCHEN PASS EXPEDITION]</span>
              <span className="text-[#BE8D3F] font-bold">LIVE BRIGADE</span>
            </div>

            {/* Cinematic Photography Frame */}
            <div className="reveal-item relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#0D0804]">
              <Image
                src="/images/hero_kitchen.jpg"
                alt="Chefs seasoning and expediting service under warm amber culinary heat lamps"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100B06]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 bg-[#100B06]/90 text-[#F5E4C7] font-mono text-[10px] px-2.5 py-1 uppercase tracking-widest border border-[rgba(190,141,63,0.3)] backdrop-blur-sm">
                ATELIER CULINARY LAB
              </div>
            </div>

            {/* Caption Strip */}
            <div className="reveal-item p-4 bg-[#140E08] border border-[rgba(190,141,63,0.15)] mt-2 font-mono text-xs">
              <div className="font-bold text-[#F5E4C7] uppercase tracking-wider mb-1">
                BRIGADE ERGONOMICS &amp; PRIME COST SHIELDING
              </div>
              <p className="text-[11px] text-[#C8BBA8] leading-relaxed">
                Turning kitchen line friction into effortless velocity across high-volume dining rooms.
              </p>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="reveal-init reveal-fade-up delay-250 p-3 bg-[#16100A] border border-[rgba(190,141,63,0.2)] flex items-center justify-between font-mono text-xs">
            <span className="text-[#C8BBA8] uppercase text-[11px]">DIRECT ATELIER LINE:</span>
            <a
              href="tel:+917994458027"
              className="font-bold text-[#BE8D3F] hover:text-[#D8A552] transition-colors"
            >
              +91-7994458027 ↗
            </a>
          </div>
        </div>
      </div>

      {/* Atmospheric Metric Grid */}
      <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="reveal-init reveal-fade-up delay-100 reveal-cascade p-6 bg-[#16100A] border border-[rgba(190,141,63,0.2)] hover:border-[#BE8D3F] transition-all group flex flex-col justify-between">
          <span className="reveal-item font-mono text-[11px] uppercase text-[#BE8D3F] font-bold tracking-widest">
            [01 // TIME TO PEAK]
          </span>
          <div className="reveal-item my-4">
            <span className="font-display text-4xl sm:text-5xl font-black text-[#F5E4C7] tracking-tight group-hover:text-[#BE8D3F] transition-colors">
              6 MOS
            </span>
          </div>
          <span className="reveal-item font-mono text-[11px] text-[#C8BBA8] leading-relaxed">
            Target timeline to optimized table velocity &amp; stabilized EBITDA.
          </span>
        </div>

        <div className="reveal-init reveal-fade-up delay-200 reveal-cascade p-6 bg-[#16100A] border border-[rgba(190,141,63,0.2)] hover:border-[#BE8D3F] transition-all group flex flex-col justify-between">
          <span className="reveal-item font-mono text-[11px] uppercase text-[#BE8D3F] font-bold tracking-widest">
            [02 // DIRECT MARGIN]
          </span>
          <div className="reveal-item my-4">
            <span className="font-display text-4xl sm:text-5xl font-black text-[#F5E4C7] tracking-tight group-hover:text-[#BE8D3F] transition-colors">
              4%–9%
            </span>
          </div>
          <span className="reveal-item font-mono text-[11px] text-[#C8BBA8] leading-relaxed">
            Direct prime food cost reduction achieved within first 180 days.
          </span>
        </div>

        <div className="reveal-init reveal-fade-up delay-300 reveal-cascade p-6 bg-[#16100A] border border-[rgba(190,141,63,0.2)] hover:border-[#BE8D3F] transition-all group flex flex-col justify-between">
          <span className="reveal-item font-mono text-[11px] uppercase text-[#BE8D3F] font-bold tracking-widest">
            [03 // FORMULATION]
          </span>
          <div className="reveal-item my-4">
            <span className="font-display text-4xl sm:text-5xl font-black text-[#F5E4C7] tracking-tight group-hover:text-[#BE8D3F] transition-colors">
              100%
            </span>
          </div>
          <span className="reveal-item font-mono text-[11px] text-[#C8BBA8] leading-relaxed">
            Custom sensory formulation, batch-sheet yield math, and zero stockout.
          </span>
        </div>

        <div className="reveal-init reveal-fade-up delay-400 reveal-cascade p-6 bg-[#16100A] border border-[rgba(190,141,63,0.2)] hover:border-[#BE8D3F] transition-all group flex flex-col justify-between">
          <span className="reveal-item font-mono text-[11px] uppercase text-[#BE8D3F] font-bold tracking-widest">
            [04 // GLOBAL REACH]
          </span>
          <div className="reveal-item my-4">
            <span className="font-display text-4xl sm:text-5xl font-black text-[#F5E4C7] tracking-tight group-hover:text-[#BE8D3F] transition-colors">
              5 NATIONS
            </span>
          </div>
          <span className="reveal-item font-mono text-[11px] text-[#C8BBA8] leading-relaxed">
            Active advisory footprints: Canada, UAE, India, Australia, Sri Lanka.
          </span>
        </div>
      </div>

      {/* Editorial Marquee Ticker */}
      <div className="reveal-init reveal-fade-up delay-300 mt-14 -mx-4 sm:-mx-6 md:-mx-8 border-y border-[rgba(190,141,63,0.2)] bg-[#140E08] py-3.5 overflow-hidden select-none">
        <div className="animate-marquee font-mono text-xs sm:text-sm tracking-widest uppercase font-bold text-[#C8BBA8] flex items-center gap-8">
          <span className="text-[#F5E4C7]">✦ HAUTE-GASTRONOMY CONCEPT ARCHITECTURE</span>
          <span className="text-[#BE8D3F]">✦ 360° FUNCTIONAL P&amp;L AUDITS</span>
          <span>✦ PREDICTIVE DEMAND FORECASTING</span>
          <span className="text-[#BE8D3F]">✦ BRIGADE RECRUITMENT &amp; SENSORY CALIBRATION</span>
          <span>✦ ZERO-WASTE PRODUCTION CYCLES</span>
          <span className="text-[#F5E4C7]">✦ TURNKEY RESTAURANT LAUNCHES</span>
          <span className="text-[#BE8D3F]">✦ 4%–9% DIRECT MARGIN LIFT</span>
          <span className="text-[#F5E4C7]">✦ HAUTE-GASTRONOMY CONCEPT ARCHITECTURE</span>
          <span className="text-[#BE8D3F]">✦ 360° FUNCTIONAL P&amp;L AUDITS</span>
          <span>✦ PREDICTIVE DEMAND FORECASTING</span>
          <span className="text-[#BE8D3F]">✦ BRIGADE RECRUITMENT &amp; SENSORY CALIBRATION</span>
          <span>✦ ZERO-WASTE PRODUCTION CYCLES</span>
          <span className="text-[#F5E4C7]">✦ TURNKEY RESTAURANT LAUNCHES</span>
          <span className="text-[#BE8D3F]">✦ 4%–9% DIRECT MARGIN LIFT</span>
        </div>
      </div>
    </section>
  );
}
