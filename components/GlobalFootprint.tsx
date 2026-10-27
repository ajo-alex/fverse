"use client";

import { useState } from "react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  location: string;
  country: string;
  marketTag: string;
  headline: string;
  description: string;
  result: string;
  resultLabel: string;
  servicesDelivered: string[];
  featuredImage?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "bang-bang-burritos",
    name: "Bang Bang Burritos",
    category: "FAST-CASUAL SCALE",
    location: "Oshawa, Ontario",
    country: "Canada",
    marketTag: "canada",
    headline: "High-Throughput Line Re-Engineering & Prep Compression",
    description:
      "Turnkey menu engineering and station throughput acceleration for a high-volume fast-casual concept expanding across Southern Ontario. Redesigned the hot-table flow and batch-prep cycles.",
    result: "+32%",
    resultLabel: "TABLE VELOCITY INCREASE",
    servicesDelivered: ["Station Ergonomics", "Portion Control", "Throughput Blueprint"],
  },
  {
    id: "majestic-city-mall",
    name: "Majestic City Mall Food Hall",
    category: "COMMERCIAL HUB",
    location: "Toronto, Ontario",
    country: "Canada",
    marketTag: "canada",
    headline: "Multi-Tenant Master Planning & Back-of-House Shared Logistics",
    description:
      "Comprehensive food hall master-planning, culinary tenant curation, and shared back-of-house logistics optimization across 12 distinct operator units to eliminate prep bottlenecks.",
    result: "12 VENUES",
    resultLabel: "LOGISTICS UNIFIED UNDER 1 SOP",
    servicesDelivered: ["Shared BOH Design", "Tenant Curation", "KDS Flow Choreography"],
    featuredImage: "/images/dining_architecture.jpg",
  },
  {
    id: "halaleez-grill",
    name: "Halaleez Grill",
    category: "SPECIALTY CUISINE",
    location: "Whitby, Ontario",
    country: "Canada",
    marketTag: "canada",
    headline: "Bespoke Marinade Chemistry & Prime Cost Compression",
    description:
      "Proprietary dry-rub and marinade formulation, kitchen line flow restructuring, and guest ordering journey remodeling tailored for high customer retention and reduced food scrap.",
    result: "5.8%",
    resultLabel: "DIRECT FOOD COST SUPPRESSION",
    servicesDelivered: ["Marinade Formulation", "Prime Cost Forensics", "Guest Journey Mapping"],
    featuredImage: "/images/menu_dish.jpg",
  },
  {
    id: "chaikaari",
    name: "ChaiKaari Atelier",
    category: "MULTINATIONAL CAFE",
    location: "India • UAE • Australia",
    country: "International",
    marketTag: "international",
    headline: "Cross-Border Sensory Scalability & Micro-Batching",
    description:
      "Multi-country tea atelier rollout translating traditional chai heritage into high-speed contemporary cafe formats across disparate spice supply chains and municipal codes.",
    result: "240+",
    resultLabel: "DAILY HOURLY BREW VELOCITY",
    servicesDelivered: ["Sensory Benchmarking", "Supply Redundancy", "Franchise SOP Bible"],
  },
];

export default function GlobalFootprint() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "canada" | "international">("all");

  const filteredStudies = caseStudies.filter((item) => {
    if (selectedFilter === "all") return true;
    return item.marketTag === selectedFilter;
  });

  return (
    <section
      id="case-studies"
      className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-[rgba(190,141,63,0.2)]"
    >
      {/* Section Header */}
      <div className="reveal-init reveal-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(190,141,63,0.2)] mb-16">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#BE8D3F] mb-4 flex items-center gap-2">
            <span>[SELECTED COMMISSIONS // 06]</span>
            <span className="w-8 h-[1px] bg-[#BE8D3F]" />
            <span className="text-[#C8BBA8]">PROVEN COMMERCIAL RESULTS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5E4C7]">
            SELECTED CASE STUDIES &amp; PORTFOLIO
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {(["all", "canada", "international"] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedFilter === filter
                  ? "bg-[#BE8D3F] text-[#100B06] border border-[#D8A552] shadow-[0_0_16px_rgba(190,141,63,0.3)]"
                  : "bg-[#16100A] text-[#C8BBA8] border border-[rgba(190,141,63,0.2)] hover:border-[#BE8D3F] hover:text-[#F5E4C7]"
              }`}
            >
              [ {filter === "all" ? "ALL COMMISSIONS" : filter} ]
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetrical Editorial Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {filteredStudies.map((project, idx) => {
          const isLarge = idx === 1 || idx === 2;
          return (
            <div
              key={project.id}
              className={`reveal-init reveal-fade-up delay-${((idx % 2) + 1) * 150} reveal-cascade ${
                isLarge ? "lg:col-span-7" : "lg:col-span-5"
              } bg-[#16100A] border border-[rgba(190,141,63,0.22)] shadow-[0_20px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden group hover:border-[#BE8D3F] hover:-translate-y-1 transition-all`}
            >
              {/* Optional Editorial Image */}
              {project.featuredImage && (
                <div className="reveal-item relative w-full aspect-[16/9] bg-[#0D0804] border-b border-[rgba(190,141,63,0.2)] overflow-hidden">
                  <Image
                    src={project.featuredImage}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16100A]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#100B06]/90 text-[#F5E4C7] font-mono text-[10px] uppercase tracking-widest border border-[rgba(190,141,63,0.3)] backdrop-blur-sm">
                    ARCHIVAL CAPTURE
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-8">
                {/* Meta Header */}
                <div className="reveal-item flex items-center justify-between pb-3 border-b border-[rgba(190,141,63,0.15)] mb-5 font-mono text-xs">
                  <span className="px-2.5 py-0.5 bg-[#BE8D3F]/15 border border-[#BE8D3F]/40 text-[#BE8D3F] font-bold text-[10px] uppercase">
                    {project.category}
                  </span>
                  <span className="text-[#C8BBA8] font-bold">
                    📍 {project.location}
                  </span>
                </div>

                <h3 className="reveal-item font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F5E4C7] group-hover:text-[#BE8D3F] transition-colors mb-2">
                  {project.name}
                </h3>

                <div className="reveal-item font-mono text-xs font-bold text-[#BE8D3F] uppercase mb-4">
                  {project.headline}
                </div>

                <p className="reveal-item text-sm text-[#C8BBA8] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="reveal-item flex flex-wrap gap-2 mb-6">
                  {project.servicesDelivered.map((srv) => (
                    <span
                      key={srv}
                      className="px-2.5 py-1 bg-[#100B06] text-[#F5E4C7] font-mono text-[11px] font-medium border border-[rgba(190,141,63,0.2)]"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Result Callout Strip */}
              <div className="reveal-item p-6 bg-[#140E08] border-t border-[rgba(190,141,63,0.2)] flex items-center justify-between">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-black tracking-tight text-[#BE8D3F] leading-none">
                    {project.result}
                  </div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#C8BBA8] mt-1">
                    {project.resultLabel}
                  </div>
                </div>
                <span className="font-mono text-xs font-bold border border-[#BE8D3F]/40 px-3 py-1.5 text-[#F5E4C7] group-hover:bg-[#BE8D3F] group-hover:text-[#100B06] transition-colors">
                  CASE VERIFIED ↗
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
