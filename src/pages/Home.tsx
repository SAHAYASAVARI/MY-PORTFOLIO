import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { BlogSection } from '../components/BlogSection';
import profileImage from '../assets/profile-placeholder.jpg';

export function Home() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/SAHAYASAVARI', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sahayasavari', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/_itz_me_santhoz', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/916385648514', label: 'WhatsApp' },
  ];

  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Sahaya Savari F</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl text-muted-foreground"
          >
            Aspiring Data Science & AI Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            I'm passionate about AI, data science, animation, and building visually 
            interactive websites. Currently exploring the fascinating world of artificial 
            intelligence and its applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild className="bg-primary hover:bg-primary/90 glow-effect">
              <Link to="/projects">View My Work</Link>
            </Button>
            
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="/resume.pdf" download>
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
            className="flex space-x-4"
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
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card p-2 glow-effect animate-float">
              <img
                src={profileImage}
                alt="Sahaya Savari F"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-32 h-32 border border-primary rounded-full opacity-10"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </div>

    {/* Blog Section */}
    <BlogSection />
    </>
  );
}