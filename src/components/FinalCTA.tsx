import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { EASE, Particles } from './fx';

export default function FinalCTA({ onReplay }: { onReplay?: () => void }) {
  void onReplay;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = name.trim()
      ? `Interview & Opportunity Request from ${name.trim()}`
      : 'Interview & Connect Request — Software Engineering';

    const bodyLines = [
      message.trim(),
      '',
      '---',
      name.trim() ? `Sender: ${name.trim()}` : null,
      email.trim() ? `Email: ${email.trim()}` : null,
    ].filter(Boolean);

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(229,19,43,0.12),transparent_70%)]" />
      <Particles count={24} />

      <div className="relative z-10 w-full max-w-lg">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-tight tracking-wide text-bone">
            Schedule an Interview
          </h2>
          <p className="mt-2 text-sm text-mist">
            Send a direct message to connect regarding software engineering roles.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSend}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-8 rounded-2xl border border-white/10 bg-ink-2/95 p-6 text-left shadow-2xl ring-1 ring-white/5 backdrop-blur-xl sm:p-7"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-bone placeholder:text-smoke transition focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-bone placeholder:text-smoke transition focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-mist">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.04] p-4 text-sm leading-relaxed text-bone placeholder:text-smoke transition focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson"
              />
            </div>

            <button
              type="submit"
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-crimson px-6 text-sm font-bold tracking-wide text-white shadow-[0_0_30px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2 hover:shadow-[0_0_45px_rgba(229,19,43,0.6)]"
            >
              <span>✉</span> Send Message
            </button>
          </div>
        </motion.form>

        {/* Down below: ONLY LinkedIn and GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="group flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold text-bone transition hover:border-[#0077b5] hover:bg-[#0077b5]/15 hover:text-white"
          >
            <svg className="h-4 w-4 fill-current text-[#0077b5] transition group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
            </svg>
            <span>LinkedIn Profile</span>
            <span className="text-mist transition group-hover:translate-x-0.5">↗</span>
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="group flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-2.5 text-xs font-semibold text-bone transition hover:border-white/50 hover:bg-white/10 hover:text-white"
          >
            <svg className="h-4 w-4 fill-current text-white transition group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
            </svg>
            <span>GitHub Profile</span>
            <span className="text-mist transition group-hover:translate-x-0.5">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
