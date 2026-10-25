import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { achievements, certifications, type Certification } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';
import CertificateModal from './CertificateModal';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1.5 pt-5 text-xs font-semibold tracking-wide text-[#fce8b3] underline decoration-[#d9b46a]/60 underline-offset-4 transition hover:text-white hover:decoration-[#d9b46a]"
                  >
                    <span>📜</span> {a.linkLabel ?? 'View Award Proof ↗'}
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* certifications rail */}
      <div className="mt-16">
        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
              Certified <span className="text-mist">· {certifications.length} credentials</span>
            </h3>
            <p className="mt-1 text-xs text-mist">Click any certificate card to view the official PDF credential or verified proof.</p>
          </div>
          <p className="text-xs text-smoke">{issuers.join(' · ')}</p>
        </div>
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-3.5 overflow-x-auto py-5">
            {certifications.map((c, i) => {
              const isPdf = Boolean(c.pdf);
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: EASE }}
                  className="w-[260px] shrink-0 snap-start"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    data-cursor={isPdf ? 'view' : 'link'}
                    onClick={() => {
                      if (isPdf) {
                        setSelectedCert(c);
                      } else {
                        window.open(c.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (isPdf) setSelectedCert(c);
                        else window.open(c.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    aria-label={`View certificate: ${c.name}`}
                    className="focus-ring group relative flex h-full min-h-[175px] flex-col justify-between rounded-xl bg-ink-2 p-4 text-left ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-[#d9b46a]/50 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.8)]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">{c.issuer}</span>
                        {c.badge && (
                          <span className="rounded border border-[#d9b46a]/40 bg-[#d9b46a]/15 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-[#fce8b3]">
                            {c.badge}
                          </span>
                        )}
                        <span className="text-xs text-smoke transition group-hover:text-bone">
                          {isPdf ? '👁️' : '↗'}
                        </span>
                      </div>
                      <p className="mt-4 text-sm font-semibold leading-snug text-bone transition group-hover:text-white">
                        {c.name}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-mist">
                      <span>{isPdf ? 'Click to View PDF' : 'Click to View Proof'}</span>
                      <span className="font-semibold text-[#d9b46a] group-hover:underline">
                        {isPdf ? 'View ↗' : 'Proof ↗'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
