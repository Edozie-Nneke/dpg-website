'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { animationVariants } from '@/helper/motion.helper';

const posts = [
  {
    date: 'June 2026',
    category: 'Market Analysis',
    title: 'Lagos Property Market Outlook: Second Half 2026',
    excerpt:
      'Demand continues to outpace supply in Ikoyi and Victoria Island, while Lekki Phase 2 emerges as the value play of the year. Our full H2 analysis.',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1741991110666-88115e724741?w=600&h=380&fit=crop&auto=format',
  },
  {
    date: 'May 2026',
    category: 'Buyer Guide',
    title: '5 Things Every First-Time Property Buyer in Nigeria Must Know',
    excerpt:
      'From title verification to perfection of title, stamp duty, and the red flags that should stop any deal in its tracks.',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1745725427804-4d94df0c5eb7?w=600&h=380&fit=crop&auto=format',
  },
  {
    date: 'April 2026',
    category: 'Investment',
    title: "Why Off-Plan Investment Outperforms in Nigeria's Current Market",
    excerpt:
      "Price appreciation between off-plan purchase and completion has averaged 34% across our tracked projects since 2023. Here's why, and what to watch for.",
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1531300365552-da5abe58a725?w=600&h=380&fit=crop&auto=format',
  },
];

export default function DPGInsight() {
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
          variants={animationVariants.wrapper}
          className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'
        >
          <motion.div variants={animationVariants.item}>
            <div className='flex items-center gap-3 mb-4'>
              <div className='h-px w-8 bg-[#D4AF57]/50' />
              <span className='text-[#D4AF57]/60 text-xs font-semibold tracking-[0.28em] uppercase font-body'>
                DPG Insights
              </span>
            </div>
            <h2 className='font-display text-4xl md:text-5xl text-[#0B2D4A] leading-tight'>
              Market intelligence
              <br />& property guides
            </h2>
          </motion.div>

          <motion.button
            variants={animationVariants.item}
            onClick={() => onNavigate('insights')}
            className='text-[#0B2D4A]/70 hover:text-[#0B2D4A] text-sm font-semibold transition-colors flex items-center gap-2 font-body'
          >
            All insights <span>→</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={animationVariants.wrapper}
          className='grid md:grid-cols-3 gap-8'
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={animationVariants.item}
              className='group bg-white overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-[#0B2D4A]/5 transition-all duration-300'
            >
              <div className='h-48 bg-cream-dark overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90'
                />
              </div>
              <div className='p-6'>
                <div className='flex items-center gap-2.5 mb-3 font-body'>
                  <span className='text-[#D4AF57]/60 text-xs font-semibold tracking-wide uppercase'>
                    {post.category}
                  </span>
                  <span className='text-[#0B2D4A]/25 text-xs'>·</span>
                  <span className='text-[#0B2D4A]/35 text-xs'>{post.date}</span>
                </div>
                <h3 className='font-display text-[#0B2D4A] text-xl leading-tight mb-3 group-hover:text-[#0B2D4A]/80 transition-colors'>
                  {post.title}
                </h3>
                <p className='text-[#0B2D4A]/55 text-sm leading-relaxed mb-5 font-body'>
                  {post.excerpt}
                </p>
                <div className='flex items-center justify-between pt-4 border-t border-[#0B2D4A]/5 font-body'>
                  <span className='text-[#0B2D4A]/35 text-xs'>
                    {post.readTime}
                  </span>
                  <span className='text-[#D4AF57]/60 text-xs font-semibold flex items-center gap-1.5'>
                    Read more{' '}
                    <span className='group-hover:translate-x-1 transition-transform inline-block'>
                      →
                    </span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
