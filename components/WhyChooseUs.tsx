interface AdvantagePillar {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  tags: string[];
}

const pillars: AdvantagePillar[] = [
  {
    title: "Restaurant Functional Audit",
    description:
      "We conduct exhaustive, 360-degree examinations of all dining and kitchen functions to unearth latent operational bottlenecks, unnecessary prep overhead, and prime cost leaks.",
    icon: "search_insights",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    tags: ["Bespoke P&L Audits", "Station Ergonomics"],
  },
  {
    title: "Predictive Demand Forecasting",
    description:
      "Tailors menu production cycles and brigade scheduling to eliminate costly stockouts and destructive over-staffing, leveraging historic diner throughput and localized trends.",
    icon: "monitoring",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    tags: ["Zero Waste Prep", "Smart Rostering"],
  },
  {
    title: "Optimized Operating Efficiency",
    description:
      "Achieve measurable increases in table turns, direct food cost reductions between 4%–9%, and heightened diner satisfaction scores within the critical first 6 operating months.",
    icon: "speed",
    iconBg: "bg-tertiary/10",
    iconColor: "text-tertiary",
    tags: ["4-9% Margin Lift", "Rapid Turnover"],
  },
  {
    title: "Local to Global Standards",
    description:
      "We seamlessly adapt international fine dining benchmarks to respect and captivate local consumer palates, ensuring effortless cultural resonance across disparate culinary markets.",
    icon: "public",
    iconBg: "bg-primary-container/10",
    iconColor: "text-primary-container",
    tags: ["Cultural Palate Tuning", "Global Benchmarks"],
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 px-gutter bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-label-sm uppercase tracking-widest text-primary font-bold">
            The Strategic Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 font-normal">
            Why Discerning Restaurateurs Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-outline-variant/20"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center ${pillar.iconColor} mb-6`}
                >
                  <span className="material-symbols-outlined text-[28px]">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-title-md text-on-surface mb-3 font-semibold">
                  {pillar.title}
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-surface-container text-on-surface text-body-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
