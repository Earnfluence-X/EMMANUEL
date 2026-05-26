import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const socials = [
  {
    name: 'GitHub',
    url: '#',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    url: '#',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:emmanuel@example.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-label="Contact"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(59,130,246,0.08) 25%, rgba(20,184,166,0.06) 50%, rgba(236,72,153,0.06) 75%, rgba(249,115,22,0.08) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob blob-1" style={{ top: '-20%', left: '-15%', width: 500, height: 500 }} />
        <div className="blob blob-2" style={{ bottom: '-15%', right: '-10%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Let&apos;s Build Something <span className="gradient-text">Together</span>
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto">
              Have an idea, project, or collaboration in mind? Let&apos;s connect and create something meaningful.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal delay={1}>
            <div className="glass-card p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(59,130,246,0.15))' }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-secondary)]">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      aria-required="true"
                    />
                  </div>
                  <button type="submit" className="cta-primary w-full justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info Side */}
          <ScrollReveal delay={3}>
            <div className="space-y-8">
              {/* Location */}
              <div className="glass-card p-6 flex items-center gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center map-pin"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(59,130,246,0.1))' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">Location</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6">
                <h4 className="font-bold text-[var(--text-primary)] mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(59,130,246,0.08))',
                        color: 'var(--text-primary)',
                      }}
                      aria-label={`Connect on ${social.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="glass-card p-6">
                <h4 className="font-bold text-[var(--text-primary)] mb-2">Stay Updated</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Get notified about new projects, tools, and insights.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="newsletter-input"
                    aria-label="Email for newsletter"
                  />
                  <button className="newsletter-btn" aria-label="Subscribe to newsletter">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <ScrollReveal delay={5}>
          <div className="mt-20 pt-8 border-t border-[var(--card-border)] text-center">
            <p className="text-sm text-[var(--text-muted)]">
              &copy; {new Date().getFullYear()} Emmanuel Omodiale. Crafted with purpose and precision.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
