import React from 'react';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const stats = [
  {
    value: '150+',
    label: 'Client Engagements',
    icon: Users,
  },
  {
    value: '500+',
    label: 'Hours Reclaimed/Year',
    icon: Clock,
  },
  {
    value: '$2.4M',
    label: 'Revenue Influenced',
    icon: DollarSign,
  },
  {
    value: '77',
    label: 'Production Modules',
    icon: TrendingUp,
  }
];

const testimonials = [
  {
    quote: "Vic's system changed how I think about information architecture. The Browser OS alone saved me 10+ hours a week.",
    name: "Sarah Chen",
    title: "Founder, TechScale",
    result: "10hrs/week saved"
  },
  {
    quote: "The Hybrid Intelligence course took my agency from reactive to proactive. We're now deploying local LLMs for every client.",
    name: "Marcus Webb",
    title: "CEO, Webb Digital",
    result: "40% efficiency gain"
  },
  {
    quote: "Codified Genius helped me extract 15 years of expertise into repeatable SOPs. My team can finally scale without me.",
    name: "Dr. James Liu",
    title: "Practice Owner",
    result: "Exited founder bottleneck"
  }
];

const Proof: React.FC = () => {
  return (
    <section id="proof" className="py-24 px-4 md:px-12 bg-bg border-t border-ink/10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
            <span className="text-accent">$</span> cat /var/log/results.log
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-ink tracking-tighter mb-4">
            Proof of Work
          </h2>
          <p className="text-lg text-ink/60 font-mono max-w-2xl">
            Built from 150+ client engagements. These aren't theories.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-ink/20 p-6 group hover:border-accent/50 transition-colors"
            >
              <stat.icon size={20} className="text-accent mb-4" strokeWidth={1.5} />
              <div className="text-3xl md:text-4xl font-black text-ink mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-gray-500 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-ink/20 relative group hover:border-ink/40 transition-colors"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-ink/10 bg-subtle/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase">
                  TESTIMONIAL_{String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <Quote size={24} className="text-accent/30 mb-4" strokeWidth={1} />

                <p className="text-ink/80 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-ink/10">
                  <div className="font-bold text-ink">
                    {testimonial.name}
                  </div>
                  <div className="font-mono text-xs text-gray-500 mb-3">
                    {testimonial.title}
                  </div>
                  <div className="inline-block px-2 py-1 bg-accent/10 border border-accent/20 font-mono text-xs text-accent font-bold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 font-mono text-sm text-gray-500">
          <span className="text-accent">$</span> grep -c "success" /var/log/results.log → <span className="text-accent">150+</span>
        </div>

      </div>
    </section>
  );
};

export default Proof;
