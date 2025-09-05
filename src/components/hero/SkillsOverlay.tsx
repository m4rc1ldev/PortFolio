"use client";
import React from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@iconify/react';

export type SkillsOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function SkillsOverlay({ open, onClose }: SkillsOverlayProps) {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <div className={`skills-overlay ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Skills">
      <div className="skills-overlay-inner">
        <div className="skills-overlay-header">
          <h3>Skills</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="skills-columns">
          <div className="skills-col">
            <div className="skills-heading-lg">Frontend</div>
            <ul className="skills-list">
              <li className="skills-item">React.js
                <span className="skill-ic" aria-hidden>
                  <Icon icon="devicon:reactnative" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">Next.js
                <span className="skill-ic" aria-hidden>
                  <Icon icon="logos:nextjs-icon" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">Redux
                <span className="skill-ic" aria-hidden>
                  <Icon icon="logos:redux" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">JavaScript
                <span className="skill-ic" aria-hidden>
                  <Icon icon="material-icon-theme:javascript" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">GSAP (animations)
                <span className="skill-ic" aria-hidden>
                  <Icon icon="logos:greensock-icon" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">Three.js
                <span className="skill-ic" aria-hidden>
                  <Icon icon="skill-icons:threejs-light" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">WebGL
                <span className="skill-ic" aria-hidden>
                  <Icon icon="simple-icons:webgl" width={18} height={18} />
                </span>
              </li>
            </ul>
          </div>
          <div className="skills-col">
            <div className="skills-heading-lg">Backend</div>
            <ul className="skills-list">
              <li className="skills-item">Node.js
                <span className="skill-ic" aria-hidden>
                  <Icon icon="devicon:nodejs" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">Express.js
                <span className="skill-ic" aria-hidden>
                  <Icon icon="skill-icons:expressjs-light" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">TypeScript
                <span className="skill-ic" aria-hidden>
                  <Icon icon="material-icon-theme:typescript" width={18} height={18} />
                </span>
              </li>
            </ul>
          </div>
          <div className="skills-col">
            <div className="skills-heading-lg">Database</div>
            <ul className="skills-list">
              <li className="skills-item">MongoDB
                <span className="skill-ic" aria-hidden>
                  <Icon icon="logos:mongodb-icon" width={18} height={18} />
                </span>
              </li>
              <li className="skills-item">Firebase
                <span className="skill-ic" aria-hidden>
                  <Icon icon="vscode-icons:file-type-firebase" width={18} height={18} />
                </span>
              </li>
            </ul>
          </div>
          <div className="skills-col">
            <div className="skills-heading-lg">AI</div>
            <ul className="skills-list">
              <li className="skills-item">Generative AI
                <span className="skill-ic" aria-hidden>
                  <Icon icon="hugeicons:artificial-intelligence-06" width={18} height={18} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
