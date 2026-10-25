import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectModal({ project, onClose, onSwitch }: { project: Project; onClose: () => void; onSwitch: (p: Project) => void }) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-labelledby={`title-${project.id}-modal`}>
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div ref={scroller} data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* billboard */}
          <div className="relative h-[52vh] min-h-[340px] overflow-hidden sm:rounded-t-2xl">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0" transition={{ duration: 0.7, ease: EASE }}>
              <ProjectArt project={project} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur transition hover:bg-black"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10">
              <motion.p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-bone/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <span className="font-display text-xl tracking-normal text-crimson-2">S</span> ORIGINAL
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.86] tracking-wide text-bone"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <motion.div className="px-5 pb-12 sm:px-10" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}>
            <motion.div variants={block} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
              <span className="font-semibold text-[#46e3a8]">{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-smoke" />
              <span>{project.genre}</span>
            </motion.div>

            <motion.p variants={block} className="mt-4 max-w-3xl text-lg leading-relaxed text-bone sm:text-xl">
              {project.logline}
            </motion.p>

            {(project.live || project.github || project.proof) && (
              <motion.div variants={block} className="mt-6 flex flex-wrap gap-3">
                {project.live && (
                  <Magnetic>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="flex min-h-12 items-center gap-2 rounded-md bg-crimson px-6 text-[15px] font-bold text-white shadow-[0_0_35px_rgba(229,19,43,0.5)] transition hover:bg-crimson-2 hover:shadow-[0_0_50px_rgba(229,19,43,0.7)]"
                    >
                      <span className="text-sm">▶</span> View Live Project ↗
                    </a>
                  </Magnetic>
                )}
                {project.proof && (
                  <Magnetic>
                    <a
                      href={project.proof.url}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="flex min-h-12 items-center gap-2 rounded-md border border-[#d9b46a]/60 bg-gradient-to-r from-[#d9b46a]/20 to-[#d9b46a]/10 px-6 text-[15px] font-bold text-[#fce8b3] shadow-[0_0_25px_rgba(217,180,106,0.25)] backdrop-blur transition hover:bg-[#d9b46a]/30 hover:shadow-[0_0_40px_rgba(217,180,106,0.4)]"
                    >
                      <span>🏆</span> {project.proof.badge} Proof ↗
                    </a>
                  </Magnetic>
                )}
                {project.github && (
                  <Magnetic>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="flex min-h-12 items-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
                    >
                      GitHub ↗
                    </a>
                  </Magnetic>
                )}
              </motion.div>
            )}

            {project.proof && (
              <motion.section
                variants={block}
                className="mt-8 overflow-hidden rounded-2xl border border-[#d9b46a]/30 bg-[radial-gradient(120%_90%_at_50%_0%,#2e2010,#120e0a_55%,#08080a)] p-6 shadow-2xl ring-1 ring-[#d9b46a]/20 sm:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d9b46a]/20 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d9b46a]/20 text-xs font-bold text-[#d9b46a]">
                      ✓
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#d9b46a]">
                      Official Award & Verification Proof
                    </span>
                  </div>
                  <span className="rounded-full border border-[#d9b46a]/50 bg-[#d9b46a]/20 px-3.5 py-1 text-xs font-bold text-[#fce8b3]">
                    {project.proof.badge}
                  </span>
                </div>

                <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="font-display text-3xl leading-none tracking-wide text-bone sm:text-4xl">
                      {project.proof.event}
                    </h3>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d9b46a]">
                      {project.proof.organizer}
                    </p>
                    {project.proof.headline && (
                      <p className="mt-3 font-serif italic text-base text-bone/90 sm:text-lg">
                        “{project.proof.headline}”
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-bone/80 sm:text-[15px]">
                      {project.proof.summary}
                    </p>
                    {project.proof.team && project.proof.team.length > 0 && (
                      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3 text-xs text-mist">
                        <span className="font-bold uppercase tracking-wider text-bone">Team:</span>
                        {project.proof.team.map((m) => (
                          <span key={m} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-bone">
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center gap-2 sm:min-w-[240px]">
                    <a
                      href={project.proof.url}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="group flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d9b46a] via-[#e8cb85] to-[#c99f4a] px-6 text-sm font-bold text-ink shadow-[0_0_30px_rgba(217,180,106,0.4)] transition hover:brightness-110 hover:shadow-[0_0_45px_rgba(217,180,106,0.6)]"
                    >
                      <span>📜 View Official Proof Post</span>
                      <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                    </a>
                    <p className="text-center text-[11px] text-mist">Verified announcement & team submission</p>
                  </div>
                </div>
              </motion.section>
            )}

            {/* impact */}
            <motion.section variants={block} className="mt-12">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Result / Impact</h3>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
                {project.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="bg-ink p-4 sm:p-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.5, ease: EASE }}
                  >
                    <p className="font-display text-4xl leading-none text-bone sm:text-5xl" style={{ color: i === 0 ? project.palette.accent : undefined }}>
                      {m.value}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-mist">{m.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
              <motion.section variants={block}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">My Contribution</h3>
                <ul className="space-y-4">
                  {project.build.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-bone/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.palette.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.section>
              <div className="space-y-10">
                <motion.section variants={block}>
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span key={t} className="glass rounded-full px-3 py-1.5 text-sm font-medium text-bone">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.section>
                <motion.section variants={block}>
                  <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-crimson-2">Key Features</h3>
                  <ul className="space-y-2.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-bone/85">
                        <span className="text-crimson-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.section>
              </div>
            </div>

            {/* more like this */}
            <motion.section variants={block} className="mt-14 border-t border-white/10 pt-8">
              <h3 className="mb-4 font-sans text-lg font-semibold text-bone">More Originals</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {more.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-cursor="view"
                    onClick={() => onSwitch(p)}
                    className="group relative aspect-video overflow-hidden rounded-xl text-left ring-1 ring-white/10 transition hover:ring-white/30"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ProjectArt project={p} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist">{p.genre}</p>
                      <p className="font-display text-3xl leading-none tracking-wide text-bone">{p.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
