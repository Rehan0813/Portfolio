import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Certification } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';

export default function CertificateModal({ cert, onClose }: { cert: Certification | null; onClose: () => void }) {
  useScrollLock(Boolean(cert));
  const small = useMedia('(max-width: 767px)');

  useEffect(() => {
    if (!cert) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cert, onClose]);

  if (!cert) return null;

  const pdfUrl = cert.pdf ?? cert.link;
  const fileName = `${cert.issuer}_${cert.name.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/92 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
    >
      {/* Top Header */}
      <div className="gutter flex h-20 shrink-0 items-center justify-between gap-3 border-b border-white/10 pt-[env(safe-area-inset-top)]">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#d9b46a]/40 bg-[#d9b46a]/15 text-lg">
            📜
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">{cert.issuer}</span>
              {cert.badge && (
                <span className="rounded border border-[#d9b46a]/40 bg-[#d9b46a]/15 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-[#fce8b3]">
                  {cert.badge}
                </span>
              )}
            </div>
            <h2 className="truncate font-display text-xl tracking-wide text-bone sm:text-2xl">{cert.name}</h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {cert.pdf && (
            <a
              href={pdfUrl}
              download={fileName}
              className="hidden rounded-md border border-white/20 bg-ink-2 px-3.5 py-2 text-xs font-semibold text-bone transition hover:border-white/50 hover:bg-white/10 sm:inline-flex"
            >
              ⤓ Download PDF
            </a>
          )}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-bone px-3.5 py-2 text-xs font-bold text-ink shadow transition hover:bg-white"
          >
            Open in Tab ↗
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Meta Bar */}
      {(cert.date || cert.score || cert.credentialId) && (
        <div className="gutter flex flex-wrap items-center gap-x-5 gap-y-1.5 border-b border-white/5 bg-ink py-2 text-xs text-mist">
          {cert.date && (
            <span>
              <strong className="font-semibold text-bone">Issued:</strong> {cert.date}
            </span>
          )}
          {cert.score && (
            <span>
              <strong className="font-semibold text-bone">Result:</strong> {cert.score}
            </span>
          )}
          {cert.credentialId && (
            <span className="truncate">
              <strong className="font-semibold text-bone">Verification:</strong> {cert.credentialId}
            </span>
          )}
        </div>
      )}

      {/* Main Content */}
      <motion.div
        className="gutter flex-1 pb-6 pt-4"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {small ? (
          <div data-lenis-prevent className="flex h-full flex-col items-center justify-center overflow-y-auto rounded-2xl bg-ink-2 p-6 text-center ring-1 ring-white/10">
            <span className="text-5xl">🏆</span>
            <span className="mt-4 text-xs font-bold uppercase tracking-[0.24em] text-crimson-2">{cert.issuer}</span>
            <h3 className="mt-2 font-display text-2xl text-bone">{cert.name}</h3>
            {cert.score && <p className="mt-2 text-sm font-medium text-[#fce8b3]">{cert.score}</p>}
            {cert.credentialId && <p className="mt-1 text-xs text-mist">{cert.credentialId}</p>}
            <div className="mt-6 flex w-full max-w-xs flex-col gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-crimson px-5 text-sm font-bold text-white shadow"
              >
                Open Original PDF ↗
              </a>
              {cert.pdf && (
                <a
                  href={pdfUrl}
                  download={fileName}
                  className="glass flex min-h-12 items-center justify-center rounded-xl text-sm font-semibold text-bone"
                >
                  Download Certificate ⤓
                </a>
              )}
            </div>
          </div>
        ) : (
          <iframe
            title={`${cert.issuer} — ${cert.name}`}
            src={`${pdfUrl}#view=FitH`}
            className="h-full w-full rounded-2xl bg-white shadow-2xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
