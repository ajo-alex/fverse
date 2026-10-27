interface LaunchStep {
  step: string;
  phase: string;
  title: string;
  timing: string;
  description: string;
  deliverables: string[];
}

const steps: LaunchStep[] = [
  {
    step: "01",
    phase: "PHASE 01 // SCOPING",
    title: "Concept Architecture & Market Feasibility",
    timing: "WEEKS 1–3",
    description:
      "Deep-dive demographic modeling, brand positioning manifesto, and rigorous pro-forma financial scoping before signing commercial leases.",
    deliverables: [
      "Target Diner Persona & Average Check Model",
      "5-Year Pro-Forma EBITDA & Cash Flow Model",
      "Competitive White-Space Radius Map",
    ],
  },
  {
    step: "02",
    phase: "PHASE 02 // GASTRONOMY",
    title: "Bespoke Menu Engineering & Sensory Testing",
    timing: "WEEKS 4–6",
    description:
      "Recipe development, signature formulation, supplier sourcing, sensory blind-tasting panels, and yield-optimized batch sheets.",
    deliverables: [
      "Standardized Recipe Bibles & Plating Spec",
      "Prime Food Cost Target Matrix (Under 28%)",
      "Vendor Sourcing & Supply Redundancy Contracts",
    ],
  },
  {
    step: "03",
    phase: "PHASE 03 // ERGONOMICS",
    title: "Kitchen Ergonomics & Equipment Specification",
    timing: "WEEKS 7–9",
    description:
      "Full back-of-house architectural layout, station choreography, equipment procurement schedules, and mechanical/electrical coordination.",
    deliverables: [
      "Zero-Cross-Traffic Kitchen Line CAD",
      "Commercial Equipment Procurement Schedule",
      "Health, Fire & Regulatory Compliance Filing",
    ],
  },
  {
    step: "04",
    phase: "PHASE 04 // SYSTEMS",
    title: "Operational Systems & POS Integration",
    timing: "WEEKS 10–12",
    description:
      "Deployment of kitchen display systems (KDS), cloud POS matrices, automated inventory deduction, and real-time labor scheduling tools.",
    deliverables: [
      "Cloud POS & KDS Route Choreography",
      "Automated Depletion & Re-order Triggers",
      "Digital SOP Manual & Tablet Integration",
    ],
  },
  {
    step: "05",
    phase: "PHASE 05 // BRIGADE",
    title: "Brigade Curation & Service Rituals",
    timing: "WEEKS 13–15",
    description:
      "Recruiting top culinary mentors, line cooks, and service captains. Executing intensive brigade bootcamps and front-of-house choreography.",
    deliverables: [
      "Executive Chef & Floor Captain Hiring",
      "7-Day Pre-Opening Simulation Drill",
      "Sensory Table Service & Upsell Protocol",
    ],
  },
  {
    step: "06",
    phase: "PHASE 06 // COMMISSION",
    title: "Turnkey Launch & Post-Opening Audit",
    timing: "WEEK 16 ONWARD",
    description:
      "Soft opening execution, VIP friends & family calibrations, full commercial rollout, and rigorous day-30 / day-90 P&L stabilization audits.",
    deliverables: [
      "On-Site Expediting & Pass Supervision",
      "30-Day Prime Cost Variance Reconciliation",
      "Diner NPS & Revenue Velocity Optimization",
    ],
  },
];

export default function LaunchPlan() {
  return (
    <section
      id="launch-plan"
      className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-[rgba(190,141,63,0.2)]"
    >
      {/* Section Header */}
      <div className="reveal-init reveal-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(190,141,63,0.2)] mb-16">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#BE8D3F] mb-4 flex items-center gap-2">
            <span>[EXECUTION ROADMAP // 05]</span>
            <span className="w-8 h-[1px] bg-[#BE8D3F]" />
            <span className="text-[#C8BBA8]">FROM FEASIBILITY TO OPENING NIGHT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5E4C7]">
            THE 6-STEP TURNKEY LAUNCH PLAN
          </h2>
        </div>

        <div className="font-mono text-xs text-[#C8BBA8] max-w-xs leading-relaxed border-l border-[#BE8D3F]/40 pl-4">
          A disciplined execution blueprint deployed across fine dining bistros, boutique cafes, and commercial food hall venues.
        </div>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div
            key={step.step}
            className={`reveal-init reveal-fade-up delay-${((idx % 3) + 1) * 100} reveal-cascade p-8 bg-[#16100A] border border-[rgba(190,141,63,0.22)] shadow-[0_16px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#BE8D3F] hover:-translate-y-1 transition-all group`}
          >
            <div>
              {/* Top Tag Row */}
              <div className="reveal-item flex items-center justify-between pb-4 border-b border-[rgba(190,141,63,0.15)] mb-5 font-mono text-xs">
                <span className="px-2.5 py-1 bg-[#BE8D3F] text-[#100B06] font-bold text-[11px]">
                  STEP {step.step}
                </span>
                <span className="font-bold text-[#F5E4C7] bg-[#100B06] px-2.5 py-1 border border-[rgba(190,141,63,0.25)] text-[10px]">
                  {step.timing}
                </span>
              </div>

              <div className="reveal-item font-mono text-[11px] font-bold text-[#BE8D3F] uppercase mb-1">
                {step.phase}
              </div>

              <h3 className="reveal-item font-display text-2xl font-black uppercase tracking-tight text-[#F5E4C7] group-hover:text-[#BE8D3F] transition-colors mb-3">
                {step.title}
              </h3>

              <p className="reveal-item text-sm text-[#C8BBA8] leading-relaxed mb-6 font-normal">
                {step.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-[rgba(190,141,63,0.15)] font-mono text-xs">
                <div className="reveal-item text-[10px] uppercase tracking-wider text-[#BE8D3F] font-bold">
                  MILESTONE DELIVERABLES:
                </div>
                {step.deliverables.map((item, itemIdx) => (
                  <div key={itemIdx} className="reveal-item flex items-start gap-2 text-[#C8BBA8]">
                    <span className="material-symbols-outlined text-[16px] text-[#BE8D3F] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-[11px] leading-tight font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA bar */}
            <div className="reveal-item mt-8 pt-4 border-t border-[rgba(190,141,63,0.15)] flex items-center justify-between font-mono text-xs font-bold">
              <span className="text-[#C8BBA8] group-hover:text-[#BE8D3F] transition-colors">
                VIEW SPECIFICATION
              </span>
              <span className="text-base text-[#BE8D3F] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
