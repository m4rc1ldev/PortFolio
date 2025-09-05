"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  className?: string;
};

export default function StarsBackground({ className }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  type StarPoint = THREE.Points & { material: THREE.ShaderMaterial };
  const three = useRef<{ scene: THREE.Scene | null; camera: THREE.PerspectiveCamera | null; renderer: THREE.WebGLRenderer | null; stars: StarPoint[]; id: number | null }>(
    { scene: null, camera: null, renderer: null, stars: [], id: null }
  );

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    const { current: refs } = three;
    const el = containerRef.current;

    refs.scene = new THREE.Scene();
    refs.camera = new THREE.PerspectiveCamera(75, el.clientWidth / el.clientHeight, 0.1, 2000);
    refs.camera.position.z = 120;
    refs.camera.position.y = 20;

    refs.renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    refs.renderer.setSize(el.clientWidth, el.clientHeight);

    const createStarField = () => {
      const starCount = 3500;
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let j = 0; j < starCount; j++) {
          const radius = 200 + Math.random() * 800;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);

          positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[j * 3 + 2] = radius * Math.cos(phi);

          const color = new THREE.Color();
          const choice = Math.random();
          if (choice < 0.7) color.setHSL(0, 0, 0.9 + Math.random() * 0.1);
          else if (choice < 0.9) color.setHSL(0.08, 0.5, 0.85);
          else color.setHSL(0.6, 0.5, 0.85);

          colors[j * 3] = color.r;
          colors[j * 3 + 1] = color.g;
          colors[j * 3 + 2] = color.b;
          sizes[j] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          uniforms: { time: { value: 0 }, depth: { value: i } },
          vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float depth;
            void main() {
              vColor = color;
              vec3 pos = position;
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              pos.xy = rot * pos.xy;
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;
              float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
              gl_FragColor = vec4(vColor, opacity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

  const stars = new THREE.Points(geometry, material) as StarPoint;
  refs.scene!.add(stars);
        refs.stars.push(stars);
      }
    };

    createStarField();

    const animate = () => {
      const time = Date.now() * 0.001;
      refs.stars.forEach((s) => {
        const mat = s.material as THREE.ShaderMaterial;
        if (mat.uniforms?.time) {
          mat.uniforms.time.value = time;
        }
      });
      refs.renderer!.render(refs.scene!, refs.camera!);
      refs.id = requestAnimationFrame(animate);
    };
    animate();

    const ro = new ResizeObserver(() => {
      if (!containerRef.current || !refs.camera || !refs.renderer) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      refs.camera.aspect = w / h;
      refs.camera.updateProjectionMatrix();
      refs.renderer.setSize(w, h);
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
      if (refs.id) cancelAnimationFrame(refs.id);
      refs.stars.forEach((s) => { s.geometry.dispose(); s.material.dispose(); });
      refs.renderer?.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
