interface WorkflowStage {
  number: string;
  title: string;
  description: string;
  diagnosticLabel: string;
  diagnosticText: string;
  badgeBg: string;
  badgeText: string;
  colorClass: string;
}

const stages: WorkflowStage[] = [
  {
    number: "01",
    title: "Assessment",
    description:
      "In-depth operational audit of your current kitchen setup, inventory leakage, and guest feedback gaps.",
    diagnosticLabel: "Diagnostic:",
    diagnosticText: "Full P&L Breakdown & Waste Indexing",
    badgeBg: "bg-primary/10",
    badgeText: "text-primary",
    colorClass: "text-primary",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Crafting bespoke tactical roadmaps tailored to your localized guest demographics and budget parameters.",
    diagnosticLabel: "Diagnostic:",
    diagnosticText: "Menu Matrix & Contribution Margin Map",
    badgeBg: "bg-secondary/10",
    badgeText: "text-secondary",
    colorClass: "text-secondary",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Hands-on execution on the kitchen line, kitchen technology deployment, and staff behavioral coaching.",
    diagnosticLabel: "Diagnostic:",
    diagnosticText: "Real-Time KDS Velocity & Flow Analytics",
    badgeBg: "bg-tertiary/10",
    badgeText: "text-tertiary",
    colorClass: "text-tertiary",
  },
  {
    number: "04",
    title: "Review & Refine",
    description:
      "Continuous quarterly improvements driven by POS metrics, diner Net Promoter Scores, and supplier pricing shifts.",
    diagnosticLabel: "Diagnostic:",
    diagnosticText: "Weekly Prime Cost Re-balancing",
    badgeBg: "bg-primary-container/10",
    badgeText: "text-primary-container",
    colorClass: "text-primary-container",
  },
];

export default function ProcessWorkflow() {
  return (
    <section
      id="our-process"
      className="py-24 px-gutter bg-surface-container-high/50 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label-sm uppercase tracking-widest text-primary font-bold">
            Iterative Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-surface mt-2 font-normal">
            From Intent to Impact: Our Process
          </h2>
          <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed">
            A continuous, metrics-guided feedback loop ensuring zero operational
            blindspots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/20"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-full ${stage.badgeBg} ${stage.badgeText} flex items-center justify-center font-bold text-title-sm mb-4`}
                >
                  {stage.number}
                </div>
                <h3 className="text-title-md text-on-surface mb-2 font-semibold">
                  {stage.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                  {stage.description}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low text-on-surface-variant text-body-sm">
                <span className={`${stage.colorClass} font-bold mr-1`}>
                  {stage.diagnosticLabel}
                </span>
                {stage.diagnosticText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
