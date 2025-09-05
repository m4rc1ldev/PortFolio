'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, Github } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigation',
		links: [
			{ title: 'Home', href: '#' },
			{ title: 'About Me', href: '#' },
			{ title: 'Services', href: '#' },
			{ title: 'Contact', href: 'https://www.linkedin.com/in/mayank-shukla-4a37b92ab/' },
		],
	},
	{
		label: 'My Work',
		links: [
			{ title: 'Web Design', href: '#' },
			{ title: 'UX/UI Design', href: '#' },
			{ title: 'Branding', href: '#' },
			{ title: '	Case Studies', href: '#' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '#' },
			{ title: 'Changelog', href: '#' },
			{ title: 'Help', href: '/help' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Instagram', href: 'https://www.instagram.com/m4rc1l.exe/', icon: InstagramIcon },
			{ title: 'Github', href: 'https://github.com/m4rc1ldev', icon: Github },
			{ title: 'LinkedIn', href: 'https://www.linkedin.com/in/mayank-shukla-4a37b92ab/', icon: LinkedinIcon },
		]
	},
];


export function Footer() {
	return (
	<footer className="relative w-full min-h-[100svh] overflow-hidden bg-[#0b0b12] text-white">

			{/* Content container */}
			<div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-6 py-12 lg:py-16">
				<div className="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

				<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
						<FrameIcon className="size-8" />
						<p className="mt-8 text-sm md:mt-0 opacity-80">
							© {new Date().getFullYear()} Mayank Shukla. All rights reserved.
						</p>
				</AnimatedContainer>

					<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
									<h3 className="text-xs tracking-wider uppercase opacity-80">{section.label}</h3>
									<ul className="mt-4 space-y-2 text-sm opacity-90">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
													href={link.href}
													className="inline-flex items-center transition-all duration-300 hover:opacity-100 opacity-90"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-12 w-full border-t border-white/10 pt-6 text-center text-xs opacity-70">
					Built with Next.js • Designed by Mayank
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};