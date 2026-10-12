// import InvestmentDisclaimer from './shared/InvestmentDisclaimer';
'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { animationVariants } from '@/helper/motion.helper';

const opportunities = [
  {
    badge: 'Residential',
    name: 'Lekki Heights Residences',
    location: 'Lekki Phase 1, Lagos',
    yield: '18–22%',
    minInvestment: '₦85M',
    type: 'Luxury Apartments',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1531300365552-da5abe58a725?w=700&h=500&fit=crop&auto=format',
    tags: ['High-yield rental', 'Serviced', 'Gated community'],
  },
  {
    badge: 'Premium',
    name: 'Banana Island Terrace',
    location: 'Banana Island, Ikoyi, Lagos',
    yield: '12–15%',
    minInvestment: '₦220M',
    type: 'Luxury Terraced Home',
    status: 'Limited Units',
    image:
      'https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?w=700&h=500&fit=crop&auto=format',
    tags: ['Prestige location', 'Off-plan', 'Capital appreciation'],
  },
  {
    badge: 'Commercial',
    name: 'Abuja Central Plaza',
    location: 'Maitama District, Abuja FCT',
    yield: '14–18%',
    minInvestment: '₦450M',
    type: 'Mixed-Use Commercial',
    status: 'Under Offer',
    image:
      'https://images.unsplash.com/photo-1604348489791-f95132c5d8c0?w=700&h=500&fit=crop&auto=format',
    tags: ['Institutional grade', 'Long leases', 'Embassy district'],
  },
];

export default function FeaturedOpportunities() {
  const router = useRouter();

  const onNavigate = (path) => {
    router.push(`/${path}`);
  };
  return (
    <section className='bg-navy-800 py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={animationVariants}
          className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'
        >
          <motion.div variants={animationVariants.item}>
            <div className='flex items-center gap-3 mb-4'>
              <div className='h-px w-8 bg-gold-500' />
              <span className='text-gold-400/75 text-xs font-semibold tracking-[0.28em] uppercase font-body'>
                Featured Opportunities
              </span>
            </div>
            <h2 className='font-display text-4xl md:text-5xl text-white leading-tight'>
              Curated investments.
              <br />
              Verified returns.
            </h2>
          </motion.div>

          <motion.button
            onClick={() => onNavigate('invest')}
            variants={animationVariants.item}
            className='text-gold-400 hover:text-gold-300 text-sm font-semibold transition-colors flex items-center gap-2 font-body'
          >
            View all opportunities <span>→</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial='hidden'
          animate='visible'
          variants={animationVariants}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {opportunities.map((opp) => (
            <motion.div
              key={opp.name}
              variants={animationVariants.item}
              className='group bg-navy-900 hover:bg-navy-950 border border-white/5 hover:border-gold-500/25 transition-all duration-300 overflow-hidden cursor-pointer'
              onClick={() => onNavigate('invest')}
            >
              <div className='relative h-56 bg-navy-700 overflow-hidden'>
                <img
                  src={opp.image}
                  alt={opp.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-navy-950/85 to-transparent' />
                <div className='absolute top-4 left-4 flex items-center gap-2'>
                  <span className='bg-gold-500 text-navy-900 text-xs font-semibold px-2.5 py-1 uppercase tracking-wide font-body'>
                    {opp.badge}
                  </span>
                  {opp.status === 'Limited Units' && (
                    <span className='bg-red-500 text-white text-xs font-semibold px-2.5 py-1 uppercase tracking-wide font-body'>
                      Limited
                    </span>
                  )}
                </div>
                <div className='absolute bottom-4 left-4'>
                  <div className='text-gold-400 text-xs font-semibold tracking-widest uppercase font-body'>
                    {opp.type}
                  </div>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-white font-display text-xl mb-1'>
                  {opp.name}
                </h3>
                <p className='text-white/35 text-sm mb-5 font-body'>
                  {opp.location}
                </p>

                <div className='grid grid-cols-2 gap-4 mb-5'>
                  <div>
                    <div className='text-white/30 text-xs uppercase tracking-wide mb-1 font-body'>
                      Est. Yield
                    </div>
                    <div className='text-gold-400 font-semibold text-base font-body'>
                      {opp.yield} p.a.
                    </div>
                  </div>
                  <div>
                    <div className='text-white/30 text-xs uppercase tracking-wide mb-1 font-body'>
                      From
                    </div>
                    <div className='text-white font-semibold text-base font-body'>
                      {opp.minInvestment}
                    </div>
                  </div>
                </div>

                <div className='flex flex-wrap gap-1.5 mb-5'>
                  {opp.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs text-white/40 border border-white/10 px-2.5 py-1 font-body'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='pt-4 border-t border-white/10 flex items-center justify-between'>
                  <span className='text-gold-400 text-xs font-semibold tracking-wide font-body'>
                    View Opportunity
                  </span>
                  <span className='text-gold-400 group-hover:translate-x-1 transition-transform'>
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className='mt-8 max-w-2xl'>
          {/* <InvestmentDisclaimer compact className='text-white/25' /> */}
          <p className={`text-[11px] leading-relaxed text-white/25 font-body`}>
            * Projected yields are indicative and not guaranteed. Property
            investment carries risk, including partial or total loss of capital.
            Past performance is not a reliable indicator of future results.
          </p>
        </div>
      </div>
    </section>
  );
}
