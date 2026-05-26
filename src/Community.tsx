import ScrollReveal from './ScrollReveal';

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Faith-Driven Leadership',
    quote: '"Leading with purpose, serving with love — empowering the next generation to find their identity in Christ."',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Community Building',
    quote: '"Technology should connect hearts, not just devices. Building platforms where loneliness meets purpose."',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Youth Empowerment',
    quote: '"Every young person deserves a platform to shine. We don\u2019t just build tools — we build people."',
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(249,115,22,0.03) 50%, var(--bg-primary) 100%)' }}
      aria-label="Community and Faith"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-4" style={{ top: '-10%', right: '-10%', width: 400, height: 400, background: 'rgba(249,115,22,0.06)' }} />
        <div className="blob blob-2" style={{ bottom: '-10%', left: '-5%', width: 350, height: 350, background: 'rgba(236,72,153,0.05)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(236,72,153,0.1))', color: '#f97316' }}>
              Community & Faith
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
              Built on <span className="gradient-text-warm">Purpose</span>
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
              Rooted in faith, driven by impact. Serving through RCCG youth programmes and community-building initiatives.
            </p>
          </div>
        </ScrollReveal>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i + 1}>
              <div className="glass-card p-8 text-center h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(236,72,153,0.1))' }}
                >
                  <span className="text-[#f97316]">{v.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">{v.title}</h3>
                <p className="text-[var(--text-secondary)] italic leading-relaxed text-sm">{v.quote}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Photo Grid Placeholder */}
        <ScrollReveal delay={4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Youth Conference', 'Community Outreach', 'Leadership Workshop', 'Fellowship Night'].map((label) => (
              <div
                key={label}
                className="aspect-square rounded-2xl glass-card flex items-center justify-center p-4"
                role="img"
                aria-label={`${label} photo placeholder`}
              >
                <div className="text-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--text-muted)"
                    strokeWidth="1.5"
                    className="mx-auto mb-2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-xs text-[var(--text-muted)] font-medium">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Testimonial Placeholder */}
        <ScrollReveal delay={6}>
          <div className="mt-16 glass-card p-8 sm:p-10 max-w-3xl mx-auto text-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4 text-[var(--text-muted)]" aria-hidden="true">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" opacity="0.2" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" opacity="0.2" />
            </svg>
            <p className="text-[var(--text-secondary)] italic leading-relaxed mb-4">
              "Emmanuel's ability to blend technical expertise with genuine care for people is truly remarkable. 
              His work in youth leadership and community building has impacted countless lives."
            </p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">— Community Partner</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
