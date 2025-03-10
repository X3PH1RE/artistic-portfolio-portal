
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from "sonner";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  );
};

export default ContactForm;
