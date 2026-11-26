import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

const GROUPS = [
[
{ label: 'Home', href: '/' },
{ label: 'About Us', href: '/about' },
{ label: 'Leadership', href: '/leadership' }],

[
{ label: 'Turnkey Solar EPC', href: '/services' },
{ label: 'O and M Services', href: '/services' },
{ label: 'BESS Systems', href: '/services' }],

[
{ label: 'Project Portfolio', href: '/projects' },
{ label: 'Clients', href: '/clients' },
{ label: 'Contact Us', href: '/contact' }]];



export default function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-4 py-10 md:px-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3" aria-label="ASYS Insta Power home">
              <Image
                src="https://asys-solar-renewable-energy-solutions.ai.studio/logo.svg"
                alt="ASYS Insta Power logo"
                width={44}
                height={44}
                className="h-11 w-11"
                unoptimized
              />
              
              <span className="text-xl font-extrabold tracking-tight text-primary-foreground">ASYS</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              ASYS Insta Power Pvt Ltd. Established 10 January 2017. Turnkey solar EPC contractor and
              power conditioning engineering partner for commercial, industrial, institutional and
              government facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-7">
            {GROUPS?.map((group, idx) =>
            <ul key={idx} className="space-y-1">
                {group?.map((link) =>
              <li key={link?.label}>
                    <Link
                  href={link?.href}
                  className="inline-block py-2 text-sm font-semibold text-white/70 transition-colors hover:text-accent">
                  
                      {link?.label}
                    </Link>
                  </li>
              )}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ASYS Insta Power Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="mailto:asysippl@gmail.com"
              aria-label="Email asysippl at gmail"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-accent hover:text-accent">
              
              <Icon name="EnvelopeIcon" size={18} />
            </a>
            <a
              href="https://www.asys.co.in"
              aria-label="ASYS website"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:border-accent hover:text-accent">
              
              <Icon name="GlobeAltIcon" size={18} />
            </a>
          </div>
          <p className="font-mono-num text-xs">CIN: U31901UP2017PTC089003</p>
        </div>
      </div>
    </footer>);

}