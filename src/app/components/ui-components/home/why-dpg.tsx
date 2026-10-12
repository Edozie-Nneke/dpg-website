import * as motion from 'motion/react-client';
import { animationVariants } from '@/helper/motion.helper';

const differentiators = [
  {
    title: 'Advisory-First',
    body: "We don't sell you properties — we guide you to the right one. Our incentives are aligned with yours, not a developer's commission.",
  },
  {
    title: 'Verified Market Data',
    body: 'Every recommendation is grounded in independent transaction data, not developer incentives or listing-commission bias.',
  },
  {
    title: 'End-to-End Service',
    body: 'From initial brief to post-completion management, a single point of contact throughout your entire property journey.',
  },
  {
    title: 'Deep Local Expertise',
    body: 'Eight years of transaction intelligence across Lagos, Abuja, Port Harcourt, and emerging secondary markets.',
  },
  {
    title: 'Transparent Fees',
    body: 'No hidden charges. Our fee structures are stated up front and tailored to the specific service you need.',
  },
];

// interface WhyDPGProps {
//   onConsult: () => void;
// }

export default function WhyDPG() {
  return (
    <section className='bg-navy-900 py-24 lg:py-32 relative overflow-hidden'>
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 15% 60%, rgba(201,150,60,0.06) 0%, transparent 55%), radial-gradient(ellipse at 85% 40%, rgba(36,54,104,0.5) 0%, transparent 55%)',
        }}
      />

      <div className='relative max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-start'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={animationVariants.wrapper}
            className='lg:sticky lg:top-32'
          >
            <div className='flex items-center gap-3 mb-6'>
              <div className='h-px w-8 bg-[#D4AF57]' />
              <span className='text-[#D4AF57]/75 text-xs font-semibold tracking-[0.28em] uppercase font-body'>
                Why Dogari
              </span>
            </div>
            <motion.h2
              variants={animationVariants.item}
              className='font-display text-4xl md:text-5xl text-white leading-tight mb-8'
            >
              Property advice you can trust, not salesmanship you have to doubt.
            </motion.h2>
            <motion.p
              variants={animationVariants.item}
              className='text-white/45 text-base leading-relaxed mb-10 font-body'
            >
              Too many Nigerians have made costly decisions based on misleading
              information. We built Dogari to change that — providing the same
              quality of advisory usually reserved for institutional investors.
            </motion.p>
            <motion.button
              variants={animationVariants.item}
              className='bg-[#D4AF57] hover:bg-[#D4AF57]/80 text-navy-900 font-semibold px-8 py-4 text-sm tracking-wide transition-all duration-200 rounded-sm font-body'
            >
              Talk to an Advisor
            </motion.button>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={animationVariants.wrapper}
            className='flex flex-col divide-y divide-white/8 hover:divide-[#D4AF57]/20 transition-all duration-200'
          >
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                variants={animationVariants.item}
                className='py-8 flex gap-6'
              >
                <div className='text-[#D4AF57] font-display text-lg w-8 shrink-0 pt-0.5'>
                  0{i + 1}
                </div>
                <div>
                  <h3 className='text-white font-semibold text-base mb-2 font-body'>
                    {item.title}
                  </h3>
                  <p className='text-white/45 text-sm leading-relaxed font-body'>
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
