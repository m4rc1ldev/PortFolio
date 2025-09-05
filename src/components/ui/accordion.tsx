"use client";
import React, { createContext, useContext, useMemo, useRef, useState } from "react";

type AccordionType = "single" | "multiple";

type AccordionCtx = {
  type: AccordionType;
  open: string[];
  toggle: (value: string) => void;
};

const Ctx = createContext<AccordionCtx | null>(null);

export function Accordion({
  type = "single",
  defaultValue,
  className,
  children,
  collapsible = true,
}: {
  type?: AccordionType;
  defaultValue?: string | string[];
  className?: string;
  collapsible?: boolean;
  children: React.ReactNode;
}) {
  const initial = useMemo<string[]>(() => {
    if (type === "multiple") return Array.isArray(defaultValue) ? defaultValue : [];
    return typeof defaultValue === "string" ? [defaultValue] : [];
  }, [defaultValue, type]);

  const [open, setOpen] = useState<string[]>(initial);
  const toggle = (value: string) => {
    setOpen((prev) => {
      const has = prev.includes(value);
      if (type === "multiple") {
        return has ? prev.filter((v) => v !== value) : [...prev, value];
      }
      if (!collapsible && has) return prev;
      return has ? [] : [value];
    });
  };

  return (
    <Ctx.Provider value={{ type, open, toggle }}>
      <div className={className}>{children}</div>
    </Ctx.Provider>
  );
}

export function AccordionItem({ value, className, children }: { value: string; className?: string; children: React.ReactNode; }) {
  return (
    <div data-accordion-item="" data-value={value} className={className}>
      {children}
    </div>
  );
}

export function AccordionTrigger({ value, className, children }: { value: string; className?: string; children: React.ReactNode; }) {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("AccordionTrigger must be used within Accordion");
  const isOpen = ctx.open.includes(value);
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      onClick={() => ctx.toggle(value)}
      className={className}
    >
      {children}
    </button>
  );
}

export function AccordionContent({ value, className, children }: { value: string; className?: string; children: React.ReactNode; }) {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("AccordionContent must be used within Accordion");
  const isOpen = ctx.open.includes(value);
  const ref = useRef<HTMLDivElement | null>(null);
  const maxH = isOpen ? (ref.current?.scrollHeight ?? 0) : 0;
  return (
    <div
      className={className}
      style={{
        maxHeight: maxH,
        overflow: "hidden",
        transition: "max-height 300ms ease, opacity 300ms ease",
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}
