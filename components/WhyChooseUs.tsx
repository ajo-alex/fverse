interface ServicePillar {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tags: string[];
  diagnosticMetric: string;
}

const services: ServicePillar[] = [
  {
    index: "01",
    title: "Restaurant Functional Audit",
    subtitle: "P&L Diagnostics & Station Ergonomics",
    description:
      "We conduct exhaustive, 360-degree forensic examinations of all dining and kitchen functions to unearth latent operational bottlenecks, unnecessary prep overhead, and prime cost leaks.",
    icon: "search_insights",
    tags: ["Bespoke P&L Audits", "Station Ergonomics", "Prime Cost Forensics", "Waste Traps"],
    diagnosticMetric: "48-HR DIAGNOSTIC DEPLOYMENT",
  },
  {
    index: "02",
    title: "Predictive Demand Forecasting",
    subtitle: "Zero-Waste Prep Cycles & Smart Rostering",
    description:
      "Tailors menu production cycles and brigade scheduling to eliminate costly stockouts and destructive over-staffing, leveraging historic diner throughput, local holidays, and seasonal trends.",
    icon: "monitoring",
    tags: ["Zero Waste Prep", "Smart Rostering", "Batch Sheet Math", "Throughput Modeling"],
    diagnosticMetric: "0% PREDICTIVE OUTAGE",
  },
  {
    index: "03",
    title: "Optimized Operating Efficiency",
    subtitle: "Table Velocity & Prime Margin Lift",
    description:
      "Achieve measurable increases in table velocity, direct food cost reductions between 4%–9%, and heightened diner sentiment scores within the critical first 6 operating months.",
    icon: "speed",
    tags: ["4-9% Margin Lift", "Rapid Table Turns", "KDS Line Flow", "Yield Optimization"],
    diagnosticMetric: "6 MONTHS TO PEAK EBITDA",
  },
  {
    index: "04",
    title: "Local to Global Standards",
    subtitle: "Cultural Palate Tuning & Brand Architecture",
    description:
      "We seamlessly adapt international fine dining benchmarks to respect and captivate local consumer palates, ensuring effortless cultural resonance and sustained brand loyalty across borders.",
    icon: "public",
    tags: ["Cultural Palate Tuning", "Global Benchmarks", "Sensory Formulation", "Format Scalability"],
    diagnosticMetric: "5 NATIONS PROVEN TRACK RECORD",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-[rgba(190,141,63,0.2)]"
    >
      {/* Section Header */}
      <div className="reveal-init reveal-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(190,141,63,0.2)] mb-16">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#BE8D3F] mb-4 flex items-center gap-2">
            <span>[THE SERVICES &amp; ADVANTAGE // 03]</span>
            <span className="w-8 h-[1px] bg-[#BE8D3F]" />
            <span className="text-[#C8BBA8]">CORE ADVISORY COMMISSIONS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5E4C7]">
            WHY DISCERNING RESTAURATEURS COMMISSION US
          </h2>
        </div>

        <a
          href="#audit-scheduler"
          className="self-start md:self-auto px-6 py-3 bg-[#BE8D3F] text-[#100B06] font-mono text-xs font-bold uppercase tracking-wider editorial-btn-gold shrink-0"
        >
          COMMISSION SCOPING REVIEW ↗
        </a>
      </div>

      {/* Editorial Services Stack */}
      <div className="border border-[rgba(190,141,63,0.22)] bg-[#16100A] shadow-[0_24px_50px_rgba(0,0,0,0.6)] divide-y divide-[rgba(190,141,63,0.18)]">
        {services.map((service, idx) => (
          <div
            key={service.index}
            className={`reveal-init reveal-fade-up delay-${(idx + 1) * 100} reveal-cascade p-6 sm:p-8 md:p-10 transition-all duration-300 group hover:bg-[#1C140D] flex flex-col lg:flex-row lg:items-center justify-between gap-8`}
          >
            {/* Index & Content */}
            <div className="flex items-start gap-6 lg:max-w-2xl">
              <span className="reveal-item font-mono text-3xl sm:text-4xl font-black tracking-tight text-[#BE8D3F] opacity-75 group-hover:opacity-100 transition-opacity shrink-0">
                // {service.index}
              </span>

              <div>
                <div className="reveal-item flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[22px] text-[#BE8D3F]">
                    {service.icon}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C8BBA8] font-semibold">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="reveal-item font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5E4C7] group-hover:text-[#BE8D3F] transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="reveal-item text-sm sm:text-base text-[#C8BBA8] leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="reveal-item px-2.5 py-1 bg-[#100B06] text-[#F5E4C7] font-mono text-xs font-medium border border-[rgba(190,141,63,0.2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Diagnostic Metric Callout & Action Arrow */}
            <div className="reveal-item flex lg:flex-col items-center lg:items-end justify-between shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[rgba(190,141,63,0.15)] gap-4">
              <div className="font-mono text-xs font-bold text-[#BE8D3F] bg-[#100B06] px-3.5 py-2 border border-[rgba(190,141,63,0.3)] shadow-[0_0_12px_rgba(190,141,63,0.1)]">
                {service.diagnosticMetric}
              </div>

              <a
                href="#audit-scheduler"
                className="w-12 h-12 bg-[#100B06] text-[#BE8D3F] border border-[rgba(190,141,63,0.3)] flex items-center justify-center font-bold text-xl group-hover:bg-[#BE8D3F] group-hover:text-[#100B06] group-hover:translate-x-1 transition-all"
                title="Commission this service"
              >
                ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
