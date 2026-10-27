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
    // Simulate brief network submission
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
      className="py-24 px-gutter bg-surface-container-high/60 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Context & Channels */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-label-sm uppercase tracking-widest text-primary font-bold">
              Executive Engagement
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-on-surface mt-2 font-normal">
              Book Your Functional Kitchen Audit
            </h2>
            <p className="text-body-md text-on-surface-variant mt-4 leading-relaxed">
              Take the first definitive step toward Michelin-grade efficiency
              and margin protection. Our advisory partners respond within 24
              business hours to schedule an initial diagnostic review.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-xl bg-surface shadow-sm flex items-center gap-4 border border-outline-variant/20">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    call
                  </span>
                </div>
                <div>
                  <span className="text-label-sm text-on-surface-variant uppercase block font-bold">
                    Direct Line
                  </span>
                  <a
                    className="text-title-sm text-on-surface font-semibold hover:text-primary transition-colors"
                    href="tel:+917994458027"
                  >
                    +91-7994458027
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface shadow-sm flex items-center gap-4 border border-outline-variant/20">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>
                <div>
                  <span className="text-label-sm text-on-surface-variant uppercase block font-bold">
                    Direct Inquiries
                  </span>
                  <a
                    className="text-title-sm text-on-surface font-semibold hover:text-primary transition-colors break-all"
                    href="mailto:foodiversehospitality@gmail.com"
                  >
                    foodiversehospitality@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface shadow-sm flex items-center gap-4 border border-outline-variant/20">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    schedule
                  </span>
                </div>
                <div>
                  <span className="text-label-sm text-on-surface-variant uppercase block font-bold">
                    Response Guarantee
                  </span>
                  <span className="text-title-sm text-on-surface font-semibold">
                    &lt; 24-Hour Functional Scoping
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-surface p-8 lg:p-10 rounded-2xl shadow-md border border-outline-variant/20">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-label-md text-on-surface uppercase mb-2 font-semibold">
                      Restaurateur / Contact Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                      placeholder="e.g. Marcella Hazan"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md text-on-surface uppercase mb-2 font-semibold">
                      Concept / Restaurant Name
                    </label>
                    <input
                      name="conceptName"
                      value={formData.conceptName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                      placeholder="e.g. Atelier Bistro"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-label-md text-on-surface uppercase mb-2 font-semibold">
                      Corporate Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                      placeholder="chef@restaurant.com"
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md text-on-surface uppercase mb-2 font-semibold">
                      Target Location / City
                    </label>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                      placeholder="e.g. Toronto, ON or Dubai"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-label-md text-on-surface uppercase mb-2 font-semibold">
                    Current Venture Stage
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                  >
                    <option value="launch">
                      New Launch (Pre-opening / Construction)
                    </option>
                    <option value="reconcept">
                      Brand Re-concept &amp; Menu Restructuring
                    </option>
                    <option value="scaling">
                      Franchise &amp; Multi-Unit Scaling
                    </option>
                    <option value="audit">
                      Existing Kitchen Operations &amp; Cost Audit
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-label-md text-on-surface uppercase mb-2 font-semibold">
                    Operational Vision or Pain Points
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                    placeholder="Briefly describe your culinary vision, desired seat count, or specific bottlenecks in kitchen throughput and margin control..."
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-lg bg-primary text-on-primary text-title-sm font-semibold transition-all duration-300 hover:bg-primary-container shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    send
                  </span>
                  {submitting
                    ? "Submitting Brief..."
                    : "Submit Audit Request & Scoping Call"}
                </button>
              </form>
            ) : (
              <div className="p-8 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-[32px]">
                    check
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-on-surface mb-2 font-medium">
                  Audit Brief Received
                </h3>
                <p className="text-body-md text-on-surface-variant max-w-sm mb-6 leading-relaxed">
                  Thank you. Principal Consultant Abin Sebastian and our kitchen
                  advisory team will review your parameters and follow up within
                  24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-surface-container text-on-surface text-body-sm font-semibold hover:bg-surface-container-high transition-colors"
                >
                  Submit Another Consultation Brief
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
