import { useEffect, useRef } from 'react';
import { AccessibilityProvider } from './context/AccessibilityContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoIAm from './components/WhoIAm';
import Projects from './components/Projects';
import ToolsGrid from './components/ToolsGrid';
import Certifications from './components/Certifications';
import Community from './components/Community';
import CurrentFocus from './components/CurrentFocus';
import Contact from './components/Contact';
import AccessibilityPanel from './components/AccessibilityPanel';
import CursorEffect from './components/CursorEffect';

function ParallaxManager({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const blobs = document.querySelectorAll('.blob');
      const scrollY = window.scrollY;
      
      blobs.forEach((blob, i) => {
        const speed = 0.03 + (i % 3) * 0.015;
        const direction = i % 2 === 0 ? 1 : -1;
        (blob as HTMLElement).style.transform = `translateY(${scrollY * speed * direction}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

export default function App() {
  return (
    <AccessibilityProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <CursorEffect />
      <Navigation />
      
      <main id="main-content" role="main">
        <ParallaxManager>
          <Hero />
          <WhoIAm />
          <Projects />
          <ToolsGrid />
          <Certifications />
          <Community />
          <CurrentFocus />
          <Contact />
        </ParallaxManager>
      </main>

      <AccessibilityPanel />
    </AccessibilityProvider>
  );
}
