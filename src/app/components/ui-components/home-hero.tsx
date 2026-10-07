'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from '@/helper/motion.helper';

// import { Page } from '../App';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Luxury modern interior living room',
    kb: 'kb-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1778166143598-a71fda62b6fd?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Infinity pool overlooking coastal town at sunset',
    kb: 'kb-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1776761731098-86f6b57da863?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Coastal resort with pool and ocean view',
    kb: 'kb-3',
  },
  {
    url: 'https://images.unsplash.com/photo-1758612120966-b20c01160c7b?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Aerial view of grand historic manor with gardens',
    kb: 'kb-4',
  },
  {
    url: 'https://images.unsplash.com/photo-1635111057505-3b7dcc2b72fb?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Aerial view of luxury estate surrounded by forest',
    kb: 'kb-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1724445510342-f557fab8639d?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Grand estate next to lush green park',
    kb: 'kb-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Seashore at golden hour',
    kb: 'kb-3',
  },
  {
    url: 'https://images.unsplash.com/photo-1663412970778-eaca4d099871?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Lush green forest nature retreat',
    kb: 'kb-4',
  },
];

export default function HomePageHero() {
  const [current, setCurrent] = useState(0);
  const [animKeys, setAnimKeys] = useState<number[]>(slides.map((_, i) => i));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % slides.length;
        setAnimKeys((prev) => {
          const updated = [...prev];
          updated[next] = Date.now();
          return updated;
        });
        return next;
      });
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setAnimKeys((prev) => {
      const updated = [...prev];
      updated[index] = Date.now();
      return updated;
    });
    setCurrent(index);
  };

  const pad = (n: number) => String(n + 1).padStart(2, '0');
  return (
    <section className='relative h-screen min-h-[640px] flex items-center overflow-hidden bg-navy-950'>
      {/* Slideshow images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className='absolute inset-0 will-change-transform'
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1600ms cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            key={animKeys[i]}
            src={slide.url}
            alt={slide.alt}
            className={`w-full h-full object-cover ${slide.kb}`}
            style={{ transformOrigin: 'center center' }}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className='absolute inset-0 z-10 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-navy-950/20' />
        <div className='absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/25' />
      </div>

      {/* Content */}
      <div className='relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20'>
        <motion.div
          className='max-w-2xl lg:max-w-3xl'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={animationVariants.wrapper}
        >
          <motion.h1
            variants={animationVariants.item}
            className='font-display text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.04] mb-6'
          >
            Invest Smarter.
            <br />
            <span className='text-gold-400'>Own Better.</span>
          </motion.h1>

          <motion.p
            variants={animationVariants.item}
            className='text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-body'
          >
            We guide discerning buyers, investors, and property owners through
            Nigeria's real estate market — with expertise, integrity, and
            data-backed insight.
          </motion.p>

          <motion.div
            variants={animationVariants.item}
            className='flex flex-col sm:flex-row gap-4 mb-16'
          >
            <button
              // onClick={onConsult}
              className='bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-8 py-4 text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-gold-500/20 rounded-sm font-body'
            >
              Talk to an Advisor
            </button>
            <button
              // onClick={() => onNavigate('invest')}
              className='border border-white/25 hover:border-gold-500/50 text-white/80 hover:text-gold-300 px-8 py-4 text-sm tracking-wide transition-all duration-200 rounded-sm font-body'
            >
              Explore Opportunities
            </button>
          </motion.div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10'>
            {[
              { value: '₦50B+', label: 'Portfolio Value' },
              { value: '1,200+', label: 'Clients Served' },
              { value: '8 yrs', label: 'Market Expertise' },
              { value: '94%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className='text-gold-400 font-display text-2xl md:text-3xl'>
                  {stat.value}
                </div>
                <div className='text-white/40 text-xs font-body tracking-wide mt-1'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Slide counter + dots */}
      <div className='absolute bottom-8 right-6 lg:right-10 z-20 flex flex-col items-end gap-4'>
        <div className='text-white/35 text-xs font-body tracking-widest tabular-nums'>
          {pad(current)}{' '}
          <span className='text-white/18'>/ {pad(slides.length - 1)}</span>
        </div>
        <div className='flex gap-2'>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className='group relative h-[2px] transition-all duration-500'
              style={{ width: i === current ? 28 : 12 }}
            >
              <span
                className='absolute inset-0 transition-colors duration-300'
                style={{
                  backgroundColor:
                    i === current
                      ? 'rgba(201,150,60,0.9)'
                      : 'rgba(255,255,255,0.25)',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className='absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-white/30 hover:text-white/80 transition-colors'
        aria-label='Previous slide'
      >
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className='absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-white/30 hover:text-white/80 transition-colors'
        aria-label='Next slide'
      >
        <svg
          className='w-5 h-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>

      {/* Bottom scroll cue */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2'>
        <span className='text-white/20 text-[10px] tracking-[0.3em] uppercase font-body'>
          Scroll
        </span>
        <div className='w-px h-8 bg-gradient-to-b from-white/20 to-transparent' />
      </div>
    </section>
  );
}
