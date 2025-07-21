import React from 'react';
import photo from '../assets/foto-perfil-editado.jpg';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="max-h-screen flex items-center justify-center bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mt-8 mb-2 w-48 h-48 mx-auto rounded-full overflow-hidden">
            <img
              src={photo}
              alt="my-photo"
              className="w-full h-full object-cover scale-125"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-5xl font-bold mb-2">
            Gabriel Rocha
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-2xl font-light text-foreground mb-2">
            FullStack Developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Building scalable apps with TypeScript, React, Node & Python
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="#"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition duration-300 text-muted-foreground hover:text-foreground"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition duration-300 text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition duration-300 text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToPortfolio}
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:brightness-90 transition duration-300 text-lg font-medium"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
