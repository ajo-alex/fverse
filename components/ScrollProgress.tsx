"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress");
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = window.scrollY || document.documentElement.scrollTop;
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

          if (progressBar) {
            progressBar.style.width = `${scrolled}%`;
          }

          setShowScrollTop(winScroll > 600);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Luxury Hairline Gold Progress Bar */}
      <div id="scroll-progress" role="progressbar" aria-label="Reading progress" />

      {/* Floating Return to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 bg-[#19120C]/90 hover:bg-[#BE8D3F] text-[#BE8D3F] hover:text-[#100B06] border border-[rgba(190,141,63,0.35)] shadow-[0_8px_24px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 group flex items-center justify-center font-mono text-xs uppercase"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-y-1 transition-transform">
            arrow_upward
          </span>
        </button>
      )}
    </>
  );
}
