import * as motion from 'motion/react-client';
import { animationVariants } from '@/helper/motion.helper';

const testimonials = [
  {
    quote:
      'Working with Dogari completely changed how I think about property investment. They came with data, challenged my assumptions, and found me an opportunity I never would have discovered on my own.',
    name: 'Chukwuemeka Obi',
    title: 'Tech Entrepreneur, Lagos',
    initials: 'CO',
  },
  {
    quote:
      'The advisory process was thorough and completely transparent. No pressure, no hidden agendas. For the first time I felt like the professional I was working with was genuinely on my side.',
    name: 'Aisha Garba',
    title: 'Director, Federal Ministry, Abuja',
    initials: 'AG',
  },
  {
    quote:
      "I sold my Lekki property in six weeks at asking price. The Dogari team's market knowledge and buyer network is genuinely impressive — I would not use anyone else.",
    name: 'Biodun Adeyemi',
    title: 'Architect & Property Developer, Lagos',
    initials: 'BA',
  },
];

export default function DPGTestimonials() {
  return (
    <section className='bg-white py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={animationVariants.wrapper}
          className='text-center mb-16'
        >
          <motion.div
            variants={animationVariants.item}
            className='flex items-center justify-center gap-3 mb-4'
          >
            <div className='h-px w-8 bg-[#D4AF57]/50' />
            <span className='text-[#D4AF57]/60 text-xs font-semibold tracking-[0.28em] uppercase font-body'>
              Client Stories
            </span>
            <div className='h-px w-8 bg-[#D4AF57]/50' />
          </motion.div>
          <motion.h2
            variants={animationVariants.item}
            className='font-display text-4xl md:text-5xl text-[#0B2D4A]'
          >
            What our clients say
          </motion.h2>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={animationVariants.wrapper}
          className='grid md:grid-cols-3 gap-8'
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={animationVariants.item}
              className='flex flex-col bg-cream p-8'
            >
              <div className='text-[#D4AF57]/30 font-display text-6xl leading-none mb-2 select-none'>
                "
              </div>
              <p className='text-[#0B2D4A]/70 text-base leading-relaxed italic flex-1 mb-8 font-body'>
                {t.quote}
                <span className='not-italic'>"</span>
              </p>
              <div className='flex items-center gap-4 pt-6 border-t border-[#0B2D4A]/8'>
                <div className='w-10 h-10 bg-[#0B2D4A] flex items-center justify-center shrink-0'>
                  <span className='text-white text-xs font-semibold font-body'>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className='text-[#0B2D4A] font-semibold text-sm font-body'>
                    {t.name}
                  </div>
                  <div className='text-[#0B2D4A]/45 text-xs mt-0.5 font-body'>
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
