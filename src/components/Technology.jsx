import React from 'react';

const Technology = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 50 }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Flask", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Database & Tools",
      technologies: [
        { name: "Firebase", level: 90 },
        { name: "Oracle", level: 90 },
        { name: "Vercel", level: 80 },
        { name: "Hostinger", level: 80 },
        { name: "ClickUp", level: 75 },
      ]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life, 
            from frontend interfaces to backend systems.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">
                        {tech.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {tech.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Agile/Scrum",
              "Test-Driven Development",
              "Microservices",
              "Software Architecture",
              "Design Patterns",
              "Fluent English",
              "Intermediate Spanish",
              "Native Portuguese",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-card text-foreground rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
