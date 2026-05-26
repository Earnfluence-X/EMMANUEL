import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'SYNQ',
    tag: 'Privacy-First',
    tagColor: 'from-purple-500 to-blue-500',
    description: 'A web-based chat application that creates ephemeral, private rooms for communication that leaves no trace. No logs, no tracking — just secure, real-time messaging that disappears after use.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#lock-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="lock-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    iconClass: 'pulse-glow',
    link: '#',
  },
  {
    title: 'Earnfluence-X',
    subtitle: 'Founded Feb 2026',
    tag: 'Digital Economy',
    tagColor: 'from-orange-500 to-pink-500',
    description: 'A youth-centered digital initiative that helps creators and small brands monetise their influence intelligently. Combines digital strategy, content creation, and community building.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#trend-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="trend-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    iconClass: 'sparkle',
    link: '#',
  },
  {
    title: 'The Overflow App',
    tag: 'Faith & Community',
    tagColor: 'from-teal-500 to-purple-500',
    description: 'A Christian social platform where teens and young believers connect, grow in faith, share testimonies, and access community-driven content. Built to counter loneliness with purpose-driven connection.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#heart-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    iconClass: 'soft-glow',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
      aria-label="Flagship Projects"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-1" style={{ top: '-20%', right: '-15%' }} />
        <div className="blob blob-4" style={{ bottom: '-10%', left: '-10%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
              Flagship <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
              Building innovative solutions at the intersection of privacy, community, and digital empowerment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i + 1}>
              <div className="glass-card tilt-card p-8 h-full flex flex-col group cursor-pointer"
                   role="article"
                   aria-label={`${project.title} project`}>
                {/* Tag */}
                <div className="mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.tagColor}`}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className={`mb-5 ${project.iconClass}`}>
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-[var(--text-muted)] mb-4">{project.subtitle}</p>
                )}

                {/* Description */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#7c3aed] hover:gap-3 transition-all duration-300"
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
