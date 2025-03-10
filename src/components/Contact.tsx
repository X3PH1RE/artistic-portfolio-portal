import { useState, useRef, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.',
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 2000);
  };
  
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="reveal stagger-1">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-portfolio-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent text-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-portfolio-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-portfolio-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent text-white resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-white text-portfolio-black font-medium rounded-md hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.03]"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="reveal stagger-2">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-dark-gray flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:gopikrishnan@example.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    gopikrishnan@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-dark-gray flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-dark-gray flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-300">
                    Kerala, India
                  </p>
                </div>
              </div>
              
              <div className="pt-6 mt-8 border-t border-gray-700">
                <h4 className="text-lg font-medium mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-portfolio-dark-gray flex items-center justify-center hover:bg-white hover:text-portfolio-black transition-all duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-portfolio-dark-gray flex items-center justify-center hover:bg-white hover:text-portfolio-black transition-all duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-portfolio-dark-gray flex items-center justify-center hover:bg-white hover:text-portfolio-black transition-all duration-300"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
