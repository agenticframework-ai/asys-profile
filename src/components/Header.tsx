'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Company Profile', href: '/about#about' },
      { label: 'Leadership', href: '/leadership' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Solar Energy', href: '/services#services' },
      { label: 'BESS', href: '/services#services' },
      { label: 'BMS', href: '/services#services' },
      { label: 'UPS', href: '/services#services' },
    ],
  },
  { label: 'Project Portfolio', href: '/projects' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const solidHeader = scrolled || pathname !== '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex min-h-7 items-center justify-between gap-4 bg-[#0b1434] px-4 py-1 text-[10px] font-medium tracking-wide text-white/75 md:px-8">
        <span className="hidden sm:inline">ASYS INSTA POWER PVT LTD</span>
        <span className="sm:hidden">ASYS INSTA POWER</span>
        <div className="flex items-center gap-3 md:gap-5">
          <a className="transition-colors hover:text-white" href="mailto:asysippl@gmail.com">
            asysippl@gmail.com
          </a>
          <a
            className="hidden transition-colors hover:text-white md:inline"
            href="mailto:prashant@asys.co.in"
          >
            prashant@asys.co.in
          </a>
        </div>
      </div>
      <div
        className={`border-b border-white/10 transition-all duration-300 ${
          solidHeader ? 'bg-primary shadow-lg' : 'bg-primary/25 backdrop-blur-md'
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2.5 md:px-8"
          aria-label="Primary"
        >
          <Link href="/" className="flex items-center gap-3 py-1" aria-label="ASYS Insta Power home">
            <Image
              src="https://asys-solar-renewable-energy-solutions.ai.studio/logo.svg"
              alt="ASYS Insta Power logo"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0"
              unoptimized
            />
            <span className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-white">ASYS</span>
              <span className="mt-1 text-[11px] font-medium text-white/70">
                ASYS Insta Power Pvt Ltd
              </span>
            </span>
          </Link>

          <div className="hidden items-center lg:flex">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded-md px-3.5 py-2 text-[15px] font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  aria-haspopup={item.children ? 'true' : undefined}
                  aria-expanded={item.children ? dropdown === item.label : undefined}
                  onFocus={() => item.children && setDropdown(item.label)}
                >
                  {item.label}
                  {item.children && <Icon name="ChevronDownIcon" size={14} />}
                </Link>
                {item.children && dropdown === item.label && (
                  <div className="absolute left-0 top-full min-w-[260px] pt-2">
                    <ul className="rounded-lg border border-white/10 bg-primary p-2 shadow-xl">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3.5 py-2.5 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                            onClick={() => setDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              <Icon name="CalculatorIcon" size={16} className="text-accent" />
              Solar ROI Calc
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 bg-white/5 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 top-[92px] z-40 overflow-y-auto bg-primary lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-1 px-4 py-6">
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="ml-5 rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {child.label}
                  </Link>
                ))}
              </React.Fragment>
            ))}
            <a href="mailto:asysippl@gmail.com" className="px-3 py-3 text-sm font-medium text-white/75">
              asysippl@gmail.com
            </a>
            <a href="mailto:prashant@asys.co.in" className="px-3 py-3 text-sm font-medium text-white/75">
              prashant@asys.co.in
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-accent px-5 py-4 text-center text-base font-bold text-accent-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
