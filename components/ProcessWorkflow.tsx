interface Stage {
  number: string;
  phase: string;
  title: string;
  description: string;
  diagnosticText: string;
  actionItems: string[];
}

const stages: Stage[] = [
  {
    number: "01",
    phase: "PHASE 01 // DISCOVER",
    title: "Forensic Assessment",
    description:
      "In-depth operational audit of your existing or planned kitchen lines, supply-chain leakage, waste indices, and diner sentiment voids.",
    diagnosticText: "Full P&L Breakdown & Waste Indexing",
    actionItems: [
      "Station prep ergonomics audit",
      "Supplier invoice variance audit",
      "Table turn & throughput benchmarking",
    ],
  },
  {
    number: "02",
    phase: "PHASE 02 // ARCHITECT",
    title: "Tactical Strategy",
    description:
      "Crafting bespoke tactical roadmaps tailored to your localized consumer demographics, CAPEX parameters, and competitive perimeter.",
    diagnosticText: "Menu Matrix & Contribution Margin Map",
    actionItems: [
      "Algorithmic recipe portion modeling",
      "Prime cost containment matrix",
      "Brigade labor curve scheduling",
    ],
  },
  {
    number: "03",
    phase: "PHASE 03 // DEPLOY",
    title: "Line Implementation",
    description:
      "Hands-on execution directly on the kitchen pass, predictive POS/KDS technology integration, and brigade muscle-memory coaching.",
    diagnosticText: "Real-Time KDS Velocity & Flow Analytics",
    actionItems: [
      "Live expediting rehearsals",
      "Automated inventory sync",
      "Front & back of house service choreography",
    ],
  },
  {
    number: "04",
    phase: "PHASE 04 // REFINE",
    title: "Compounding Review",
    description:
      "Continuous optimization driven by live POS telemetry, net margin fluctuations, seasonal supplier shifts, and diner sentiment scores.",
    diagnosticText: "Weekly Prime Cost Re-balancing",
    actionItems: [
      "Weekly plate-yield rebalancing",
      "Quarterly menu revitalization",
      "Executive advisory steering calls",
    ],
  },
];

export default function ProcessWorkflow() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-[rgba(190,141,63,0.2)]"
    >
      {/* Editorial Header */}
      <div className="reveal-init reveal-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(190,141,63,0.2)] mb-16">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#BE8D3F] mb-4 flex items-center gap-2">
            <span>[THE PROCESS WORKFLOW // 04]</span>
            <span className="w-8 h-[1px] bg-[#BE8D3F]" />
            <span className="text-[#C8BBA8]">SYSTEMATIC GASTRONOMIC ARCHITECTURE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5E4C7]">
            FOUR ITERATIVE STAGES TO PEAK VIABILITY
          </h2>
        </div>

        <div className="font-mono text-xs text-[#C8BBA8] max-w-xs leading-relaxed border-l border-[#BE8D3F]/40 pl-4">
          Every restaurant is an operational mechanism. We calibrate each component in sequence to ensure compound profitability.
        </div>
      </div>

      {/* 4-Stage Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((stage, idx) => (
          <div
            key={stage.number}
            className={`reveal-init reveal-fade-up delay-${(idx + 1) * 100} reveal-cascade p-8 bg-[#16100A] border border-[rgba(190,141,63,0.22)] shadow-[0_16px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#BE8D3F] hover:-translate-y-1 transition-all group`}
          >
            <div>
              {/* Header Box */}
              <div className="reveal-item flex items-center justify-between pb-4 border-b border-[rgba(190,141,63,0.15)] mb-6 font-mono text-xs">
                <span className="font-display text-3xl font-black text-[#BE8D3F]">
                  {stage.number}
                </span>
                <span className="px-2 py-0.5 border border-[rgba(190,141,63,0.3)] bg-[#100B06] text-[#C8BBA8] text-[10px] font-bold uppercase">
                  {stage.phase.split("//")[1]?.trim()}
                </span>
              </div>

              <span className="reveal-item font-mono text-[11px] font-bold text-[#BE8D3F] uppercase tracking-wider block mb-1">
                {stage.phase}
              </span>

              <h3 className="reveal-item font-display text-2xl font-black uppercase text-[#F5E4C7] mb-3 group-hover:text-[#BE8D3F] transition-colors">
                {stage.title}
              </h3>

              <p className="reveal-item text-sm text-[#C8BBA8] leading-relaxed mb-6 font-normal">
                {stage.description}
              </p>

              {/* Action Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-[rgba(190,141,63,0.15)] mb-6 font-mono text-xs">
                {stage.actionItems.map((item, itemIdx) => (
                  <div key={itemIdx} className="reveal-item flex items-start gap-2 text-[#C8BBA8]">
                    <span className="text-[#BE8D3F] font-bold shrink-0">→</span>
                    <span className="text-[11px] leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Stamp */}
            <div className="reveal-item p-3.5 bg-[#100B06] border border-[rgba(190,141,63,0.25)] font-mono text-xs">
              <div className="text-[9px] uppercase tracking-widest text-[#BE8D3F] font-bold mb-1">
                PRIMARY DELIVERABLE:
              </div>
              <div className="text-[11px] text-[#F5E4C7] font-semibold leading-tight">
                {stage.diagnosticText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
