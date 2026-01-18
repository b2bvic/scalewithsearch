import React from 'react';
import { motion } from 'framer-motion';
import { CourseData } from '../data/courses';

interface CoursePageProps {
  course: CourseData;
}

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
  return (
    <article className="min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>

      {/* Hero - H1 Koray Structure */}
      <section className="border-b py-20 md:py-32" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-8 text-[10px] uppercase tracking-widest"
            style={{ color: 'var(--text-muted)' }}
          >
            <a href="/" className="hover:opacity-80">SWS</a>
            <span>/</span>
            <a href="/#courses" className="hover:opacity-80">Courses</a>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>{course.id}</span>
          </motion.div>

          {/* Course ID Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-widest font-bold"
            style={{ backgroundColor: 'var(--accent)', color: 'white' }}
          >
            {course.id} • {course.modules} Modules • {course.runtime}
          </motion.div>

          {/* H1 - Central Search Intent */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {course.h1}
          </motion.h1>

          {/* H1 Subhead - Context Specification */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            {course.h1Sub}
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href={course.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all hover:translate-y-[-2px]"
              style={{ backgroundColor: 'var(--accent)', color: 'white' }}
            >
              {course.action.cta}
            </a>
            <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {course.action.urgency}
            </div>
          </motion.div>

        </div>
      </section>

      {/* PASAIDA: Problem */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>01</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              {course.problem.headline}
            </h2>

            <ul className="space-y-4 mb-8">
              {course.problem.pain.map((pain, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-lg" style={{ color: 'var(--accent)' }}>×</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{pain}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--accent)' }}>
              <p className="font-bold" style={{ color: 'var(--text-primary)' }}>
                {course.problem.cost}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PASAIDA: Agitate */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-panel)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>02</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              {course.agitate.headline}
            </h2>

            <ul className="space-y-4 mb-8">
              {course.agitate.consequences.map((consequence, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-lg" style={{ color: 'var(--accent)' }}>→</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{consequence}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 border" style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--bg-base)' }}>
              <p className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                {course.agitate.stakes}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PASAIDA: Solution */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>03</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              {course.solution.headline}
            </h2>

            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
              {course.solution.transformation}
            </p>

            <p style={{ color: 'var(--text-muted)' }}>
              {course.solution.mechanism}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-panel)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>Curriculum</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              {course.modules} Modules. {course.runtime}.
            </h2>

            <div className="space-y-4">
              {course.curriculum.map((module, i) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border p-4 flex items-start gap-4"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}
                >
                  <span className="text-[10px] uppercase tracking-widest font-bold shrink-0 pt-1" style={{ color: 'var(--accent)' }}>
                    {module.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{module.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{module.description}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest shrink-0" style={{ color: 'var(--text-muted)' }}>
                    {module.duration}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PASAIDA: Authority */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>04</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              {course.authority.headline}
            </h2>

            <ul className="space-y-4 mb-8">
              {course.authority.proof.map((proof, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-lg" style={{ color: 'var(--success)' }}>✓</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{proof}</span>
                </li>
              ))}
            </ul>

            <p style={{ color: 'var(--text-muted)' }}>
              {course.authority.credibility}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-panel)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-6xl mb-6" style={{ color: 'var(--accent)' }}>"</div>
            <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {course.testimonial.quote}
            </blockquote>
            <div className="font-bold" style={{ color: 'var(--text-primary)' }}>{course.testimonial.name}</div>
            <div className="text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>{course.testimonial.title}</div>
            <div className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest font-bold" style={{ backgroundColor: 'var(--border)', color: 'var(--accent)' }}>
              {course.testimonial.result}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PASAIDA: Intrigue */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>05</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              {course.intrigue.headline}
            </h2>

            <ul className="space-y-4 mb-8">
              {course.intrigue.hooks.map((hook, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-lg" style={{ color: 'var(--accent)' }}>?</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{hook}</span>
                </li>
              ))}
            </ul>

            <p className="font-bold" style={{ color: 'var(--accent)' }}>
              {course.intrigue.openLoop}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PASAIDA: Desire */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-panel)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>06</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              {course.desire.headline}
            </h2>

            <ul className="space-y-4 mb-8">
              {course.desire.futureState.map((state, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-lg" style={{ color: 'var(--success)' }}>→</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{state}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              {course.desire.identity}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>FAQ</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              Common Questions
            </h2>

            <div className="space-y-6">
              {course.faq.map((item, i) => (
                <div key={i} className="border-b pb-6" style={{ borderColor: 'var(--border)' }}>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.q}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Courses - Topical Linking */}
      <section className="border-b py-16 md:py-24" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-panel)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>System</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
              The Complete Stack
            </h2>

            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
              {course.name} is part of the SWS AI Operating System. For the complete transformation, explore the full curriculum.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.id !== 'SWS-01' && (
                <a href="/course/browser-os" className="border p-4 transition-all hover:translate-y-[-2px]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>SWS-01</span>
                  <h3 className="font-bold mt-1" style={{ color: 'var(--text-primary)' }}>Browser OS</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Kill tab hell. Reclaim 500+ hours/year.</p>
                </a>
              )}
              {course.id !== 'SWS-02' && (
                <a href="/course/applied-information" className="border p-4 transition-all hover:translate-y-[-2px]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>SWS-02</span>
                  <h3 className="font-bold mt-1" style={{ color: 'var(--text-primary)' }}>Applied Information</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Stop renting AI. Start owning it.</p>
                </a>
              )}
              {course.id !== 'SWS-03' && (
                <a href="/course/codified-genius" className="border p-4 transition-all hover:translate-y-[-2px]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>SWS-03</span>
                  <h3 className="font-bold mt-1" style={{ color: 'var(--text-primary)' }}>Codified Genius</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Extract expertise. Escape the bottleneck.</p>
                </a>
              )}
              {course.id !== 'SWS-04' && (
                <a href="/course/hybrid-intelligence" className="border p-4 transition-all hover:translate-y-[-2px]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>SWS-04</span>
                  <h3 className="font-bold mt-1" style={{ color: 'var(--text-primary)' }}>Hybrid Intelligence</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Production AI. Local-first. Zero compromise.</p>
                </a>
              )}
              {course.id !== 'SWS-05' && (
                <a href="/course/llm-ops" className="border p-4 transition-all hover:translate-y-[-2px]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-base)' }}>
                  <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>SWS-05</span>
                  <h3 className="font-bold mt-1" style={{ color: 'var(--text-primary)' }}>LLM Ops</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Zero Trust AI. Production discipline.</p>
                </a>
              )}
            </div>

            <div className="mt-8 text-center">
              <a href="/#pricing" className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--accent)' }}>
                View Bundle Pricing →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PASAIDA: Action - Final CTA */}
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
              {course.action.headline}
            </h2>

            <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
              {course.action.urgency}
            </p>

            <a
              href={course.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 font-bold uppercase tracking-wider text-lg transition-all hover:translate-y-[-2px]"
              style={{ backgroundColor: 'var(--accent)', color: 'white' }}
            >
              {course.action.cta}
            </a>

            <div className="mt-8 text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
              Instant access • Lifetime updates • 30-day guarantee
            </div>
          </motion.div>
        </div>
      </section>

    </article>
  );
};

export default CoursePage;
