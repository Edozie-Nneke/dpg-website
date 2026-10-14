'use client';
import { useState } from 'react';
// import { Page } from '../App';
import { motion } from 'motion/react';
import { animationVariants } from '@/helper/motion.helper';
import { useRouter } from 'next/navigation';

type Tab = 'all' | 'buy' | 'rent' | 'investment';

const properties = [
  {
    id: '1',
    tabs: ['all', 'buy'] as Tab[],
    type: 'For Sale',
    name: '4-Bedroom Detached Villa',
    location: 'Ikoyi, Lagos',
    price: '₦180,000,000',
    beds: 4,
    baths: 5,
    sqm: 420,
    image:
      'https://images.unsplash.com/photo-1585011191285-8b443579631c?w=500&h=380&fit=crop&auto=format',
  },
  {
    id: '2',
    tabs: ['all', 'rent'] as Tab[],
    type: 'For Rent',
    name: '3-Bedroom Serviced Apartment',
    location: 'Victoria Island, Lagos',
    price: '₦850,000 / mo',
    beds: 3,
    baths: 3,
    sqm: 210,
    image:
      'https://images.unsplash.com/photo-1658394818344-20f0f11a9121?w=500&h=380&fit=crop&auto=format',
  },
  {
    id: '3',
    tabs: ['all', 'buy'] as Tab[],
    type: 'For Sale',
    name: '5-Bedroom Mansion',
    location: 'Banana Island, Lagos',
    price: '₦350,000,000',
    beds: 5,
    baths: 6,
    sqm: 780,
    image:
      'https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?w=500&h=380&fit=crop&auto=format',
  },
  {
    id: '4',
    tabs: ['all', 'investment'] as Tab[],
    type: 'Investment',
    name: 'Grade A Office Space',
    location: 'Maitama, Abuja FCT',
    price: '₦95,000,000',
    beds: 0,
    baths: 2,
    sqm: 320,
    image:
      'https://images.unsplash.com/photo-1604348489791-f95132c5d8c0?w=500&h=380&fit=crop&auto=format',
  },
  {
    id: '5',
    tabs: ['all', 'rent'] as Tab[],
    type: 'For Rent',
    name: '2-Bedroom Apartment',
    location: 'Lekki Phase 1, Lagos',
    price: '₦650,000 / mo',
    beds: 2,
    baths: 2,
    sqm: 120,
    image:
      'https://images.unsplash.com/photo-1752622176337-5d9315e2df6e?w=500&h=380&fit=crop&auto=format',
  },
  {
    id: '6',
    tabs: ['all', 'buy'] as Tab[],
    type: 'For Sale',
    name: '3-Bedroom Semi-Detached',
    location: 'Gwarinpa, Abuja FCT',
    price: '₦75,000,000',
    beds: 3,
    baths: 3,
    sqm: 215,
    image:
      'https://images.unsplash.com/photo-1531300365552-da5abe58a725?w=500&h=380&fit=crop&auto=format',
  },
];

const tabs: { id: Tab; label: string }[] = [
  { id: 'all', label: 'All Properties' },
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
  { id: 'investment', label: 'Investment' },
];

const typeBadge: Record<string, string> = {
  'For Sale': 'bg-[#0B2D4A] text-white',
  'For Rent': 'bg-[#0B2D4A]/70 text-white',
  Investment: 'bg-gold-500 text-[#0B2D4A]',
};

export default function CurrentListings() {
  const [activeTab, setActiveTab] = useState<Tab>('all');

  const filtered = properties.filter((p) => p.tabs.includes(activeTab));

  const router = useRouter();

  const onNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <section className='bg-cream py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'
        >
          <motion.div variants={animationVariants.item}>
            <div className='flex items-center gap-3 mb-4'>
              <div className='h-px w-8 bg-gold-500' />
              <span className='text-gold-600 text-xs font-semibold tracking-[0.28em] uppercase font-body'>
                Properties
              </span>
            </div>
            <h2 className='font-display text-4xl md:text-5xl text-[#0B2D4A] leading-tight'>
              Current listings
            </h2>
          </motion.div>
          <motion.button
            variants={animationVariants.item}
            onClick={() => onNavigate('properties')}
            className='text-[#0B2D4A]/70 hover:text-[#0B2D4A] text-sm font-semibold transition-colors flex items-center gap-2 font-body'
          >
            Browse all properties <span>→</span>
          </motion.button>
        </motion.div>

        <div className='flex gap-0 mb-10 border-b border-[#0B2D4A]/10 overflow-x-auto'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-all -mb-px border-b-2 font-body ${
                activeTab === tab.id
                  ? 'text-[#0B2D4A] border-gold-500'
                  : 'text-[#0B2D4A]/45 border-transparent hover:text-[#0B2D4A]/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {filtered.map((property) => (
            <motion.div
              key={property.id}
              variants={animationVariants.item}
              className='group bg-white hover:shadow-xl hover:shadow-[#0B2D4A]/6 transition-all duration-300 overflow-hidden cursor-pointer'
              onClick={() => onNavigate('properties')}
            >
              <div className='relative h-52 bg-cream-dark overflow-hidden'>
                <img
                  src={property.image}
                  alt={property.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute top-3 left-3'>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 uppercase tracking-wide font-body ${typeBadge[property.type] ?? 'bg-[#0B2D4A] text-white'}`}
                  >
                    {property.type}
                  </span>
                </div>
              </div>
              <div className='p-5'>
                <h3 className='font-display text-[#0B2D4A] text-lg mb-1'>
                  {property.name}
                </h3>
                <p className='text-[#0B2D4A]/45 text-sm mb-3 font-body'>
                  {property.location}
                </p>
                <p className='text-[#0B2D4A] font-semibold text-lg mb-4 font-body'>
                  {property.price}
                </p>
                <div className='flex items-center gap-4 text-[#0B2D4A]/40 text-xs pt-3 border-t border-[#0B2D4A]/5 font-body'>
                  {property.beds > 0 && <span>{property.beds} beds</span>}
                  <span>{property.baths} baths</span>
                  <span>{property.sqm} m²</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
