"use client";
import React from 'react';

export function HeroTopMenus({
  isSidebarOpen,
  onToggleSidebar,
  isSkillsOpen,
  onToggleSkills,
  menuRef,
  hideTopControls = false,
}: {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  isSkillsOpen: boolean;
  onToggleSkills: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
  hideTopControls?: boolean;
}) {
  return (
    <>
      {/* Left projects menu */}
      <div ref={menuRef} className="side-menu" style={{ visibility: 'hidden', display: hideTopControls ? 'none' : undefined }}>
        <button aria-label="Toggle projects" className={`menu-icon ${isSidebarOpen ? 'is-open' : ''}`} onClick={onToggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="M12 1.25c-.605 0-1.162.15-1.771.402c-.589.244-1.273.603-2.124 1.05L6.037 3.787c-1.045.548-1.88.987-2.527 1.418c-.668.447-1.184.917-1.559 1.554c-.374.635-.542 1.323-.623 2.142c-.078.795-.078 1.772-.078 3.002v.194c0 1.23 0 2.207.078 3.002c.081.82.25 1.507.623 2.142c.375.637.89 1.107 1.56 1.554c.645.431 1.481.87 2.526 1.418l2.068 1.085c.851.447 1.535.806 2.124 1.05c.61.252 1.166.402 1.771.402s1.162-.15 1.771-.402c.589-.244 1.273-.603 2.124-1.05l2.068-1.084c1.045-.549 1.88-.988 2.526-1.419c.67-.447 1.185-.917 1.56-1.554c.374-.635.542-1.323.623-2.142c.078-.795.078-1.772.078-3.001v-.196c0-1.229 0-2.206-.078-3.001c-.081-.82-.25-1.507-.623-2.142c-.375-.637-.89-1.107-1.56-1.554c-.645-.431-1.481-.87-2.526-1.418l-2.068-1.085c-.851-.447-1.535-.806-2.124-1.05c-.61-.252-1.166-.402-1.771-.402M8.77 4.046c.89-.467 1.514-.793 2.032-1.007c.504-.209.859-.289 1.198-.289c.34 0 .694.08 1.198.289c.518.214 1.141.54 2.031 1.007l2 1.05c1.09.571 1.855.974 2.428 1.356c.282.189.503.364.683.54L12 11.162l-8.34-4.17c.18-.176.401-.351.684-.54c.572-.382 1.337-.785 2.427-1.356zM2.939 8.307c-.05.214-.089.457-.117.74c-.07.714-.071 1.617-.071 2.894v.117c0 1.278 0 2.181.071 2.894c.069.697.2 1.148.423 1.528c.222.377.543.696 1.1 1.068c.572.382 1.337.785 2.427 1.356l2 1.05c.89.467 1.513.793 2.031 1.007q.244.101.448.165v-8.663zm9.812 12.818q.204-.063.448-.164c.518-.214 1.141-.54 2.031-1.007l2-1.05c1.09-.572 1.855-.974 2.428-1.356c.556-.372.877-.691 1.1-1.068c.223-.38.353-.83.422-1.528c.07-.713.071-1.616.071-2.893v-.117c0-1.278 0-2.181-.071-2.894a6 6 0 0 0-.117-.74l-8.312 4.156z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="vertical-text tracking-widest font-semibold">PROJECTS</div>
      </div>

      {/* Top-right Skills mega dropdown trigger (separate fixed element) */}
  <div className="skills-top-menu" style={{ display: isSidebarOpen || hideTopControls ? 'none' as const : undefined }}>
        <button aria-label="Open skills" className={`skills-btn ${isSkillsOpen ? 'active' : ''}`} onClick={onToggleSkills}>
          <span className="skills-label">SKILLS</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M4.425 10q.35-.9.113-1.6T3.725 7Q2.9 6 2.637 5.112T2.55 3H4.5q-.2.95-.062 1.55t.712 1.3Q6.1 7 6.363 7.888T6.375 10zm4 0q.35-.9.125-1.6T7.75 7q-.825-1-1.1-1.888T6.55 3H8.5q-.2.95-.062 1.55t.712 1.3Q10.1 7 10.363 7.888T10.375 10zm4 0q.35-.9.125-1.6t-.8-1.4q-.825-1-1.1-1.888T10.55 3h1.95q-.2.95-.062 1.55t.712 1.3Q14.1 7 14.363 7.888T14.375 10zM5 20q-1.25 0-2.125-.875T2 17v-5h14.025q.125-.85.675-1.487t1.35-.913l4.625-1.55l.625 1.9l-4.625 1.55q-.3.1-.488.363T18 12.45V17q0 1.25-.875 2.125T15 20zm0-2h10q.425 0 .713-.288T16 17v-3H4v3q0 .425.288.713T5 18m5-2"/>
          </svg>
        </button>
      </div>
    </>
  );
}
