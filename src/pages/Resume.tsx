import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, ExternalLink, Calendar, Award } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Resume() {
  const education = [
    {
      degree: 'Bachelor of Science in Data Science',
      institution: 'University Name',
      location: 'Madurai, Tamil Nadu',
      period: '2023 - Present',
      gpa: '8.5/10',
      relevant: ['Machine Learning', 'Statistics', 'Python Programming', 'Data Visualization']
    }
  ];

  const experience = [
    {
      title: 'Data Science Intern',
      company: 'Tech Company',
      location: 'Remote',
      period: 'Summer 2024',
      description: [
        'Developed machine learning models for customer behavior prediction',
        'Created interactive dashboards using Python and Tableau',
        'Collaborated with cross-functional teams on data-driven projects'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      description: [
        'Built responsive websites for local businesses',
        'Implemented modern design principles and user experience best practices',
        'Maintained long-term client relationships and provided ongoing support'
      ]
    }
  ];

  const projects = [
    {
      name: 'AI Image Classification System',
      tech: 'Python, TensorFlow, OpenCV',
      description: 'Deep learning model achieving 94% accuracy on image classification tasks'
    },
    {
      name: 'Interactive Data Dashboard',
      tech: 'React, D3.js, Python Flask',
      description: 'Real-time analytics dashboard with predictive modeling capabilities'
    },
    {
      name: 'Portfolio Website',
      tech: 'React, Three.js, Framer Motion',
      description: 'Modern portfolio with 3D animations and particle effects'
    }
  ];

  const achievements = [
    'Dean\'s List for Academic Excellence (2023-2024)',
    'Winner of University Data Science Hackathon 2024',
    'Completed 50+ coding challenges on LeetCode',
    'Contributed to 3 open-source projects on GitHub'
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Download my complete resume or view the highlights below
          </p>
          
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 glow-effect text-lg px-8 py-3"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>sahayasavari@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+91 6385648514</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Madurai, Tamil Nadu</span>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
              <Award className="h-4 w-4 text-primary" />
            </div>
            Professional Summary
          </h2>
          <div className="glass-card p-6">
            <p className="text-muted-foreground leading-relaxed">
              Passionate Data Science and AI student with hands-on experience in machine learning, 
              web development, and data analysis. Proven ability to translate complex data into 
              actionable insights and create compelling visualizations. Strong foundation in Python, 
              JavaScript, and modern web technologies. Eager to contribute to innovative projects 
              that leverage AI and data science to solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
              <Award className="h-4 w-4 text-primary" />
            </div>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="text-sm font-medium">GPA: {edu.gpa}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant.map((course) => (
                      <span key={course} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
              <ExternalLink className="h-4 w-4 text-primary" />
            </div>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Key Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <span className="text-sm text-primary font-medium">{project.tech}</span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Achievements & Honors</h2>
          <div className="glass-card p-6">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <Award className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="mailto:sahayasavari@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}