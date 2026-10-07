/**
 * Main navigation component.
 *
 * Desktop (≥1024px): horizontal flat nav; Invest & Properties reveal hover/focus
 *   dropdown panels. Keyboard: Tab between top-level items, Enter/Space or
 *   ArrowDown opens a submenu, ArrowUp/ArrowDown moves within it, Escape closes
 *   and returns focus to the trigger.
 *
 * Mobile (<1024px): hamburger trigger opens a full-width vertical panel.
 *   Invest & Properties expand inline via accordion. Closes on link tap,
 *   outside tap, or Escape.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logoNavy from '@/app/assets/images/dogari-property-logo-navy-0B2D4A.png';
import logoTransparent from '@/app/assets/images/dogari-property-logo-transparent.png';

export type Page =
  | 'home'
  | 'advisory'
  | 'invest'
  | 'properties'
  | 'sales'
  | 'leasing'
  | 'property-services'
  | 'list-property'
  | 'insights'
  | 'talk-to-advisor'
  | 'projects'
  | 'contact'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'cookies';

interface NavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onConsult?: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

/* ─── nav data ─────────────────────────────────────────────────────────── */

interface NavItem {
  label: string;
  page: Page;
  activeFor?: Page[];
  children?: {
    label: string;
    description: string;
    page: Page;
    dividerBefore?: boolean;
  }[];
  footerCta?: { label: string; action: 'consult' | 'contact' };
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Advisory', page: 'advisory' },
  {
    label: 'Invest',
    page: 'invest',
    activeFor: ['invest', 'projects'],
    children: [
      {
        label: 'Investment Opportunities',
        description: 'Curated income-generating assets',
        page: 'invest',
      },
      {
        label: 'Off-Plan Projects',
        description: 'Pre-launch pricing, early access',
        page: 'invest',
      },
      {
        label: 'DPG Projects',
        description: 'Tracked developments with unit inventory',
        page: 'projects',
      },
      {
        label: 'Developer Solutions',
        description: 'Project marketing & investor relations',
        page: 'invest',
      },
      {
        label: 'Investment Advisory',
        description: 'Portfolio strategy & ROI modelling',
        page: 'advisory',
      },
    ],
    footerCta: { label: 'Speak to an Investment Advisor', action: 'consult' },
  },
  {
    label: 'Properties',
    page: 'properties',
    activeFor: ['properties'],
    children: [
      {
        label: 'Buy a Property',
        description: 'Residential & luxury homes for sale',
        page: 'properties',
      },
      {
        label: 'Rent a Property',
        description: 'Serviced apartments & long-let homes',
        page: 'properties',
      },
      {
        label: 'Commercial',
        description: 'Office, retail & mixed-use spaces',
        page: 'properties',
      },
    ],
    footerCta: { label: 'Talk to a Property Advisor', action: 'consult' },
  },
  {
    label: 'Services',
    page: 'sales',
    activeFor: [
      'sales',
      'leasing',
      'property-services',
      'list-property',
      'talk-to-advisor',
    ],
    children: [
      {
        label: 'Sales Brokerage',
        description: 'Sell with expert representation',
        page: 'sales',
      },
      {
        label: 'Leasing Services',
        description: 'Let or lease with DPG',
        page: 'leasing',
      },
      {
        label: 'Property Services',
        description: 'Management, shortlets & more',
        page: 'property-services',
      },
      {
        label: 'List Your Property',
        description: 'Sell, let or shortlet — start here',
        page: 'list-property',
        dividerBefore: true,
      },
      {
        label: 'Talk to an Advisor',
        description: 'Book a consultation with our team',
        page: 'talk-to-advisor',
      },
    ],
    footerCta: { label: 'List Your Property', action: 'contact' },
  },
  { label: 'Insights', page: 'insights' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

/* ─── component ─────────────────────────────────────────────────────────── */

export default function Nav({
  currentPage,
  onNavigate,
  //   onConsult,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const dropdownItemRefs = useRef<Record<string, (HTMLButtonElement | null)[]>>(
    {},
  );

  /* ── scroll detection ── */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  /* ── close dropdown on outside click ── */
  useEffect(() => {
    if (!openDropdown) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openDropdown]);

  /* ── close mobile menu on outside click ── */
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  /* ── global Escape ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (openDropdown) {
        triggerRefs.current[openDropdown]?.focus();
        setOpenDropdown(null);
      }
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [openDropdown, mobileMenuOpen, setMobileMenuOpen]);

  const navigate = useCallback(
    (page: Page) => {
      setOpenDropdown(null);
      setMobileMenuOpen(false);
      onNavigate(page);
    },
    [onNavigate, setMobileMenuOpen],
  );

  //   const handleFooterCta = useCallback(
  //     (action: 'consult' | 'contact') => {
  //       setOpenDropdown(null);
  //       if (action === 'consult') onConsult();
  //       else navigate('contact');
  //     },
  //     [onConsult, navigate],
  //   );

  const handleTriggerKeyDown = (e: React.KeyboardEvent, item: NavItem) => {
    if (!item.children) return;
    const key = item.label;
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      setOpenDropdown(key);
      requestAnimationFrame(() => {
        dropdownItemRefs.current[key]?.[0]?.focus();
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setOpenDropdown(key);
      requestAnimationFrame(() => {
        const refs = dropdownItemRefs.current[key] ?? [];
        refs[refs.length - 1]?.focus();
      });
    }
  };

  const handleDropdownItemKeyDown = (
    e: React.KeyboardEvent,
    itemLabel: string,
    childIndex: number,
    childCount: number,
  ) => {
    const refs = dropdownItemRefs.current[itemLabel] ?? [];
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      refs[Math.min(childIndex + 1, childCount - 1)]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (childIndex === 0) {
        setOpenDropdown(null);
        triggerRefs.current[itemLabel]?.focus();
      } else {
        refs[childIndex - 1]?.focus();
      }
    } else if (e.key === 'Escape') {
      setOpenDropdown(null);
      triggerRefs.current[itemLabel]?.focus();
    } else if (e.key === 'Tab') {
      setOpenDropdown(null);
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.activeFor) return item.activeFor.includes(currentPage);
    return currentPage === item.page;
  };

  const solid = scrolled || currentPage !== 'home' || mobileMenuOpen;

  /* ─── render ─────────────────────────────────────────────────────────── */
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? 'bg-[#0B2D4A] shadow-lg shadow-[#0B2D4A]/30' : 'bg-transparent'
      }`}
    >
      <nav
        ref={navRef}
        aria-label='Main navigation'
        className='max-w-7xl mx-auto px-6 lg:px-10'
      >
        <div className='flex items-center justify-between h-20'>
          {/* ── Logo ── */}
          <button
            onClick={() => navigate('home')}
            aria-label='Dogari Property Group — go to homepage'
            className='flex flex-col items-start shrink-0'
          >
            <Image
              src={solid ? logoNavy : logoTransparent}
              alt='Dogari Property Group'
              width={150}
              height={100}
            />
          </button>

          {/* ══ DESKTOP horizontal nav ══════════════════════════════════════ */}
          <ul
            role='list'
            className='hidden lg:flex items-center gap-0.5'
            aria-label='Site sections'
          >
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              const hasChildren = !!item.children;
              const isOpen = openDropdown === item.label;

              return (
                <li key={item.label} className='relative'>
                  <button
                    ref={(el) => {
                      triggerRefs.current[item.label] = el;
                    }}
                    onClick={() => {
                      if (hasChildren) {
                        setOpenDropdown(isOpen ? null : item.label);
                      } else {
                        navigate(item.page);
                      }
                    }}
                    onMouseEnter={() =>
                      hasChildren && setOpenDropdown(item.label)
                    }
                    onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                    onKeyDown={(e) => handleTriggerKeyDown(e, item)}
                    aria-current={isActive && !hasChildren ? 'page' : undefined}
                    aria-haspopup={hasChildren ? 'true' : undefined}
                    aria-expanded={hasChildren ? isOpen : undefined}
                    aria-controls={
                      hasChildren
                        ? `menu-${item.label.toLowerCase()}`
                        : undefined
                    }
                    className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium tracking-wide rounded-sm transition-colors font-body
                      ${
                        isActive
                          ? 'text-gold-400'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {item.label}
                    {hasChildren && (
                      <svg
                        aria-hidden='true'
                        className={`w-3 h-3 opacity-50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        viewBox='0 0 12 12'
                        fill='currentColor'
                      >
                        <path d='M6 8L1 3h10L6 8z' />
                      </svg>
                    )}
                    {isActive && (
                      <span
                        aria-hidden='true'
                        className='absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gold-400 rounded-full'
                      />
                    )}
                  </button>

                  {/* ── Dropdown panel ── */}
                  {hasChildren && item.children && (
                    <div
                      id={`menu-${item.label.toLowerCase()}`}
                      role='region'
                      aria-label={`${item.label} submenu`}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 transition-all duration-200 ${
                        isOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1.5 pointer-events-none'
                      }`}
                    >
                      <div className='bg-[#0B2D4A] border border-white/8 shadow-2xl shadow-[#0B2D4A]/70 overflow-hidden'>
                        <div className='px-4 py-2.5 border-b border-white/6'>
                          <span className='text-gold-400/60 text-[10px] font-semibold tracking-[0.25em] uppercase font-body'>
                            {item.label}
                          </span>
                        </div>

                        <ul role='list' aria-label={`${item.label} options`}>
                          {item.children.map((child, ci) => (
                            <li key={child.label}>
                              {child.dividerBefore && (
                                <div className='mx-4 border-t border-white/6 my-1' />
                              )}
                              <button
                                ref={(el) => {
                                  if (!dropdownItemRefs.current[item.label]) {
                                    dropdownItemRefs.current[item.label] = [];
                                  }
                                  dropdownItemRefs.current[item.label][ci] = el;
                                }}
                                onClick={() => navigate(child.page)}
                                onKeyDown={(e) =>
                                  handleDropdownItemKeyDown(
                                    e,
                                    item.label,
                                    ci,
                                    item.children!.length,
                                  )
                                }
                                className={`w-full text-left px-4 py-2.5 hover:bg-white/5 focus:bg-white/5 transition-colors group ${
                                  currentPage === child.page ? 'bg-white/4' : ''
                                }`}
                              >
                                <span
                                  className={`block text-sm font-medium font-body group-hover:text-white transition-colors leading-tight ${
                                    currentPage === child.page
                                      ? 'text-gold-400'
                                      : 'text-white/85'
                                  }`}
                                >
                                  {child.label}
                                </span>
                                <span className='block text-white/30 text-xs font-body mt-0.5'>
                                  {child.description}
                                </span>
                              </button>
                            </li>
                          ))}
                        </ul>

                        {item.footerCta && (
                          <div className='px-4 py-2.5 border-t border-white/6'>
                            <button
                              //   onClick={() =>
                              //     handleFooterCta(item.footerCta!.action)
                              //   }
                              className='text-xs font-semibold text-gold-500 hover:text-gold-400 transition-colors font-body'
                            >
                              {item.footerCta.label} →
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTAs ── */}
          <div className='hidden lg:flex items-center gap-3 shrink-0'>
            <button
              onClick={() => navigate('list-property')}
              className='text-sm text-white/55 hover:text-white transition-colors px-4 py-2 border border-white/12 hover:border-white/30 rounded-sm font-body min-h-11'
            >
              List Your Property
            </button>
            <button
              onClick={() => navigate('talk-to-advisor')}
              className='text-sm font-semibold bg-[#D4AF57] hover:bg-[#D4AF57]/80 text-[#0B2D4A] px-5 py-2.5 rounded-sm transition-colors font-body min-h-11'
            >
              Talk to an Advisor
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls='mobile-menu'
            className={`lg:hidden p-3 min-w-11 min-h-11 flex items-center justify-center text-[#FFFFFF]`}
          >
            <span aria-hidden='true'>
              {mobileMenuOpen ? (
                <svg
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* ══ MOBILE vertical panel ════════════════════════════════════════ */}
        <div
          id='mobile-menu'
          hidden={!mobileMenuOpen}
          aria-label='Mobile navigation'
          className='lg:hidden bg-[#0B2D4A] border-t border-white/8 px-6 py-4 max-h-[80vh] overflow-y-auto'
        >
          <ul role='list' className='flex flex-col gap-1'>
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              const hasChildren = !!item.children;
              const isExpanded = mobileExpanded === item.label;

              return (
                <li key={item.label}>
                  {hasChildren ? (
                    <div className='border-b border-white/6'>
                      <button
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : item.label)
                        }
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-sub-${item.label.toLowerCase()}`}
                        className={`w-full flex items-center justify-between text-base font-medium py-3 font-body min-h-[44px] transition-colors ${
                          isActive ? 'text-gold-400' : 'text-white/75'
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          aria-hidden='true'
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          viewBox='0 0 12 12'
                          fill='currentColor'
                        >
                          <path d='M6 8L1 3h10L6 8z' />
                        </svg>
                      </button>

                      {isExpanded && (
                        <ul
                          id={`mobile-sub-${item.label.toLowerCase()}`}
                          role='list'
                          className='pb-3 pl-2 flex flex-col gap-0.5'
                        >
                          {item.children!.map((child) => (
                            <li key={child.label}>
                              {child.dividerBefore && (
                                <div className='border-t border-white/6 my-1 ml-3' />
                              )}
                              <button
                                onClick={() => navigate(child.page)}
                                className={`w-full text-left text-sm py-2.5 pl-3 border-l font-body min-h-[44px] transition-colors ${
                                  currentPage === child.page
                                    ? 'text-gold-400 border-gold-500'
                                    : 'text-white/50 hover:text-white border-gold-500/20'
                                }`}
                              >
                                {child.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate(item.page)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`w-full text-left text-base font-medium py-3 border-b border-white/6 font-body min-h-[44px] transition-colors ${
                        isActive
                          ? 'text-gold-400'
                          : 'text-white/75 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              );
            })}

            <li className='flex flex-col gap-3 pt-4 pb-2'>
              <button
                onClick={() => navigate('list-property')}
                className='text-sm text-center text-white/70 border border-white/15 rounded-sm py-3 font-body min-h-[44px]'
              >
                List Your Property
              </button>
              <button
                onClick={() => navigate('talk-to-advisor')}
                className='text-sm font-semibold text-center bg-gold-500 hover:bg-gold-400 text-[#0B2D4A] rounded-sm py-3 font-body min-h-[44px] transition-colors'
              >
                Talk to an Advisor
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
