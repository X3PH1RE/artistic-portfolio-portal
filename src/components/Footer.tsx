
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 bg-portfolio-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Gopikrishnan P R. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors text-sm"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-portfolio-dark-gray flex items-center justify-center hover:bg-white hover:text-portfolio-black transition-all duration-300"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
