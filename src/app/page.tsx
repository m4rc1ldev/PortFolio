"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const HorizonHero = dynamic(() => import("@/components/horizon-hero-section"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer-section").then(m => m.Footer), { ssr: false });

export default function Home() {
  const [footerVisible, setFooterVisible] = useState(false);
  const heroEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let raf = 0;
    const attach = () => {
      const el = heroEndRef.current;
      if (!el) {
        raf = window.requestAnimationFrame(attach);
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          const hit = entries.some((e) => e.isIntersecting);
          if (hit) {
            setFooterVisible(true);
            observer?.disconnect();
          }
        },
        { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0 }
      );
      observer.observe(el);
    };
    attach();

    // Fallback for very short pages (no scroll)
    if (document.documentElement.scrollHeight <= window.innerHeight + 8) {
      setFooterVisible(true);
    }

    return () => {
      if (observer) observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
  <HorizonHero endRef={heroEndRef} />
      <div style={{ opacity: footerVisible ? 1 : 0, transition: "opacity 600ms ease" }}>
        {footerVisible ? <Footer /> : null}
      </div>
    </>
  );
}
