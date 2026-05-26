import ScrollReveal from './ScrollReveal';

const focusItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    text: 'Scaling Earnfluence-X across African creator markets',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    text: 'Expanding The Overflow App to new communities',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: 'Advancing cybersecurity certifications & research',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    text: 'Building open-source security & privacy tools',
  },
];

export default function CurrentFocus() {
  return (
    <section
      id="focus"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--section-bg-alt)' }}
      aria-label="Current Focus and Philosophy"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-1" style={{ top: '-15%', right: '-10%', width: 350, height: 350 }} />
        <div className="blob blob-3" style={{ bottom: '-10%', left: '-5%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">Looking Ahead</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
              Current <span className="gradient-text">Focus</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Focus Items */}
          <ScrollReveal delay={1}>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-8">
                What I&apos;m Working On
              </h3>
              <div className="space-y-5">
                {focusItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 glass-card p-5"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(59,130,246,0.1))' }}
                    >
                      <span className="text-[#7c3aed]">{item.icon}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Philosophy Quote */}
          <ScrollReveal delay={3}>
            <div className="text-center lg:text-left">
              <div className="relative">
                {/* Decorative quote marks */}
                <div
                  className="absolute -top-8 -left-4 text-8xl font-bold opacity-10 gradient-text select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <blockquote className="relative z-10">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug gradient-text">
                    I don&apos;t wait for opportunities. I build platforms, communities, and ideas that create value and influence culture.
                  </p>
                </blockquote>

                <div
                  className="absolute -bottom-6 -right-2 text-8xl font-bold opacity-10 gradient-text select-none"
                  aria-hidden="true"
                >
                  &rdquo;
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                <span className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                  Emmanuel Omodiale
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
