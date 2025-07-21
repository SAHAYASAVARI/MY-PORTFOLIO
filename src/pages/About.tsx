import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Palette, Target } from 'lucide-react';
import profileImage from '../assets/profile-placeholder.jpg';

export function About() {
  const interests = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Exploring machine learning algorithms and neural networks to solve complex problems.',
    },
    {
      icon: Code,
      title: 'Data Science',
      description: 'Analyzing data patterns and extracting meaningful insights from complex datasets.',
    },
    {
      icon: Palette,
      title: 'Animation & Design',
      description: 'Creating visually appealing animations and interactive user experiences.',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Developing innovative solutions through computational thinking and creativity.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology, driven by curiosity, and committed to continuous learning
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden glass-card p-4 glow-effect">
                <img
                  src={profileImage}
                  alt="Sahaya Savari F"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary rounded-full opacity-30"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Hello, I'm Sahaya Savari F</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an aspiring Data Science and AI student with a passion for exploring 
                the limitless possibilities of artificial intelligence and machine learning. 
                My journey in technology began with a fascination for how data can tell 
                stories and drive meaningful decisions.
              </p>
              <p>
                Beyond the technical realm, I have a creative side that enjoys animation 
                and building visually interactive websites. I believe that the intersection 
                of technology and creativity is where the most innovative solutions emerge.
              </p>
              <p>
                When I'm not coding or analyzing data, you'll find me exploring new 
                technologies, working on personal projects, or learning about the latest 
                advancements in AI research. I'm always eager to take on new challenges 
                and collaborate on exciting projects.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {['Python', 'Machine Learning', 'Data Analysis', 'React', 'JavaScript', 'AI Research'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">What I'm Passionate About</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center hover:glow-effect transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <interest.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                <p className="text-muted-foreground text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass-card p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Education & Goals</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Current Focus</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pursuing Data Science and AI studies</li>
                <li>• Building practical machine learning projects</li>
                <li>• Developing full-stack web applications</li>
                <li>• Contributing to open-source projects</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Future Aspirations</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Become a skilled AI/ML Engineer</li>
                <li>• Work on impactful AI research projects</li>
                <li>• Build innovative tech solutions</li>
                <li>• Mentor aspiring developers</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}