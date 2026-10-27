import ShaderCanvas from "./ShaderCanvas";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-surface py-20 lg:py-28 px-gutter flex flex-col justify-center items-center text-center"
    >
      {/* WebGL living backdrop */}
      <ShaderCanvas />

      {/* Warm atmospheric glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-secondary-container/15 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/90 shadow-sm backdrop-blur-md mb-8 border border-outline-variant/30">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="w-2 h-2 -ml-3 rounded-full bg-primary" />
          <span className="text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
            Michelin-Grade Strategies &amp; Restaurant Launches
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] lg:leading-[1.08] text-on-surface font-normal tracking-tight max-w-4xl text-balance">
          Where Flavor Meets Vision — Bringing Your Culinary Concepts to Life
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          At Foodiverse, we blend culinary creativity with operational excellence.
          We provide tailored strategies for launching or reinventing brands,
          empowering restaurateurs to drive sustained growth and craft
          unforgettable guest experiences from concept to launch.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-on-primary text-title-sm font-semibold transition-all duration-300 hover:bg-primary-container shadow-[0_4px_20px_-2px_rgba(168,50,17,0.35)] hover:shadow-[0_0_28px_rgba(168,50,17,0.55)] hover:-translate-y-0.5"
            href="#audit-scheduler"
          >
            <span className="material-symbols-outlined mr-2 text-[20px]">
              calendar_month
            </span>
            Book a Functional Audit
          </a>
          <a
            className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-surface-container text-on-surface text-title-sm font-semibold transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-0.5 shadow-sm border border-outline-variant/30"
            href="#pipeline-section"
          >
            <span>Explore 6-Step Launch Plan</span>
            <span className="material-symbols-outlined ml-2 text-[20px]">
              arrow_downward
            </span>
          </a>
        </div>

        {/* Live Metric Badges Matrix */}
        <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center group hover:bg-surface-container-lowest hover:shadow-md transition-all">
            <span className="font-serif text-3xl font-medium text-primary">
              6 Mos
            </span>
            <span className="text-label-md text-on-surface-variant uppercase mt-1 tracking-wider">
              To Peak Efficiency
            </span>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center group hover:bg-surface-container-lowest hover:shadow-md transition-all">
            <span className="font-serif text-3xl font-medium text-secondary">
              100%
            </span>
            <span className="text-label-md text-on-surface-variant uppercase mt-1 tracking-wider">
              Tailored Culinary Eng.
            </span>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center group hover:bg-surface-container-lowest hover:shadow-md transition-all">
            <span className="font-serif text-3xl font-medium text-tertiary">
              5+ Nations
            </span>
            <span className="text-label-md text-on-surface-variant uppercase mt-1 tracking-wider">
              Global Advisory Hubs
            </span>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center group hover:bg-surface-container-lowest hover:shadow-md transition-all">
            <span className="font-serif text-3xl font-medium text-primary-container">
              0% Outage
            </span>
            <span className="text-label-md text-on-surface-variant uppercase mt-1 tracking-wider">
              Predictive Stocking
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
