interface Leader {
  initials: string;
  avatarBg: string;
  avatarText: string;
  role: string;
  roleColor: string;
  name: string;
  subtitle: string;
  bio: string;
  badgeIcon: string;
  badgeLabel: string;
}

const leaders: Leader[] = [
  {
    initials: "AS",
    avatarBg: "bg-primary/10",
    avatarText: "text-primary",
    role: "Founder & Principal",
    roleColor: "text-primary",
    name: "Abin Sebastian",
    subtitle: "Culinary Concept Architect & Strategic Growth",
    bio: "Specializes in hospitality commercial modeling, brand revitalization, and scaling culinary formats across international boundaries with pristine guest sentiment.",
    badgeIcon: "award_star",
    badgeLabel: "14+ Yrs Michelin & Hotel Exp",
  },
  {
    initials: "AR",
    avatarBg: "bg-secondary/10",
    avatarText: "text-secondary",
    role: "Technology Consultant",
    roleColor: "text-secondary",
    name: "Abhijith Ragesh",
    subtitle: "Predictive POS Systems & Digital Operations",
    bio: "Spearheads kitchen automation architecture, automated inventory synchronization, and custom POS integration to banish stock-outs and labor over-scheduling.",
    badgeIcon: "memory",
    badgeLabel: "Kitchen Automation Lead",
  },
  {
    initials: "JN",
    avatarBg: "bg-tertiary/10",
    avatarText: "text-tertiary",
    role: "Co-Founder & Culinary Expert",
    roleColor: "text-tertiary",
    name: "Job Nathaniel",
    subtitle: "Haute Cuisine Direction & Menu Engineering",
    bio: "Master of recipe formulation, brigade training regimens, and sensory calibration. Ensures culinary integrity survives the rigors of commercial volume.",
    badgeIcon: "restaurant_menu",
    badgeLabel: "Executive Chef Mentor",
  },
];

export default function LeadershipTeam() {
  return (
    <section id="leadership-team" className="py-24 px-gutter bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-label-sm uppercase tracking-widest text-primary font-bold">
            Advisory Principals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 font-normal">
            The Leadership Team
          </h2>
          <p className="text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Seasoned gastronomes, operational architects, and kitchen
            technologists guiding your venture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all border border-outline-variant/20"
            >
              <div>
                <div
                  className={`w-16 h-16 rounded-full ${leader.avatarBg} ${leader.avatarText} flex items-center justify-center font-serif text-2xl mb-6 font-medium`}
                >
                  {leader.initials}
                </div>
                <span
                  className={`text-label-sm uppercase tracking-widest ${leader.roleColor} font-bold`}
                >
                  {leader.role}
                </span>
                <h3 className="text-title-md text-on-surface font-semibold mt-1">
                  {leader.name}
                </h3>
                <p className="text-body-sm text-on-surface-variant mt-1 font-medium">
                  {leader.subtitle}
                </p>
                <p className="text-body-sm text-on-surface-variant mt-4 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-variant flex items-center gap-2">
                <span
                  className={`material-symbols-outlined text-[18px] ${leader.roleColor}`}
                >
                  {leader.badgeIcon}
                </span>
                <span className="text-label-sm text-on-surface-variant uppercase font-bold">
                  {leader.badgeLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
