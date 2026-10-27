"use client";

import { useState } from "react";

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    conceptName: "",
    email: "",
    location: "",
    stage: "launch",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      conceptName: "",
      email: "",
      location: "",
      stage: "launch",
      notes: "",
    });
    setSubmitted(false);
  };

  return (
    <section
      id="audit-scheduler"
      className="py-24 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-[rgba(190,141,63,0.2)]"
    >
      {/* Section Header */}
      <div className="reveal-init reveal-fade-up flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(190,141,63,0.2)] mb-16">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#BE8D3F] mb-4 flex items-center gap-2">
            <span>[COMMISSION AN AUDIT // 08]</span>
            <span className="w-8 h-[1px] bg-[#BE8D3F]" />
            <span className="text-[#C8BBA8]">DIAGNOSTIC SCOPING CALL</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#F5E4C7] leading-[1.02]">
            LET’S MAKE YOUR NEXT RESTAURANT<br />
            <span className="text-[#BE8D3F]">A BETTER BUSINESS.</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-[#C8BBA8] max-w-xs leading-relaxed border-l border-[#BE8D3F]/40 pl-4">
          Direct engagement with Principal Abin Sebastian. All disclosures protected under mutual NDA prior to diagnostic scoping.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Direct Line & Scoping Commitments */}
        <div className="reveal-init reveal-fade-up delay-100 lg:col-span-5 flex flex-col gap-6">
          <div className="reveal-cascade p-8 bg-[#16100A] border border-[rgba(190,141,63,0.22)] shadow-[0_16px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <span className="reveal-item font-mono text-xs uppercase tracking-wider text-[#BE8D3F] font-bold block mb-6 border-b border-[rgba(190,141,63,0.15)] pb-3">
              // DIRECT ATELIER CONTACT
            </span>

            <div className="space-y-6">
              <div className="reveal-item flex items-start gap-4">
                <div className="w-10 h-10 bg-[#100B06] text-[#BE8D3F] border border-[#BE8D3F]/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(190,141,63,0.15)]">
                  <span className="material-symbols-outlined text-[20px]">
                    call
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C8BBA8] uppercase block font-bold">
                    DIRECT LINE / WHATSAPP
                  </span>
                  <a
                    className="font-display text-xl font-black text-[#F5E4C7] hover:text-[#BE8D3F] transition-colors"
                    href="tel:+917994458027"
                  >
                    +91-7994458027 ↗
                  </a>
                </div>
              </div>

              <div className="reveal-item flex items-start gap-4">
                <div className="w-10 h-10 bg-[#100B06] text-[#BE8D3F] border border-[#BE8D3F]/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(190,141,63,0.15)]">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C8BBA8] uppercase block font-bold">
                    CONFIDENTIAL INQUIRIES
                  </span>
                  <a
                    className="font-display text-sm sm:text-base font-bold text-[#F5E4C7] hover:text-[#BE8D3F] transition-colors break-all"
                    href="mailto:foodiversehospitality@gmail.com"
                  >
                    foodiversehospitality@gmail.com ↗
                  </a>
                </div>
              </div>

              <div className="reveal-item flex items-start gap-4">
                <div className="w-10 h-10 bg-[#100B06] text-[#BE8D3F] border border-[#BE8D3F]/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(190,141,63,0.15)]">
                  <span className="material-symbols-outlined text-[20px]">
                    schedule
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C8BBA8] uppercase block font-bold">
                    SCOPING COMMITMENT
                  </span>
                  <span className="font-display text-lg font-black text-[#F5E4C7]">
                    &lt; 24-HOUR RESPONSE GUARANTEE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Bureau Footprint */}
          <div className="reveal-cascade p-6 bg-[#16100A] border border-[rgba(190,141,63,0.2)] font-mono text-xs">
            <span className="reveal-item text-[#BE8D3F] uppercase font-bold block mb-3">
              ACTIVE REGIONAL BUREAUS:
            </span>
            <div className="flex flex-wrap gap-2 text-[#F5E4C7] font-semibold text-[11px]">
              <span className="reveal-item bg-[#100B06] px-2.5 py-1 border border-[rgba(190,141,63,0.25)]">🇨🇦 TORONTO</span>
              <span className="reveal-item bg-[#100B06] px-2.5 py-1 border border-[rgba(190,141,63,0.25)]">🇦🇪 DUBAI</span>
              <span className="reveal-item bg-[#100B06] px-2.5 py-1 border border-[rgba(190,141,63,0.25)]">🇮🇳 MUMBAI</span>
              <span className="reveal-item bg-[#100B06] px-2.5 py-1 border border-[rgba(190,141,63,0.25)]">🇦🇺 MELBOURNE</span>
              <span className="reveal-item bg-[#100B06] px-2.5 py-1 border border-[rgba(190,141,63,0.25)]">🇱🇰 COLOMBO</span>
            </div>
          </div>
        </div>

        {/* Right: Dark Luxury Intake Form */}
        <div className="reveal-init reveal-fade-up delay-200 reveal-cascade lg:col-span-7 bg-[#16100A] p-8 sm:p-10 border border-[rgba(190,141,63,0.25)] shadow-[0_24px_50px_rgba(0,0,0,0.6)]">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="reveal-item flex items-center justify-between pb-4 border-b border-[rgba(190,141,63,0.15)] font-mono text-xs">
                <span className="font-bold uppercase tracking-wider text-[#BE8D3F]">
                  FUNCTIONAL AUDIT INTAKE FORM
                </span>
                <span className="text-[#C8BBA8]">SECURE &amp; CONFIDENTIAL</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="reveal-item">
                  <label className="block font-mono text-xs uppercase text-[#C8BBA8] font-bold mb-2">
                    01 // Restaurateur / Principal Name *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#100B06] text-[#F5E4C7] border border-[rgba(190,141,63,0.25)] focus:outline-none focus:border-[#BE8D3F] font-sans text-sm placeholder:text-[#C8BBA8]/40 transition-colors"
                    placeholder="e.g. Marcella Hazan"
                    required
                    type="text"
                  />
                </div>

                <div className="reveal-item">
                  <label className="block font-mono text-xs uppercase text-[#C8BBA8] font-bold mb-2">
                    02 // Concept / Restaurant Name *
                  </label>
                  <input
                    name="conceptName"
                    value={formData.conceptName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#100B06] text-[#F5E4C7] border border-[rgba(190,141,63,0.25)] focus:outline-none focus:border-[#BE8D3F] font-sans text-sm placeholder:text-[#C8BBA8]/40 transition-colors"
                    placeholder="e.g. Atelier Bistro &amp; Raw Bar"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="reveal-item grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs uppercase text-[#C8BBA8] font-bold mb-2">
                    03 // Corporate / Direct Email *
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#100B06] text-[#F5E4C7] border border-[rgba(190,141,63,0.25)] focus:outline-none focus:border-[#BE8D3F] font-sans text-sm placeholder:text-[#C8BBA8]/40 transition-colors"
                    placeholder="chef@restaurant.com"
                    required
                    type="email"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase text-[#C8BBA8] font-bold mb-2">
                    04 // Target Location / City *
                  </label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#100B06] text-[#F5E4C7] border border-[rgba(190,141,63,0.25)] focus:outline-none focus:border-[#BE8D3F] font-sans text-sm placeholder:text-[#C8BBA8]/40 transition-colors"
                    placeholder="e.g. Toronto, ON or Dubai"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="reveal-item">
                <label className="block font-mono text-xs uppercase text-[#C8BBA8] font-bold mb-2">
                  05 // Current Venture Stage *
                </label>
                <select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#100B06] text-[#F5E4C7] border border-[rgba(190,141,63,0.25)] focus:outline-none focus:border-[#BE8D3F] font-sans text-sm transition-colors cursor-pointer"
                >
                  <option value="launch" className="bg-[#100B06] text-[#F5E4C7]">
                    New Launch (Pre-opening / Construction / Feasibility)
                  </option>
                  <option value="reconcept" className="bg-[#100B06] text-[#F5E4C7]">
                    Brand Re-concept &amp; Menu Restructuring
                  </option>
                  <option value="scaling" className="bg-[#100B06] text-[#F5E4C7]">
                    Franchise &amp; Multi-Unit Scaling
                  </option>
                  <option value="audit" className="bg-[#100B06] text-[#F5E4C7]">
                    Existing Kitchen Operations &amp; P&amp;L Margin Audit
                  </option>
                </select>
              </div>

              <div className="reveal-item">
                <label className="block font-mono text-xs uppercase text-[#C8BBA8] font-bold mb-2">
                  06 // Operational Vision or Pain Points
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#100B06] text-[#F5E4C7] border border-[rgba(190,141,63,0.25)] focus:outline-none focus:border-[#BE8D3F] font-sans text-sm placeholder:text-[#C8BBA8]/40 transition-colors"
                  placeholder="Describe your culinary vision, desired seat count, or specific bottlenecks in kitchen throughput, labor rostering, or prime cost control..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="reveal-item w-full py-4 bg-[#BE8D3F] text-[#100B06] font-mono text-sm sm:text-base font-bold uppercase tracking-wider editorial-btn-gold flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75 shadow-[0_0_24px_rgba(190,141,63,0.25)]"
              >
                <span className="material-symbols-outlined text-[20px]">
                  send
                </span>
                <span>
                  {submitting
                    ? "DISPATCHING BRIEF..."
                    : "SUBMIT AUDIT REQUEST & SCOPING CALL ↗"}
                </span>
              </button>
            </form>
          ) : (
            <div className="p-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#BE8D3F] border border-[#D8A552] shadow-[0_0_24px_rgba(190,141,63,0.35)] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[36px] text-[#100B06]">
                  check
                </span>
              </div>

              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#BE8D3F] mb-3">
                [RECEIPT CONFIRMED // LOGGED]
              </div>

              <h3 className="font-display text-3xl font-black uppercase text-[#F5E4C7] mb-3">
                Audit Brief Received
              </h3>

              <p className="text-base text-[#C8BBA8] max-w-md mb-8 leading-relaxed font-normal">
                Thank you. Principal Consultant Abin Sebastian and our kitchen
                advisory team will review your parameters and follow up within
                24 hours to schedule the diagnostic review.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 bg-[#100B06] text-[#BE8D3F] border border-[#BE8D3F]/40 font-mono text-xs font-bold uppercase tracking-wider editorial-btn-outline"
              >
                SUBMIT ANOTHER BRIEF ↗
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
