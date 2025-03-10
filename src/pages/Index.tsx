
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoWorks from '@/components/VideoWorks';
import PhotoWorks from '@/components/PhotoWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  
  useEffect(() => {
    // Add animation classes on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call once on load
    
    // Custom cursor
    const onMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).classList.contains('video-item')) {
        setCursorEnlarged(true);
      } else {
        setCursorEnlarged(false);
      }
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);
  
  return (
    <div className="relative overflow-x-hidden">
      {/* Custom cursor (visible only on larger screens) */}
      <div
        className="custom-cursor hidden md:block bg-portfolio-black mix-blend-difference"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          width: cursorEnlarged ? '50px' : '16px',
          height: cursorEnlarged ? '50px' : '16px',
        }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <VideoWorks />
        <PhotoWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
