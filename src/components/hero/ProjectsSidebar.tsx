"use client";
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion';

export type ProjectsSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function ProjectsSidebar({ open, onClose }: ProjectsSidebarProps) {
  return (
    <>
      <div className={`sidebar-backdrop ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`projects-sidebar ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="projects-header">
          <h3>Projects</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close">×</button>
        </div>
        <nav className="projects-list">
          <Accordion type="single" collapsible defaultValue="console" className="space-y-2">
              <AccordionItem value="console">
              <AccordionTrigger value="console" className="w-full text-left py-2 px-2 rounded hover:bg-white/5 transition">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Survey Console</span>
                  <span className="project-dates">Jun  – Jul 2025</span>
                </div>
              </AccordionTrigger>
              <AccordionContent value="console" className="px-2 pb-2">
                <p className="opacity-90 text-sm">Real-time tracking console for completions, disqualifications, and quotas.</p>
                <a className="project-item mt-2" href="https://nads-console.vercel.app" target="_blank" rel="noreferrer">Open</a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="genai">
              <AccordionTrigger value="genai" className="w-full text-left py-2 px-2 rounded hover:bg-white/5 transition">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Gen AI</span>
                  <span className="project-dates">Aug – Sep 2025</span>
                </div>
              </AccordionTrigger>
              <AccordionContent value="genai" className="px-2 pb-2">
                <p className="opacity-90 text-sm">Deployed AI app with chatbot and image generator (Vercel AI SDK). Supports ratio/style controls and streamed responses.</p>
                <a className="project-item mt-2" href="https://m4-rc-1-l-gen-ai.vercel.app/" target="_blank" rel="noreferrer">Open</a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="responads">
              <AccordionTrigger value="responads" className="w-full text-left py-2 px-2 rounded hover:bg-white/5 transition">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Responads</span>
                  <span className="project-dates">April - May 2025</span>
                </div>
              </AccordionTrigger>
              <AccordionContent value="responads" className="px-2 pb-2">
                <p className="opacity-90 text-sm">Survey platform with admin tools, referral system, and gamified rewards.</p>
                <a className="project-item mt-2" href="https://www.responads.com" target="_blank" rel="noreferrer">Open</a>
              </AccordionContent>
            </AccordionItem>



            <AccordionItem value="nads">
              <AccordionTrigger value="nads" className="w-full text-left py-2 px-2 rounded hover:bg-white/5 transition">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Nads Research</span>
                  <span className="project-dates">Mar 2025</span>
                </div>
              </AccordionTrigger>
              <AccordionContent value="nads" className="px-2 pb-2">
                <p className="opacity-90 text-sm">Official site redesign, modern UI/UX, performance optimized.</p>
                <a className="project-item mt-2" href="https://www.nadsresearch.com" target="_blank" rel="noreferrer">Open</a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>
      </aside>
    </>
  );
}
