import ScrollReveal from './ScrollReveal';

const tools = [
  {
    name: 'Security Headers Checker',
    desc: 'Audits HTTP security headers with server config snippets',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    name: 'Email Spoofing Test',
    desc: 'Analyzes SPF, DKIM, DMARC records with risk scoring',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    name: 'GDPR Scanner',
    desc: 'Checks cookie banners, privacy policies, returns compliance score',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'MetaStripper',
    desc: 'EXIF remover, client-side batch processing with GPS preview',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    name: 'SSLSpy',
    desc: 'SSL/TLS certificate inspector with A–F grading',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    name: 'EnviroScan',
    desc: 'Secrets scanner for GitHub repos and pasted code',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'URL & Email Threat Analyzer',
    desc: 'Phishing detection with typo-squatting analysis',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    name: 'Sensitive Data Discovery',
    desc: 'Finds exposed PII and credentials in files',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    name: 'PolicyForge',
    desc: 'Custom security policy generator with markdown/HTML/PDF export',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6" />
        <path d="M8 18v-1" />
        <path d="M16 18v-3" />
      </svg>
    ),
  },
];

export default function ToolsGrid() {
  return (
    <section
      id="tools"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--section-bg-alt)' }}
      aria-label="Security and Privacy Tools"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-3" style={{ top: '5%', right: '-15%' }} />
        <div className="blob blob-1" style={{ bottom: '5%', left: '-10%', width: 300, height: 300 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">Security Tools</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
              Security & Privacy <span className="gradient-text">Toolkit</span>
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
              Building for a safer internet — free, open-source tools to audit, analyze, and protect digital assets.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={Math.min(i + 1, 8)}>
              <div
                className="glass-card tool-card p-6 h-full flex flex-col"
                role="article"
                aria-label={tool.name}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(59,130,246,0.1))' }}
                  >
                    <span className="text-[#7c3aed]">{tool.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] text-sm sm:text-base">
                      {tool.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">
                  {tool.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7c3aed] hover:gap-2.5 transition-all duration-300"
                  aria-label={`Try ${tool.name}`}
                >
                  Try It
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
