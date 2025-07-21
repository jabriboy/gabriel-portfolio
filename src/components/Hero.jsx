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
      className="min-h-screen flex items-center justify-center bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-2 w-48 h-48 mx-auto rounded-full overflow-hidden">
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
              href="https://github.com/jabriboy"
              target='_blank'
              className="p-3 rounded-full bg-muted shadow-md hover:shadow-lg transition duration-300 text-muted-foreground hover:text-primary transform hover:scale-105"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-rocha-831a2b215/"
              target='_blank'
              className="p-3 rounded-full bg-muted shadow-md hover:shadow-lg transition duration-300 text-muted-foreground hover:text-primary transform hover:scale-105"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jabrirocha@gmail.com&su=Assunto%20da%20Mensagem&body=Olá,%20gostaria%20de%20entrar%20em%20contato."
              target='_blank'
              className="p-3 rounded-full bg-muted shadow-md hover:shadow-lg transition duration-300 text-muted-foreground hover:text-primary transform hover:scale-105"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToPortfolio}
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full hover:brightness-90 text-lg font-medium transform transition-transform duration-300 hover:scale-102 cursor-pointer"
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
