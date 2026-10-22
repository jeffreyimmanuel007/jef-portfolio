'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchModal } from './SearchModal';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 bg-surface border-b border-outline-variant h-16 flex items-center justify-between px-margin-mobile md:px-margin-desktop transition-all duration-300 ${
          isScrolled ? 'shadow-md bg-white/90 backdrop-blur-md h-14' : ''
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            cloud
          </span>
          <span className="font-headline-md text-headline-md-mobile font-bold text-primary tracking-tight">
            CloudOps.sys
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-stack-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md px-3 py-1.5 rounded transition-colors ${
                  isActive
                    ? 'text-primary font-bold bg-secondary-container/20 border border-secondary-container/40'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-variant'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant hover:text-primary transition-colors"
            title="Search portfolio"
            aria-label="Search"
          >
            <span className="material-symbols-outlined">search</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-surface-variant rounded-full text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Open mobile menu"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-surface/95 backdrop-blur-md border-b border-outline-variant md:hidden p-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3 rounded-lg font-label-md flex items-center justify-between text-base ${
                    isActive
                      ? 'bg-secondary-container text-on-secondary-container font-bold'
                      : 'text-on-surface-variant hover:bg-surface-variant hover:text-primary'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </Link>
              );
            })}
          </div>
          <div className="pt-4 border-t border-outline-variant text-xs text-on-surface-variant font-label-sm">
            Status: Fully Deployed • AWS &amp; Azure Specialist
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
