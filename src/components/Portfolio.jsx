import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import kyrios from '../assets/kyrios-img.png'
import flechaServicos from '../assets/flecha-servicos-img.png'
import stop from '../assets/stop-img.png'
import whisper from '../assets/whisper-img.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "SaaS Platform - Kyrios",
      description: "Full-stack SaaS platform for managing a digital cash journal, tailored for small businesses and nonprofit organizations. The application includes secure user authentication, subscription-based access with multiple pricing tiers, and integrated payment processing. Designed to simplify financial tracking and improve accountability, especially for organizations in the third sector.",
      technologies: ["React", "Node.js", "TypeScript", "Firebase", "Stripe"],
      image: kyrios,
      liveUrl: "https://www.sejakyrios.com.br",
      githubUrl: "https://github.com/jabriboy/Kyrios"
    },
    {
      id: 2,
      title: "Landing Page - Flecha Serviços",
      description: "Landing page designed and developed for an independent electrician to enhance his online presence. The page improves credibility by showcasing his services, contact information, and customer testimonials in a clean and professional layout.",
      technologies: ["React", "JavaScript"],
      image: flechaServicos,
      liveUrl: "https://flechaservicos.com.br/",
      githubUrl: "https://github.com/jabriboy/flechaServicos"
    },
    {
      id: 3,
      title: "Letter Generator - Stop",
      description: "A responsive web application built to modernize the classic paper-and-pencil game Stop. In the traditional version, players often choose letters by counting on their fingers, which can result in repeated letters and confusion. This app ensures a randomized, non-repeating letter selection that is instantly visible to all players, making the game faster, fairer, and more fun.",
      technologies: ["React", "JavaScript"],
      image: stop,
      liveUrl: "https://stop-eta.vercel.app/",
      githubUrl: "https://github.com/jabriboy/LetterGenerator"
    },
    {
      id: 4,
      title: "Whisper - Whatsapp Clone",
      description: "Real-time chat application developed as part of a college course focused on full-stack development with C# and .NET. The platform allows multiple users to communicate through separate accounts in real time, simulating a functional messaging environment.",
      technologies: ["C#", ".NET", "React", "JavaScript"],
      image: whisper,
      liveUrl: "#",
      githubUrl: "https://github.com/jabriboy/projetoFinal-lp3.Interface"
    }
  ];

  return (
    <section id="portfolio" className="py-20" style={{ backgroundColor: `rgb(255, 255, 255)` }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: `rgb(17, 24, 39)` }}>
            Portfolio
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgb(107, 114, 128)` }}>
            A collection of projects that showcase my skills in full-stack development,
            from concept to deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              style={{
                backgroundColor: `rgb(255, 255, 255)`,
                border: `1px solid rgb(229, 231, 235)`
              }}
            >
              {/* Project Image */}
              <div
                className="min-h-fit flex items-center justify-center"
                style={{
                  background: `linear-gradient(to bottom right, rgb(243, 244, 246), rgb(229, 231, 235))`
                }}
              >
                <img src={project.image} alt="project image" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: `rgb(17, 24, 39)` }}>
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-justify" style={{ color: `rgb(107, 114, 128)` }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: `rgb(243, 244, 246)`,
                        color: `rgb(107, 114, 128)`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.liveUrl != "#" 
                  ?
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    className="inline-flex items-center px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium bg-dark-gray-background"
                    style={{
                      color: `white`
                    }}
                    >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  : <></>}
                  
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    className="inline-flex items-center px-4 py-2 border rounded-lg transition-colors duration-200 text-sm font-medium"
                    style={{
                      borderColor: `rgb(229, 231, 235)`,
                      color: `rgb(17, 24, 39)`
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
