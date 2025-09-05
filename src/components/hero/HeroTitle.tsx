"use client";
import React from 'react';

export function HeroTitle({ titleRef }: { titleRef?: React.RefObject<HTMLHeadingElement | null> }) {
  return (
    <h1 ref={titleRef} className="hero-title relative w-fit inline-block hover-glow">
      MAYANK
  <span className='last-name absolute left-[78%] top-[95%] text-5xl text-[#ff4444] tracking-wide bottom-0'>SHUKLA</span>
    </h1>
  );
}
