import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Framer Motion', level: 70 },
      ]
    },
    {
      title: 'Backend & Data',
      icon: Database,
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'SQL', level: 75 },
        { name: 'MongoDB', level: 65 },
        { name: 'API Development', level: 70 },
        { name: 'Firebase', level: 60 },
      ]
    },
    {
      title: 'AI & Data Science',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'TensorFlow', level: 70 },
        { name: 'pandas', level: 80 },
        { name: 'NumPy', level: 75 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Jupyter Notebooks', level: 90 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Docker', level: 60 },
        { name: 'Linux', level: 70 },
        { name: 'Figma', level: 75 },
        { name: 'Photoshop', level: 65 },
      ]
    }
  ];

  const overallSkills = [
    { name: 'Coding', level: 70 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Data Analysis', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Project Management', level: 70 },
    { name: 'Communication', level: 85 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise areas
          </p>
        </motion.div>

        {/* Overall Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
          <div className="glass-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {overallSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                      className="h-full skill-bar relative"
                    >
                      <div className="absolute inset-0 animate-glow" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Detailed Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + categoryIndex * 0.2, duration: 0.8 }}
                className="glass-card p-6 hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.6 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                          transition={{ 
                            delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1, 
                            duration: 1.2, 
                            ease: "easeOut" 
                          }}
                          className="h-full skill-bar"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Continuous Learning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground">
                Constantly learning new frameworks and best practices in modern web development.
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-muted-foreground">
                Exploring deep learning, neural networks, and the latest AI research developments.
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">Data Science</h3>
              <p className="text-sm text-muted-foreground">
                Advancing skills in data analysis, visualization, and statistical modeling.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}