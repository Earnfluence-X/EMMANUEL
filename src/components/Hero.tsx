import { useEffect, useState, useMemo } from 'react';
import ScrollReveal from './ScrollReveal';

const titles = [
  'Networking & Cybersecurity Professional',
  'Web Developer',
  'Youth Leader',
  'Privacy Engineer',
  'Digital Innovator',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.slice(0, displayText.length - 1)
            : currentTitle.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const particles = useMemo(() => (
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 15,
      size: 2 + Math.random() * 3,
    }))
  ), []);

  const lightRays = useMemo(() => (
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      rotation: i * 30,
      delay: i * 0.5,
    }))
  ), []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
      aria-label="Hero section"
    >
      {/* Background Blobs - Parallax Layer (slowest) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-1" style={{ top: '-10%', left: '-5%' }} />
        <div className="blob blob-2" style={{ top: '20%', right: '-10%' }} />
        <div className="blob blob-3" style={{ bottom: '-5%', left: '30%' }} />
        <div className="blob blob-4" style={{ bottom: '20%', right: '20%' }} />
      </div>

      {/* Light Rays */}
      <div className="light-rays" aria-hidden="true">
        {lightRays.map((ray) => (
          <div
            key={ray.id}
            className="light-ray"
            style={{
              transform: `translate(-50%, -100%) rotate(${ray.rotation}deg)`,
              animationDelay: `${ray.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              bottom: '-10px',
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              background: `rgba(124, 58, 237, ${0.15 + Math.random() * 0.25})`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="gradient-text">Emmanuel</span>
            <br />
            <span className="gradient-text">Omodiale</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-secondary)] mb-8 min-h-[2em]">
            <span>{displayText}</span>
            <span className="typing-cursor" aria-hidden="true" />
            <span className="sr-only">
              {titles[titleIndex]}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={4}>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed italic">
            "I don't wait for opportunities. I build platforms, communities, and ideas that create value and influence culture."
          </p>
        </ScrollReveal>

        <ScrollReveal delay={6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleScroll('#projects')}
              className="cta-primary"
              aria-label="View my work section"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              View My Work
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="cta-secondary"
              aria-label="Get in touch section"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get In Touch
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
