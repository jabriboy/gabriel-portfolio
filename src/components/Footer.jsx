import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray-background text-muted py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold">Gabriel Rocha</h3>
            <p className="text-text-muted-foreground mt-2">FullStack Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Portfolio', href: '#portfolio' },
              { name: 'Technology', href: '#technology' },
              { name: 'About', href: '#about' },
              { name: 'Education', href: '#education' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-text-muted-foreground hover:text-text transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-text-muted-foreground pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-text-muted-foreground text-sm mb-4 sm:mb-0">
                © {currentYear} Gabriel Rocha. All rights reserved.
              </p>
              
              <div className="flex items-center text-text-muted-foreground text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-600" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
