import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const awordIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>

  const education = [
    {
      degree: "Bachelor's in Computer Engineering",
      institution: "Senai CIMATEC",
      period: "2020 - Present",
      description: "Focused on software engineering, algorithms, and data structures. Gaining experience in building scalable solutions to complex problems.",
      type: "degree"
    },
    {
      degree: "Dev. Full-Stack",
      institution: "Infinity School",
      period: "2022 - 2023",
      description: "Intensive 15-month program covering modern web development technologies and best practices.",
      type: "Course"
    },
    {
      degree: "Santander Bootcamp - Backend Java",
      institution: "DIO",
      period: "2023",
      description: "Intensive 2-month program distributed by Santander about backend development using Java and Spring Boot.",
      type: "Bootcamp"
    },
    {
      degree: "Backend Flask",
      institution: "Infinity School",
      period: "2023",
      description: "Intensive 2-month backend development program using Python and Flask, covering API design, databases, and deployment.",
      type: "Course"
    }
  ];

  const certifications = [
    {
      name: "Dev. FullStack",
      issuer: "Infinity School",
      year: "2023",
      icon: awordIcon
    },
    {
      name: "Backend Flask",
      issuer: "Infinity School",
      year: "2023",
      icon: awordIcon
    },
    {
      name: "Backend Java + Spring Boot",
      issuer: "DIO",
      year: "2023",
      icon: awordIcon
    }
  ];

  return (
    <section id="education" className="py-20 bg-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education & Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is key to staying current in technology. 
            Here's my educational background and ongoing learning journey.
          </p>
        </div>

        <div>
          {/* Formal Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Formal Education</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-h-fit min-h-full"
                >
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Courses */}
          <div>
            {/* Certifications */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center mb-2">
                      <div className="text-muted-foreground mr-2">
                        {cert.icon}
                      </div>
                      <span className="text-muted-foreground text-sm">{cert.year}</span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
