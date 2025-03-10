
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#f8f8f8] opacity-50"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-portfolio-accent opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-portfolio-black opacity-5 blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container mx-auto max-w-5xl relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-center text-center opacity-0" ref={headingRef} style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
          <span className="inline-block mb-4 text-xs md:text-sm tracking-wider uppercase text-portfolio-muted py-1 px-3 border border-portfolio-muted/20 rounded-full">
            Graphic Designer & Video Editor
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-tight lg:leading-tight mb-6 font-bold max-w-4xl">
            <span className="block">Crafting Visual</span>
            <span className="bg-gradient-to-r from-portfolio-black to-portfolio-accent clip-text">
              Storytelling
            </span> 
            <span className="block">& Designs</span>
          </h1>
          <p ref={paragraphRef} className="text-lg md:text-xl text-portfolio-gray max-w-3xl mb-10 opacity-0" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            Hi, I'm Gopikrishnan P R. I create compelling visual narratives through video editing and graphic design that engage audiences and elevate brands.
          </p>
          <div className="flex space-x-4 mt-2 opacity-0 animate-fade-in" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
            <a 
              href="#videos" 
              className="px-6 py-3 rounded-md bg-portfolio-black text-white font-medium hover:bg-portfolio-dark-gray transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-xl"
            >
              Explore Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md border border-portfolio-black text-portfolio-black font-medium hover:bg-portfolio-black hover:text-white transition-all duration-300 transform hover:scale-[1.03]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#videos" className="flex flex-col items-center text-portfolio-gray hover:text-portfolio-accent transition-colors duration-300">
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
