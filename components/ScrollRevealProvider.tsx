"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealElements = () => {
      const targets = document.querySelectorAll(
        ".reveal-init:not(.is-revealed), .reveal-item:not(.is-revealed):not(.reveal-cascade *), .reveal-line:not(.is-revealed)"
      );
      if (!targets.length) return;

      if (prefersReducedMotion) {
        targets.forEach((el) => el.classList.add("is-revealed"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      targets.forEach((el) => {
        // Immediate reveal for elements already partially visible in viewport
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-revealed");
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial check
    revealElements();

    // Re-check after brief delay to catch any late rendered assets
    const timeout = setTimeout(revealElements, 250);

    // Watch for dynamic DOM additions (e.g., case studies tab filter switching)
    const mutationObserver = new MutationObserver(() => {
      revealElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeout);
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
