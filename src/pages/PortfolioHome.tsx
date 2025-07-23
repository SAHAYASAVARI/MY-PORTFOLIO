import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Instagram, MessageCircle, ExternalLink, Code, Brain, Palette, Target, MapPin, Calendar, GraduationCap, Award, Mail, Phone, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { ParticleBackground } from '../components/ParticleBackground';
import ReCAPTCHA from 'react-google-recaptcha';
import { Captcha } from '../components/ui/captcha';
import { CopyrightProtection, CopyrightFooter } from '../components/CopyrightProtection';
// Import your profile image
import profileImage from '../assets/SAHAYASAVARI F.jpg';
// Import your resume
import resumeFile from '../assets/SAHAYA SAVARI RESUME FINAL.pdf';


export function PortfolioHome() {
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SAHAYASAVARI', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sahayasavari', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/_itz_me_santhoz', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/916385648514', label: 'WhatsApp' },
  ];

  const skills = {
    technical: [
      { name: 'Python', level: 85 },
      { name: 'C/C++', level: 70 },
      { name: 'Java', level: 75 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'Data Analysis', level: 75 },
      { name: 'Coding', level: 70 }
    ],
    tools: [
      'Power BI', 'Excel', 'Eclipse', 'Weka', 'Google Colab', 'R-Studio'
    ],
    soft: [
      'Communication', 'Team Collaboration', 'Adaptability', 'Problem-Solving'
    ]
  };

  const projects = [
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization using Power BI and Python',
      tech: ['Python', 'Power BI', 'Data Analysis'],
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#'
    },
    {
      title: 'ML Prediction Model',
      description: 'Machine learning model for predictive analysis using various algorithms',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#'
    },
    {
      title: 'Web Portfolio',
      description: 'Responsive portfolio website with modern design and animations',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#'
    }
  ];

  const education = [
    {
      degree: 'B.Sc Data Science',
      institution: 'Thiagarajar College of Arts and Science',
      duration: '2022 - 2025',
      percentage: '65.3%'
    },
    {
      degree: 'Higher Secondary in Bio-Maths',
      institution: "St.Mary's Higher Secondary School",
      duration: '2021 - 2022',
      percentage: '78.33%'
    },
    {
      degree: 'High School',
      institution: "St.Mary's Higher Secondary School",
      duration: '2019 - 2020',
      percentage: '85%'
    }
  ];

  const certifications = [
    'IBM Data Analyst course - Coursera',
    "Honor's Diploma in Information Technology - CCE Computer Education",
    'Mastering Excel Data Analysis & Dashboard Reporting - UDEMY'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if CAPTCHA is completed
    const captchaValue = recaptchaRef.current?.getValue();
    if (!captchaValue) {
      toast({
        title: "Please complete the CAPTCHA",
        description: "Please verify that you are not a robot.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Option 1: Simple frontend-only validation (current implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Option 2: Send to backend for verification (uncomment when backend is ready)
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken: captchaValue
        })
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }
      */

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      recaptchaRef.current?.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Enhanced scroll behavior for better mobile support
      const offsetTop = element.offsetTop - 80; // Account for any fixed headers
      window.scrollTo({ 
        top: offsetTop, 
        behavior: 'smooth' 
      });
      
      // Alternative method for better mobile compatibility
      if (!window.scrollTo || window.scrollTo.toString().indexOf('[native code]') === -1) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-8 pt-20 relative overflow-hidden">
        <ParticleBackground />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                SAHAYA SAVARI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium"
            >
              Data Science Student & Future AI Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about transforming complex data into actionable insights and developing intelligent systems. 
              Currently pursuing B.Sc Data Science, with expertise in Python, Machine Learning, and Data Analytics. 
              Ready to contribute to innovative AI solutions that shape the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 glow-effect"
              >
                View Projects
              </Button>
              
              <Button asChild variant="outline" className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground bg-background/90 dark:bg-background/90 dark:text-foreground">
                <a href={resumeFile} download="Sahaya_Savari_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full glass-card hover:glow-effect transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2 lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Enhanced profile image container with improved styling */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden glass-card glow-effect animate-float relative bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                {/* Enhanced gradient border with better visual appeal */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-200 p-1">
                    {/* Main image container with enhanced styling */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-background relative shadow-inner">
                      <img
                        src={profileImage}
                        alt="Sahaya Savari F - Data Science & AI Student"
                        className="w-full h-full object-cover object-center profile-image-enhanced transition-all duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Enhanced fallback with avatar initials
                          console.log('Profile image failed to load, using fallback');
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          // Create a fallback div with initials
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-primary-foreground text-6xl font-bold';
                          fallback.textContent = 'SS';
                          img.parentNode?.appendChild(fallback);
                        }}
                        onLoad={() => {
                          console.log('Profile image loaded successfully');
                        }}
                      />
                      
                      {/* Subtle overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Professional badge/indicator */}
                <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Data Scientist
                </div>
              </div>
              
              {/* Enhanced decorative elements with better responsiveness */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-32 h-32 sm:w-40 sm:h-40 border-2 border-primary/20 rounded-full opacity-30 hidden sm:block group-hover:border-primary/40 group-hover:opacity-50 transition-all duration-300"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-28 h-28 sm:w-36 sm:h-36 border border-primary/15 rounded-full opacity-20 hidden sm:block group-hover:border-primary/30 group-hover:opacity-40 transition-all duration-300"
              />
              
              {/* Additional floating elements for visual appeal */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 0.5
                }}
                className="absolute top-8 left-8 w-2 h-2 bg-primary rounded-full hidden lg:block"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: 1
                }}
                className="absolute bottom-12 right-12 w-3 h-3 bg-secondary rounded-full hidden lg:block"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground cursor-pointer touch-manipulation"
            onClick={() => scrollToSection('about')}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span className="text-xs sm:text-sm mb-2 select-none">Scroll to explore</span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-200"
            >
              <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 bg-dot-pattern">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate data science student from Madurai, Tamil Nadu, dedicated to learning and innovation
            </p>
          </motion.div>

          {/* Education */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{edu.duration}</span>
                        <Badge variant="secondary">{edu.percentage}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-4">
                      <p className="text-sm">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  Location
                </h4>
                <p className="text-muted-foreground">Madurai, Tamil Nadu</p>
              </div>
            </motion.div>
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.soft.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-4 bg-muted/30 bg-mesh-gradient">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Software */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Tools & Software</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-4 text-center hover:glow-effect transition-all duration-300"
                  >
                    <span className="font-medium">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4 bg-dot-pattern">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my work in data science and web development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-card h-full hover:glow-effect transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild size="sm" variant="outline">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button asChild size="sm">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-muted/30 bg-mesh-gradient">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Sharing insights about data science and AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Getting Started with Machine Learning",
                excerpt: "A beginner's guide to understanding the fundamentals of machine learning and its applications in real-world scenarios.",
                readTime: "5 min read",
                date: "Dec 15, 2024"
              },
              {
                title: "Data Visualization Best Practices",
                excerpt: "Learn how to create compelling and informative data visualizations that tell a story and drive insights.",
                readTime: "7 min read",
                date: "Dec 10, 2024"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-card h-full hover:glow-effect transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{article.readTime}</Badge>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group">
                      Read More
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden">
        <ParticleBackground />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss opportunities in data science and AI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span>sahayasavari@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span>+91 63856-48514</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span>Madurai, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 rounded-full glass-card hover:glow-effect transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5 text-primary" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Send Message</CardTitle>
                  <CardDescription>
                    I'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className={`space-y-6 ${isSubmitting ? 'form-loading' : ''}`}>
                    <div>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                        className="bg-background/70 dark:bg-background/70 border-border/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        disabled={isSubmitting}
                        className="bg-background/70 dark:bg-background/70 border-border/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="bg-background/70 dark:bg-background/70 border-border/50"
                      />
                    </div>
                    
                    {/* reCAPTCHA */}
                    <Captcha
                      ref={recaptchaRef}
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeRrIwrAAAAAM_GgcdtCENdXDgz0gT46sjRW63f"}
                    />
                    
                    <motion.div
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 touch-manipulation"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Copyright Protection & Footer */}
      <CopyrightProtection />
      <CopyrightFooter />
    </div>
  );
}