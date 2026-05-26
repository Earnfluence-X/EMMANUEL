import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const skills = [
  {
    name: 'Cisco Certified – Networking & Cybersecurity',
    level: 92,
    color: 'from-purple-500 to-blue-500',
  },
  {
    name: 'Full-Stack Web Development (Security-First)',
    level: 87,
    color: 'from-blue-500 to-teal-500',
  },
  {
    name: 'Privacy Engineering & Client-Side Security Tools',
    level: 90,
    color: 'from-teal-500 to-green-500',
  },
  {
    name: 'Content Strategy, Digital Branding & Youth Leadership',
    level: 85,
    color: 'from-orange-500 to-pink-500',
  },
];

const timeline = [
  { year: '2024', title: 'Cisco Certification', desc: 'Networking & Cybersecurity professional certification' },
  { year: '2025', title: 'Full-Stack Development', desc: 'Security-first web applications and tools' },
  { year: 'Feb 2026', title: 'Earnfluence-X Launch', desc: 'Digital economy platform for youth creators' },
  { year: '2026', title: 'Open-Source Security Tools', desc: 'Building free privacy and security tooling' },
];

function AnimatedBar({ level, color, isVisible }: { level: number; color: string; isVisible: boolean }) {
  return (
    <div className="w-full h-3 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden">
      <div
        className={`progress-bar-fill bg-gradient-to-r ${color}`}
        style={{ width: isVisible ? `${level}%` : '0%' }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}

function CountUp({ target, isVisible }: { target: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return <span>{count}%</span>;
}

export default function Certifications() {
  const [barsVisible, setBarsVisible] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
      aria-label="Certifications and Technical Strengths"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-2" style={{ top: '0%', left: '-10%' }} />
        <div className="blob blob-4" style={{ bottom: '0%', right: '-10%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-4">
              Certifications & <span className="gradient-text">Strengths</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skill Bars */}
          <ScrollReveal delay={1}>
            <div ref={barsRef} className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{skill.name}</span>
                    <span className="text-sm font-bold gradient-text">
                      <CountUp target={skill.level} isVisible={barsVisible} />
                    </span>
                  </div>
                  <AnimatedBar level={skill.level} color={skill.color} isVisible={barsVisible} />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal delay={3}>
            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-[19px] top-2 bottom-2 w-0.5 rounded-full"
                style={{ background: 'linear-gradient(180deg, #7c3aed, #3b82f6, #14b8a6)' }}
                aria-hidden="true"
              />

              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-5 group">
                    {/* Dot */}
                    <div className="flex-shrink-0 mt-1.5">
                      <div
                        className="w-[10px] h-[10px] rounded-full border-2 border-[#7c3aed] bg-[var(--bg-primary)] group-hover:bg-[#7c3aed] transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <span className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
