// import { Page } from '../App';

// interface FooterProps {
//   onNavigate: (page: Page) => void;
//   onConsult: () => void;
//   onAdminAccess?: () => void;
// }

import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa6';
import Image from 'next/image';
import logoTrabsparent from '@/app/assets/images/dogari-property-logo-transparent.png';
import Link from 'next/link';

const dpgSocials = [
  { icon: FaXTwitter, title: 'Twitter', href: 'https://twitter.com/...' },
  { icon: FaLinkedinIn, title: 'LinkedIn', href: 'https://linkedin.com/...' },
  { icon: FaInstagram, title: 'Instagram', href: 'https://instagram.com/...' },
  { icon: FaFacebook, title: 'Facebook', href: 'https://facebook.com/...' },
];

export default function Footer() {
  return (
    <footer className='bg-[#0B2D4A] border-t border-white/5'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <div className='mb-5'>
              {/* <div className='text-white font-display text-2xl tracking-wider uppercase'>
                Dogari
              </div>
              <div className='text-gold-500 text-[9px] tracking-[0.3em] uppercase font-medium font-body'>
                Property Group
              </div> */}
              <Image
                src={logoTrabsparent}
                alt='Dogari Property Group'
                width={150}
                height={100}
              />
            </div>
            <p className='text-white/30 text-sm leading-relaxed mb-6 font-body max-w-xs'>
              Nigeria's premier property advisory — guiding discerning buyers,
              investors, and owners since 2018.
            </p>
            <div className='flex gap-2 mb-8'>
              {dpgSocials.map(({ icon: Icon, title, href }) => (
                <a
                  key={title}
                  href={href}
                  className='w-8 h-8 border border-white/10 text-white/35 hover:text-white hover:border-white/30 text-xs flex items-center justify-center transition-colors font-body'
                  aria-label={title}
                >
                  <Icon className='h-5 w-5' />
                </a>
              ))}
            </div>
            <div className='space-y-1.5 text-sm font-body'>
              <p className='text-white/25 text-[10px] uppercase tracking-widest'>
                Lagos
              </p>
              <p className='text-white/35'>
                15 Kofo Abayomi Street, Victoria Island
              </p>
              <p className='text-white/35'>+234 (0) 800 DOGARI</p>
              <p className='text-white/35 mt-3 text-[10px] uppercase tracking-widest'>
                Email
              </p>
              <p className='text-white/35'>hello@dogarigroup.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-white text-xs font-semibold tracking-[0.22em] uppercase mb-5 font-body'>
              Services
            </h4>
            <ul className='space-y-3'>
              <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
                <Link href={`/advisory`}>Property Advisory</Link>
              </li>
              <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
                <Link href={`/invest`}>Investment</Link>
              </li>
              <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
                <Link href={`/sales`}>Sales Brokerage</Link>
              </li>
              <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
                <Link href={`/leasing`}>Leasing Services</Link>
              </li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className='text-white text-xs font-semibold tracking-[0.22em] uppercase mb-5 font-body'>
              Properties
            </h4>
            <ul className='space-y-3'>
              <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
                <Link href={`/properties`}>Buy a Property</Link>
              </li>
              <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
                <Link href={`/properties`}>Rent a Property</Link>
              </li>
              <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
                <Link href={`/properties`}>Commercial</Link>
              </li>
              <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
                <Link href={`/list-property`}>List Your Property</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='text-white text-xs font-semibold tracking-[0.22em] uppercase mb-5 font-body'>
              Company
            </h4>
            <ul className='space-y-3'>
              {/* {[
                { label: 'About DPG', page: 'about' as Page },
                { label: 'Advisory', page: 'advisory' as Page },
                { label: 'Invest', page: 'invest' as Page },
                { label: 'DPG Projects', page: 'projects' as Page },
                {
                  label: 'Talk to an Advisor',
                  page: 'talk-to-advisor' as Page,
                },
                { label: 'DPG Insights', page: 'insights' as Page },
                { label: 'Contact Us', page: 'contact' as Page },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'
                  >
                    {item.label}
                  </button>
                </li>
              ))} */}
            </ul>
            <div className='mt-8'>
              <button
                // onClick={onConsult}
                className='bg-gold-500 hover:bg-gold-400 text-[#0B2D4A] font-semibold px-5 py-2.5 text-xs tracking-wide transition-colors rounded-sm font-body'
              >
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-white/18 text-xs font-body'>
            © 2026 Dogari Property Group Ltd. All rights reserved.
          </p>
          <div className='flex gap-6 items-center flex-wrap justify-center md:justify-end'>
            <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
              <Link href={`/privacy`}>Privacy Policy</Link>
            </li>
            <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
              <Link href={`/terms`}>Terms & Conditions</Link>
            </li>
            <li className='text-white/35 text-sm hover:text-white/65 transition-colors text-left font-body'>
              <Link href={`/cookies`}>Cookie Policy</Link>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
}
