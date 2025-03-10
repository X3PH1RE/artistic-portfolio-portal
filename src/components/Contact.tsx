
import { useRef } from 'react';
import ContactInfo from './contact/ContactInfo';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useIntersectionObserver(sectionRef);
  
  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-portfolio-black text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-portfolio-black to-portfolio-dark-gray opacity-20"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-portfolio-accent opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center reveal">
          <span className="inline-block mb-4 text-xs tracking-wider uppercase text-gray-400 py-1 px-3 border border-gray-700 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg">
            Have a project in mind? I'd love to help bring your vision to life.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
