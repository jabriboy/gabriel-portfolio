import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Federal University of Technology",
      period: "2018 - 2022",
      description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
      type: "degree"
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Tech Academy",
      period: "2022",
      description: "Intensive 6-month program covering modern web development technologies and best practices.",
      type: "bootcamp"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Python Professional Certificate",
      issuer: "Python Institute",
      year: "2022",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Agile Project Management",
      issuer: "Scrum Alliance",
      year: "2022",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const courses = [
    "Advanced React Patterns",
    "Node.js Microservices",
    "Database Design & Optimization",
    "DevOps & CI/CD",
    "System Design",
    "Machine Learning Fundamentals"
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning is key to staying current in technology. 
            Here's my educational background and ongoing learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-gray-700 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Formal Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Courses */}
          <div>
            {/* Certifications */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <Award className="w-8 h-8 text-gray-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center mb-2">
                      <div className="text-gray-700 mr-2">
                        {cert.icon}
                      </div>
                      <span className="text-gray-500 text-sm">{cert.year}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Learning */}
            <div>
              <div className="flex items-center mb-8">
                <BookOpen className="w-8 h-8 text-gray-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Continuous Learning</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-gray-600 mb-6">
                  Recent courses and topics I've been exploring to stay current with industry trends:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

