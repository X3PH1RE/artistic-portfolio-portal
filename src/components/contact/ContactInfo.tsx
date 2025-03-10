
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
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
              href="tel:+919495534922" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              +91 9495534922
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
              href="https://www.linkedin.com/in/tivedesigns/" 
              className="w-10 h-10 rounded-full bg-portfolio-dark-gray flex items-center justify-center hover:bg-white hover:text-portfolio-black transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.instagram.com/g2uuee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
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
  );
};

export default ContactInfo;
