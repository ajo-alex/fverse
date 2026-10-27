interface Principal {
  initials: string;
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  credentialsBadge: string;
  icon: string;
}

const principals: Principal[] = [
  {
    initials: "AS",
    name: "Abin Sebastian",
    role: "FOUNDER & CONCEPT ARCHITECT",
    subtitle: "Commercial Hospitality Modeling & Format Scale",
    bio: "Specializes in hospitality commercial modeling, brand revitalization, and scaling high-yield culinary formats across North America and the Middle East with pristine guest sentiment.",
    credentialsBadge: "14+ YRS MICHELIN & HOTEL EXP",
    icon: "verified",
  },
  {
    initials: "AR",
    name: "Abhijith Ragesh",
    role: "TECHNOLOGY & SYSTEMS CONSULTANT",
    subtitle: "Predictive POS Systems & Kitchen Telemetry",
    bio: "Spearheads kitchen automation architecture, automated inventory synchronization, and custom POS integration to banish stock-outs and labor over-scheduling across multi-unit operations.",
    credentialsBadge: "KITCHEN AUTOMATION LEAD",
    icon: "memory",
  },
  {
    initials: "JN",
    name: "Job Nathaniel",
    role: "CO-FOUNDER & CULINARY DIRECTOR",
    subtitle: "Haute-Cuisine Direction & Menu Engineering",
    bio: "Master of sensory recipe formulation, brigade training regimens, and flavor calibration. Ensures culinary integrity survives the relentless volume and pace of commercial dining.",
    credentialsBadge: "EXECUTIVE CHEF MENTOR",
    icon: "restaurant_menu",
  },
];

export default function LeadershipTeam() {
  return (
    <section
      id="principals"
      className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-[rgba(190,141,63,0.2)]"
    >
      {/* Section Header */}
      <div className="reveal-init reveal-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(190,141,63,0.2)] mb-16">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#BE8D3F] mb-4 flex items-center gap-2">
            <span>[THE PRINCIPALS // 07]</span>
            <span className="w-8 h-[1px] bg-[#BE8D3F]" />
            <span className="text-[#C8BBA8]">EXECUTIVE ADVISORY BOARD</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5E4C7]">
            ADVISORY PRINCIPALS &amp; CHEFS
          </h2>
        </div>

        <div className="font-mono text-xs text-[#C8BBA8] max-w-xs leading-relaxed border-l border-[#BE8D3F]/40 pl-4">
          Direct advisory spearheaded by veteran restaurateurs, Michelin-trained mentors, and hospitality technology consultants.
        </div>
      </div>

      {/* 3-Card Editorial Dossier Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principals.map((leader, idx) => (
          <div
            key={leader.name}
            className={`reveal-init reveal-fade-up delay-${(idx + 1) * 150} reveal-cascade p-8 bg-[#16100A] border border-[rgba(190,141,63,0.22)] shadow-[0_16px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#BE8D3F] hover:-translate-y-1 transition-all group`}
          >
            <div>
              {/* Header Stamp with Monogram Badge */}
              <div className="reveal-item flex items-center justify-between pb-4 border-b border-[rgba(190,141,63,0.15)] mb-6">
                <div className="w-12 h-12 bg-[#100B06] text-[#BE8D3F] font-mono text-base font-black flex items-center justify-center border border-[#BE8D3F]/40 shadow-[0_0_12px_rgba(190,141,63,0.15)]">
                  {leader.initials}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#C8BBA8] font-bold">
                  DOSSIER // PRINCIPAL
                </span>
              </div>

              <div className="reveal-item font-mono text-xs font-bold text-[#BE8D3F] uppercase tracking-wider mb-1">
                {leader.role}
              </div>

              <h3 className="reveal-item font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5E4C7] group-hover:text-[#BE8D3F] transition-colors mb-2">
                {leader.name}
              </h3>

              <div className="reveal-item font-mono text-xs font-bold text-[#C8BBA8] uppercase mb-4">
                {leader.subtitle}
              </div>

              <p className="reveal-item text-sm text-[#C8BBA8] leading-relaxed mb-6 font-normal">
                {leader.bio}
              </p>
            </div>

            {/* Bottom Credentials Tag */}
            <div className="reveal-item pt-4 border-t border-[rgba(190,141,63,0.15)] flex items-center justify-between font-mono text-xs">
              <span className="px-2.5 py-1 bg-[#100B06] border border-[#BE8D3F]/40 text-[#BE8D3F] font-bold text-[10px] uppercase tracking-wider">
                {leader.credentialsBadge}
              </span>
              <span className="material-symbols-outlined text-[20px] text-[#BE8D3F]">
                {leader.icon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
