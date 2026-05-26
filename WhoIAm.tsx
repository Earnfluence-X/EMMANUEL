import ScrollReveal from './ScrollReveal';

export default function WhoIAm() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--section-bg-alt)' }}
      aria-label="About Emmanuel Omodiale"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-2" style={{ top: '10%', left: '-10%', width: 350, height: 350 }} />
        <div className="blob blob-3" style={{ bottom: '10%', right: '-5%', width: 300, height: 300 }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">About Me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
              Who I <span className="gradient-text">Am</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="glass-card p-8 sm:p-12 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Headshot Placeholder */}
              <div className="flex-shrink-0">
                <div className="headshot-glow">
                  <div
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-4xl sm:text-5xl font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)' }}
                    role="img"
                    aria-label="Emmanuel Omodiale headshot placeholder"
                  >
                    EO
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-6">
                  I'm <strong className="text-[var(--text-primary)]">Emmanuel Omodiale</strong> — a Cisco-certified 
                  networking & cybersecurity professional, web developer, and faith-driven youth leader based in 
                  <strong className="text-[var(--text-primary)]"> Lagos, Nigeria</strong>. I build digital platforms 
                  that prioritise privacy, security, and genuine community.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  <span className="badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Cisco Certified
                  </span>
                  <span className="badge" style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(59,130,246,0.1))', color: '#14b8a6' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    Privacy Engineer
                  </span>
                  <span className="badge" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(236,72,153,0.1))', color: '#f97316' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    Youth Leader
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
