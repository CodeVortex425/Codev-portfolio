import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast'; 
import { useIntersectionObserver } from '../utils/scroll'; 
import Footer from '../footer/page';

function ContactInfo({ icon, title, content, href }) {
  const contentElement = href ? (
    <a href={href} className="text-black/80 hover:text-black transition-colors">
      {content}
    </a>
  ) : (
    <p className="text-black/80">{content}</p>
  );

  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-sm text-black/70">{title}</h3>
        {contentElement}
      </div>
    </div>
  );
}

export default function Contact() {
  const [isVisible, ref] = useIntersectionObserver();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });

        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1500);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-padding bg-white/30 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
    >
      <div className="container pt-38">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-700">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-black/20 mx-auto mt-6"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full rounded-md border border-input border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-muted-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${errors.name ? 'border-destructive' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full rounded-md border border-input border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-muted-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${errors.email ? 'border-destructive' : ''}`}
                  placeholder="Your email"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`block w-full rounded-md border border-input border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-muted-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] resize-y ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Your message"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-black text-gray-100 px-6 py-3 text-sm font-medium transition-all hover:scale-105 active:scale-95 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <Check className="mr-2" size={16} />
                    Sent Successfully
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2" size={16} />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6 mb-12">
              <ContactInfo
                icon={<Mail size={18} />}
                title="Email"
                content="samamani100@gmail.com"
                href="mailto:samamani100@gmail.com"
              />
              <ContactInfo
                icon={<Phone size={18} />}
                title="Phone"
                content="+255 613 856 425"
                href="tel:+255613856425"
              />
              <ContactInfo
                icon={<MapPin size={18} />}
                title="Location"
                content="Arusha, Tanzania"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6">Follow Me</h3>

            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-black hover:text-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-black hover:text-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-black hover:text-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
