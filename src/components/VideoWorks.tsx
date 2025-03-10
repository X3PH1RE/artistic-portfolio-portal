
import { useState, useEffect, useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoWork {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

const videoWorks: VideoWork[] = [
  {
    id: 1,
    title: "Brand Campaign",
    description: "Corporate brand storytelling with cinematic elements",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://drive.google.com/file/d/1fJ0_90jIcljMAeTXlIcH5URU_-jcZJLp/preview",
    category: "Commercial"
  },
  {
    id: 2,
    title: "Product Showcase",
    description: "Elegant product reveal with dynamic transitions",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://drive.google.com/file/d/1fJ0_90jIcljMAeTXlIcH5URU_-jcZJLp/preview",
    category: "Product"
  },
  {
    id: 3,
    title: "Motion Graphics",
    description: "Abstract motion graphics for digital platforms",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://drive.google.com/file/d/1fJ0_90jIcljMAeTXlIcH5URU_-jcZJLp/preview",
    category: "Animation"
  },
  {
    id: 4,
    title: "Event Highlight",
    description: "Fast-paced event recap with energetic editing",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://drive.google.com/file/d/1fJ0_90jIcljMAeTXlIcH5URU_-jcZJLp/preview",
    category: "Event"
  }
];

const VideoWorks = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleVideoHover = (id: number) => {
    setActiveVideo(id);
  };

  const handleVideoLeave = () => {
    setActiveVideo(null);
  };

  return (
    <section id="videos" ref={sectionRef} className="section-padding bg-portfolio-light-gray">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl mx-auto text-center reveal">
          <span className="inline-block mb-4 text-xs tracking-wider uppercase text-portfolio-muted py-1 px-3 border border-portfolio-muted/20 rounded-full">
            Video Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cinematic Storytelling
          </h2>
          <p className="text-portfolio-gray text-lg">
            A collection of video editing projects showcasing narrative techniques, motion graphics, and visual storytelling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {videoWorks.map((work, index) => (
            <div
              key={work.id}
              ref={el => (itemRefs.current[index] = el)}
              className="video-item rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white reveal"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
              onMouseEnter={() => handleVideoHover(work.id)}
              onMouseLeave={handleVideoLeave}
            >
              <div className="relative aspect-video overflow-hidden">
                {activeVideo === work.id ? (
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src={`${work.videoUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                    allow="autoplay"
                    frameBorder="0"
                    style={{ pointerEvents: 'none' }}
                  ></iframe>
                ) : (
                  <img 
                    src={work.thumbnail} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                )}
                
                <div className={`video-overlay ${activeVideo === work.id ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="rounded-full bg-white/30 backdrop-blur-sm p-4">
                    <Play size={24} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-portfolio-accent uppercase tracking-wider">
                    {work.category}
                  </span>
                  <a 
                    href="#" 
                    className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{work.title}</h3>
                <p className="text-portfolio-gray text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoWorks;
