import * as motion from 'motion/react-client';
import { animationVariants } from '@/helper/motion.helper';

const steps = [
  {
    number: '01',
    title: 'Understand Your Goals',
    body: 'We begin with a thorough consultation — your budget, timeline, risk appetite, and what success looks like for you.',
  },
  {
    number: '02',
    title: 'Market Intelligence',
    body: 'We provide data-backed analysis of relevant markets, neighbourhoods, and asset classes — no guesswork.',
  },
  {
    number: '03',
    title: 'Curated Shortlist',
    body: 'We present a vetted selection of properties or opportunities that genuinely match your brief.',
  },
  {
    number: '04',
    title: 'Due Diligence',
    body: 'Legal checks, independent valuations, title verification, and risk assessments — all handled for you.',
  },
  {
    number: '05',
    title: 'Close & Beyond',
    body: 'We negotiate, support the transaction, and remain available post-completion for ongoing advisory needs.',
  },
];

export default function OurProcess() {
  return (
    <section className='bg-white py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <motion.div
            variants={animationVariants.item}
            className='flex items-center justify-center gap-3 mb-4'
          >
            <div className='h-px w-8 bg-gold-500' />
            <span className='text-gold-600 text-xs font-semibold tracking-[0.28em] uppercase font-body'>
              Our Process
            </span>
            <div className='h-px w-8 bg-gold-500' />
          </motion.div>
          <motion.h2
            variants={animationVariants.item}
            className='font-display text-4xl md:text-5xl text-[#0B2D4A] max-w-xl mx-auto leading-tight'
          >
            How DPG works for you
          </motion.h2>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={animationVariants.wrapper}
          className='grid md:grid-cols-5 gap-0 relative'
        >
          <motion.div
            variants={animationVariants.item}
            className='hidden md:block absolute top-11 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent'
          />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={animationVariants.item}
              className='relative flex flex-col items-center text-center p-6 md:p-8'
            >
              <div className='relative z-10 w-[52px] h-[52px] border border-gold-500/35 bg-white flex items-center justify-center mb-6'>
                <span className='font-display text-gold-600 text-sm'>
                  {step.number}
                </span>
              </div>

              <h3 className='font-display text-[#0B2D4A] text-lg mb-3'>
                {step.title}
              </h3>

              <p className='text-[#0B2D4A]/50 text-sm leading-relaxed font-body'>
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
