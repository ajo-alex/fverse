"use client";

import { useState } from "react";

interface PortfolioItem {
  id: string;
  name: string;
  badge: string;
  badgeClass: string;
  countryLabel: string;
  location: string;
  description: string;
  result: string;
  markets: string[];
  spanTwoCols?: boolean;
}

const portfolio: PortfolioItem[] = [
  {
    id: "bang-bang-burritos",
    name: "Bang Bang Burritos",
    badge: "Fast-Casual Scale",
    badgeClass: "bg-primary-fixed text-on-primary-fixed",
    countryLabel: "🇨🇦 Canada",
    location: "Oshawa, Canada",
    description:
      "Turnkey menu engineering and throughput acceleration for a high-volume fast-casual concept expansion.",
    result: "+32% Table Velocity",
    markets: ["Canada"],
  },
  {
    id: "majestic-city-mall",
    name: "Majestic City Mall",
    badge: "Commercial Hub",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
    countryLabel: "🇨🇦 Canada",
    location: "Toronto, Canada",
    description:
      "Comprehensive food hall master-planning, culinary tenant curation, and shared back-of-house logistics optimization.",
    result: "12 Venues Unified",
    markets: ["Canada"],
  },
  {
    id: "halaleez-grill",
    name: "Halaleez Grill",
    badge: "Specialty Cuisine",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    countryLabel: "🇨🇦 Canada",
    location: "Whitby, Canada",
    description:
      "Bespoke marinade formulation, kitchen flow restructuring, and guest journey remodeling for high-retention dining.",
    result: "5.8% Food Cost Cut",
    markets: ["Canada"],
  },
  {
    id: "chaikaari",
    name: "ChaiKaari",
    badge: "Multinational Cafe",
    badgeClass: "bg-primary-fixed-dim text-on-primary-fixed-variant",
    countryLabel: "🇮🇳 🇦🇪 🇦🇺 Multi",
    location: "India • Dubai • Australia",
    description:
      "Multi-market franchise playbook creation, centralized commissary prep guidelines, and beverage packaging architecture.",
    result: "3-Nation Expansion",
    markets: ["India", "Dubai", "Australia"],
  },
  {
    id: "soul-and-surf",
    name: "Soul and Surf",
    badge: "Experiential Hospitality",
    badgeClass: "bg-secondary-fixed-dim text-on-secondary-fixed-variant",
    countryLabel: "🇮🇳 India • 🇱🇰 Sri Lanka",
    location: "Kerala, India & Ahangama, Sri Lanka",
    description:
      "Hyper-local, farm-to-table coastal cuisine formulation. Implemented zero-plastic sourcing policies, indigenous seafood pairing menus, and beachfront sunset beverage curation.",
    result: "4.9 Star Diner Satisfaction Rating",
    markets: ["India", "Sri Lanka"],
    spanTwoCols: true,
  },
];

const filterOptions = [
  { label: "All Markets", value: "all" },
  { label: "🇨🇦 Canada", value: "Canada" },
  { label: "🇮🇳 India", value: "India" },
  { label: "🇦🇪 Dubai", value: "Dubai" },
  { label: "🇦🇺 Australia", value: "Australia" },
  { label: "🇱🇰 Sri Lanka", value: "Sri Lanka" },
];

export default function GlobalFootprint() {
  const [selectedMarket, setSelectedMarket] = useState("all");

  const filteredItems =
    selectedMarket === "all"
      ? portfolio
      : portfolio.filter((item) => item.markets.includes(selectedMarket));

  return (
    <section
      id="global-footprint"
      className="py-24 px-gutter bg-surface-container-low"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-label-sm uppercase tracking-widest text-primary font-bold">
              International Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 font-normal">
              Global Footprint &amp; Portfolio
            </h2>
          </div>

          {/* Country quick filter badges */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => {
              const isActive = selectedMarket === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelectedMarket(filter.value)}
                  className={`px-3 py-1.5 rounded-full text-body-sm transition-all cursor-pointer ${
                    isActive
                      ? "bg-surface-container-highest text-on-surface font-semibold shadow-sm ring-1 ring-outline-variant/50"
                      : "bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl bg-surface shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border border-outline-variant/20 ${
                item.spanTwoCols && selectedMarket === "all"
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2.5 py-0.5 rounded text-label-sm font-bold ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                  <span className="text-body-sm text-on-surface-variant font-medium">
                    {item.countryLabel}
                  </span>
                </div>
                <h3 className="text-title-md text-on-surface font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="text-body-sm text-primary font-medium mb-3">
                  {item.location}
                </p>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>Result:</span>
                <span className="font-bold text-on-surface">{item.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
