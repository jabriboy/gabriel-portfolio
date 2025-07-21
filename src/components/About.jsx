import React from 'react';
import { Code, Coffee, Globe, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code Advocate",
      description: "Passionate about writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Expertise",
      description: "Experienced in both frontend and backend development, creating seamless end-to-end solutions."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding elegant solutions through creative thinking and persistence."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Focused",
      description: "Always prioritizing user experience and creating applications that are intuitive and accessible."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Hi! I'm Gabriel Rocha, a passionate FullStack Developer with a love for creating 
                digital experiences that make a difference. With expertise in modern web technologies, 
                I specialize in building scalable applications using TypeScript, React, Node.js, and Python.
              </p>
              
              <p>
                My journey in software development started with a curiosity about how things work 
                behind the scenes. This curiosity has evolved into a career where I get to solve 
                complex problems, learn new technologies, and create solutions that impact users' lives.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md text-gray-700">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

