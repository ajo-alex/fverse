interface LaunchStep {
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  textColor: string;
}

const steps: LaunchStep[] = [
  {
    phase: "Phase 01",
    duration: "Weeks 1 – 3",
    title: "Conceptualisation",
    description:
      "Concept Development & Market Research to define your niche and guest archetype.",
    deliverables: [
      "Demographic & competitive zoning",
      "Brand positioning bible & USP",
    ],
    borderColor: "border-primary",
    badgeBg: "bg-primary-fixed",
    badgeText: "text-on-primary-fixed",
    textColor: "text-primary",
  },
  {
    phase: "Phase 02",
    duration: "Weeks 4 – 7",
    title: "Menu Engineering",
    description:
      "Culinary creativity, flavor profiling, and signature dish crafting with margin guardrails.",
    deliverables: [
      "Standard Recipe Cards (SRC)",
      "Tasting panels & plated styling guides",
    ],
    borderColor: "border-secondary",
    badgeBg: "bg-secondary-fixed",
    badgeText: "text-on-secondary-fixed",
    textColor: "text-secondary",
  },
  {
    phase: "Phase 03",
    duration: "Weeks 8 – 11",
    title: "Cost Control",
    description:
      "Estimation, yield optimization, and supplier negotiations to protect gross margins.",
    deliverables: [
      "Vendor RFP & ingredient pricing lock",
      "Theoretical vs. actual food cost matrix",
    ],
    borderColor: "border-tertiary",
    badgeBg: "bg-tertiary-fixed",
    badgeText: "text-on-tertiary-fixed",
    textColor: "text-tertiary",
  },
  {
    phase: "Phase 04",
    duration: "Weeks 12 – 15",
    title: "Strategy & Workflow",
    description:
      "Workflow optimization, KDS routing, and pass-station ergonomics for seamless kitchen speed.",
    deliverables: [
      "Line orchestration & ticket-time metrics",
      "HACCP & safety protocol blueprints",
    ],
    borderColor: "border-primary-container",
    badgeBg: "bg-surface-container-highest",
    badgeText: "text-on-surface",
    textColor: "text-primary-container",
  },
  {
    phase: "Phase 05",
    duration: "Weeks 16 – 19",
    title: "Capability Building",
    description:
      "Hands-on training, brigade culture coaching, and executive chef mentorship for consistency.",
    deliverables: [
      "Front & Back of House sync drills",
      "Soft launch & simulated high-volume dry-runs",
    ],
    borderColor: "border-outline",
    badgeBg: "bg-surface-variant",
    badgeText: "text-on-surface-variant",
    textColor: "text-outline",
  },
  {
    phase: "Phase 06",
    duration: "Weeks 20 – 24",
    title: "Infrastructure & Launch",
    description:
      "Heavy appliance commissioning, POS integration, and full operational rollout celebration.",
    deliverables: [
      "Extraction, refrigeration & equipment calibration",
      "Official doors open & launch metrics audit",
    ],
    borderColor: "border-primary",
    badgeBg: "bg-primary-fixed",
    badgeText: "text-on-primary-fixed",
    textColor: "text-primary",
  },
];

export default function LaunchPlan() {
  return (
    <section
      id="pipeline-section"
      className="py-24 px-gutter bg-surface relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-label-sm uppercase tracking-widest text-primary font-bold">
              Turnkey Culinary Blueprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface mt-2 font-normal">
              Your Kitchen Success: A 6-Step Launch Plan
            </h2>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-md leading-relaxed">
            A phased, risk-mitigated rollout architecture designed to transition
            an initial concept into a profitable, Michelin-standard operation
            within 180 days.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.phase}
              className={`p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer border-l-4 ${step.borderColor} border border-outline-variant/20`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-label-sm px-2.5 py-1 rounded-full ${step.badgeBg} ${step.badgeText} font-bold`}
                  >
                    {step.phase}
                  </span>
                  <span className="text-body-sm text-on-surface-variant font-medium">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-title-md text-on-surface mb-2 font-semibold">
                  {step.title}
                </h3>
                <p className="text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-2 pt-2">
                  {step.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-body-sm text-on-surface gap-2"
                    >
                      <span
                        className={`material-symbols-outlined ${step.textColor} text-[18px]`}
                      >
                        check_circle
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`mt-6 pt-4 ${step.textColor} text-body-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform border-t border-surface-container`}
              >
                <span>Explore Milestone Deliverables</span>
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
