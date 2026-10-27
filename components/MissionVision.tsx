export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="py-20 px-gutter bg-surface-container-low relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-label-sm uppercase tracking-widest text-primary font-bold">
            The Strategic Anchor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 font-normal">
            Harmonizing Passion with Commercial Mastery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 lg:p-10 rounded-2xl bg-surface shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-outline-variant/20">
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[32px]">
                  skillet
                </span>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-label-sm uppercase tracking-widest font-bold mb-3">
                Our Mission
              </div>
              <h3 className="font-serif text-2xl text-on-surface mb-4 font-medium">
                Driving Growth &amp; Culinary Precision
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Driving growth and success for restaurateurs through innovative
                strategies. We streamline complex food operations by combining
                high culinary precision with creative problem-solving, turning
                kitchen complexity into operational elegance.
              </p>
            </div>
            <div className="mt-8 pt-6 flex items-center justify-between border-t border-surface-variant">
              <span className="text-title-sm text-on-surface font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  verified
                </span>
                Operational Streamlining
              </span>
              <span className="text-label-sm text-on-surface-variant uppercase font-bold">
                Pillar 01
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 lg:p-10 rounded-2xl bg-surface shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-outline-variant/20">
            <div>
              <div className="w-14 h-14 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-6 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[32px]">
                  nest_heat_link_gen_3
                </span>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-label-sm uppercase tracking-widest font-bold mb-3">
                Our Vision
              </div>
              <h3 className="font-serif text-2xl text-on-surface mb-4 font-medium">
                Sustainable Longevity &amp; Peak Guest Delight
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Our vision is a future where restaurants thrive by unlocking
                their full potential, consistently delivering exceptional
                dining experiences, and achieving long-term, sustainable
                profitability in an ever-shifting gastronomic landscape.
              </p>
            </div>
            <div className="mt-8 pt-6 flex items-center justify-between border-t border-surface-variant">
              <span className="text-title-sm text-on-surface font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  eco
                </span>
                Sustainable Profitability
              </span>
              <span className="text-label-sm text-on-surface-variant uppercase font-bold">
                Pillar 02
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
