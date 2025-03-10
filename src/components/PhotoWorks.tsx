
import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface PhotoWork {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const photoWorks: PhotoWork[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Minimalist design system for a tech startup",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Branding"
  },
  {
    id: 2,
    title: "Editorial Design",
    description: "Magazine layout with typography focus",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Print"
  },
  {
    id: 3,
    title: "Poster Series",
    description: "Cultural event promotional materials",
    image: "https://images.unsplash.com/photo-1592842232655-e5d345cbc2d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Advertising"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Mobile application interface",
    image: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Digital"
  },
  {
    id: 5,
    title: "Product Photography",
    description: "Minimalist product composition",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Photography"
  },
  {
    id: 6,
    title: "Social Media Kit",
    description: "Cohesive visual templates for digital marketing",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Digital"
  }
];

const PhotoWorks = () => {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const categories = ['All', ...new Set(photoWorks.map(work => work.category))];
  
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

  const filteredWorks = filter === 'All' 
    ? photoWorks 
    : photoWorks.filter(work => work.category === filter);

  return (
    <section id="photos" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl mx-auto text-center reveal">
          <span className="inline-block mb-4 text-xs tracking-wider uppercase text-portfolio-muted py-1 px-3 border border-portfolio-muted/20 rounded-full">
            Graphic Design
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Visual Creations
          </h2>
          <p className="text-portfolio-gray text-lg">
            Explore my graphic design portfolio showcasing branding, editorial, and digital creations with a focus on clean aesthetics.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal stagger-1">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-portfolio-black text-white'
                  : 'bg-portfolio-light-gray text-portfolio-gray hover:bg-portfolio-black/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              ref={el => (itemRefs.current[index + photoWorks.length] = el)}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover-scale reveal bg-white"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
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
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-portfolio-gray text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoWorks;
