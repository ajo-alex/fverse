import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface shadow-[0_-1px_10px_rgba(0,0,0,0.02)] border-t border-outline-variant/30">
      <div className="w-full px-gutter py-space-xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg mb-space-lg">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <Image
                alt="Foodiverse Brand Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W5ryWGDsfPquLCsCn8pbbQ2_UH6qlcgBTOkaGJsZr5y2_Oe8mmtPrpmV2gOwvk3Hf6WS90kgc8ph5ldkkigUVrFg0QPu3iJejeFyLXxElpjQqh2WHhEWoClJQy0Vn4emhhRaidhHelFLvss8Fmjcn-d_ZWSyAwVDWHz7bkwNQhbq1XZIyil3PmDpRbAk_W0f0e8gtV_7Lw2_GG2qTrkESfmrpwpcN0sI0-0HTcmq7mgcIruohuytbcyezR"
                width={140}
                height={32}
              />
              <span className="font-serif text-2xl font-medium text-on-surface">
                Foodiverse
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant max-w-sm leading-relaxed">
              Haute-gastronomy conceptualization, Michelin-grade culinary
              architecture, and turnkey operational rollouts for world-class
              hotel groups and discerning independent restaurateurs.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm tracking-widest uppercase font-bold">
                Atelier &amp; Culinary Lab
              </span>
            </div>
          </div>

          {/* Global Footprint */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="text-title-sm text-on-surface font-semibold tracking-wide uppercase">
              Global Footprint
            </span>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Active advisory hubs delivering concept engineering across key
              culinary capitals:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface text-body-sm font-medium">
                Canada
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface text-body-sm font-medium">
                India
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface text-body-sm font-medium">
                Dubai
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface text-body-sm font-medium">
                Australia
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface text-body-sm font-medium">
                Sri Lanka
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="text-title-sm text-on-surface font-semibold tracking-wide uppercase">
              Navigation
            </span>
            <div className="flex flex-col gap-2">
              <a
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                href="#about"
              >
                About Atelier
              </a>
              <a
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                href="#pipeline-section"
              >
                6-Step Launch Plan
              </a>
              <a
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                href="#our-process"
              >
                Culinary Architecture
              </a>
              <a
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                href="#why-choose-us"
              >
                Why Choose Us
              </a>
              <a
                className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                href="#leadership-team"
              >
                Principals &amp; Chefs
              </a>
            </div>
          </div>

          {/* Direct Inquiries */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="text-title-sm text-on-surface font-semibold tracking-wide uppercase">
              Direct Inquiries
            </span>
            <div className="flex flex-col gap-2.5 text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                  call
                </span>
                <a
                  className="hover:text-primary transition-colors font-medium text-on-surface"
                  href="tel:+917994458027"
                >
                  +91-7994458027
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                  mail
                </span>
                <a
                  className="hover:text-primary transition-colors break-all"
                  href="mailto:foodiversehospitality@gmail.com"
                >
                  foodiversehospitality@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                  location_on
                </span>
                <span>Executive Advisory Board &amp; Regional Bureaus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-space-md border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <span className="text-body-sm text-on-surface-variant">
            &copy; 2025 Foodiverse Hospitality Consulting. All rights reserved.
          </span>
          <div className="flex items-center gap-space-md text-body-sm text-on-surface-variant">
            <span className="hover:text-on-surface transition-colors cursor-pointer">
              Privacy Charter
            </span>
            <span className="hover:text-on-surface transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span className="hover:text-on-surface transition-colors cursor-pointer">
              Bespoke NDA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
