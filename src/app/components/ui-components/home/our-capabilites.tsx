import Link from 'next/link';
import * as motion from 'motion/react-client';
import { animationVariants, animationXVariants } from '@/helper/motion.helper';

const services = [
  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        />
      </svg>
    ),
    title: 'Property Advisory',
    description:
      'Expert, independent guidance from initial brief through due diligence to keys in hand.',
    page: '/advisory',
  },
  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        />
      </svg>
    ),
    title: 'Investment Opportunities',
    description:
      'Curated portfolio of income-generating assets — residential, commercial, and off-plan.',
    page: '/invest',
  },
  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        />
      </svg>
    ),
    title: 'Sales Brokerage',
    description:
      'Strategic seller representation, pricing analysis, and qualified buyer access across Nigeria.',
    page: '/sales',
  },
  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
        />
      </svg>
    ),
    title: 'Leasing Services',
    description:
      'Find the right property to lease, or optimise your rental yield — we work both sides.',
    page: '/leasing',
  },
  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        />
      </svg>
    ),
    title: 'Property Services',
    description:
      'End-to-end management of your investment — tenancy, shortlets, maintenance, and yield reporting.',
    page: '/property-services',
  },
  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        />
      </svg>
    ),
    title: 'Developer Solutions',
    description:
      'Off-plan project marketing, investor relations, and structured unit sales for developers.',
    page: '/invest',
  },
];

export default function OurCapabilities() {
  return (
    <section className='bg-cream py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={animationVariants.wrapper}
          className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8'
        >
          <motion.div variants={animationVariants.item}>
            <div className='flex items-center gap-3 mb-4'>
              <div className='h-px w-8 bg-[#D4AF57]' />
              <span className='text-[#D4AF57] text-xs font-semibold tracking-[0.28em] uppercase font-body'>
                Our Capabilities
              </span>
            </div>
            <h2 className='font-display text-4xl md:text-5xl text-[#0B2D4A] leading-tight'>
              Full-spectrum property
              <br />
              expertise, under one roof.
            </h2>
          </motion.div>
          <motion.p
            variants={animationVariants.item}
            className='text-[#0B2D4A]/60 text-base max-w-xs leading-relaxed font-body'
          >
            We work with buyers, investors, sellers, and landlords across Lagos,
            Abuja, and beyond.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0B2D4A]/8'>
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.page}
              className='group bg-cream hover:bg-white p-8 text-left transition-all duration-200 flex flex-col gap-5'
            >
              <div className='text-[#D4AF57] group-hover:text-[#D4AF57] transition-colors'>
                {service.icon}
              </div>
              <div className='flex-1'>
                <h3 className='font-display text-xl text-[#0B2D4A] mb-2'>
                  {service.title}
                </h3>
                <p className='text-[#0B2D4A]/55 text-sm leading-relaxed font-body'>
                  {service.description}
                </p>
              </div>
              <div className='flex items-center gap-2 text-[#D4AF57] text-xs font-semibold tracking-wide font-body transition-all group-hover:gap-3'>
                <span>Learn more</span>
                <span className='transition-transform group-hover:translate-x-0.5'>
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
