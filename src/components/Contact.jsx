import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "gabriel.rocha@email.com",
      link: "mailto:gabriel.rocha@email.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "São Paulo, Brazil",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/gabrielrocha",
      color: "rgb(0, 0, 0)"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/gabrielrocha",
      color: "rgb(0, 0, 0)"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/gabrielrocha",
      color: "rgb(0, 0, 0)"
    }
  ];

  return (
    <section id="contact" style={{ backgroundColor: 'rgb(255, 255, 255)' }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 style={{ color: 'rgb(0, 0, 0)' }} className="text-4xl md:text-5xl font-bold mb-4">
            Contact Me
          </h2>
          <p style={{ color: 'rgb(102, 102, 102)' }} className="text-lg max-w-2xl mx-auto">
            Let's work together! I'm always interested in new opportunities 
            and exciting projects. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 style={{ color: 'rgb(0, 0, 0)' }} className="text-2xl font-bold mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 rounded-xl transition-colors duration-200 group"
                  style={{ backgroundColor: 'rgb(245, 245, 245)' }}
                >
                  <div
                    className="flex-shrink-0 p-3 rounded-lg shadow-md group-hover:text-black"
                    style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(102, 102, 102)' }}
                  >
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h4 style={{ color: 'rgb(0, 0, 0)' }} className="font-bold">{info.title}</h4>
                    <p style={{ color: 'rgb(102, 102, 102)' }}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 style={{ color: 'rgb(0, 0, 0)' }} className="text-xl font-bold mb-6">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-colors duration-200"
                    style={{ backgroundColor: 'rgb(245, 245, 245)', color: social.color }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ color: 'rgb(0, 0, 0)' }} className="text-2xl font-bold mb-8">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'rgb(0, 0, 0)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-colors duration-200"
                    style={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      border: '1px solid rgb(230, 230, 230)',
                      color: 'rgb(0, 0, 0)'
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'rgb(0, 0, 0)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-colors duration-200"
                    style={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      border: '1px solid rgb(230, 230, 230)',
                      color: 'rgb(0, 0, 0)'
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'rgb(0, 0, 0)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-colors duration-200"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    border: '1px solid rgb(230, 230, 230)',
                    color: 'rgb(0, 0, 0)'
                  }}
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'rgb(0, 0, 0)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg transition-colors duration-200 resize-none"
                  style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                    border: '1px solid rgb(230, 230, 230)',
                    color: 'rgb(0, 0, 0)'
                  }}
                  placeholder="Tell me about your project or how we can work together..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg transition-colors duration-300 font-medium"
                style={{
                  backgroundColor: 'rgb(0, 0, 0)',
                  color: 'rgb(255, 255, 255)'
                }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
