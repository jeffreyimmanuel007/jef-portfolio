'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const tabs = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Projects', href: '/projects', icon: 'terminal' },
    { label: 'Certs', href: '/certifications', icon: 'verified' },
    { label: 'Contact', href: '/contact', icon: 'mail' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-surface border-t border-outline-variant flex justify-around items-center pb-safe z-50">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;

        if (isActive) {
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-95 transition-transform shadow-sm"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {tab.icon}
              </span>
              <span className="font-label-sm text-[11px] font-semibold">{tab.label}</span>
            </Link>
          );
        }

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary transition-colors active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            <span className="font-label-sm text-[11px]">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
