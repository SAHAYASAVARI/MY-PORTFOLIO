import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Brain, Palette } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Image Classification',
      description: 'Deep learning model for image classification using convolutional neural networks. Achieved 94% accuracy on test dataset.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Jupyter'],
      category: 'AI/ML',
      icon: Brain,
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing sales data with real-time updates and predictive analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'D3.js', 'Python', 'Flask'],
      category: 'Data Science',
      icon: Database,
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with 3D animations, particle effects, and smooth transitions.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      category: 'Web Development',
      icon: Code,
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Animated Infographics',
      description: 'Collection of interactive data visualizations and animated infographics for various topics.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'SVG', 'CSS3', 'GSAP'],
      category: 'Animation',
      icon: Palette,
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#',
      status: 'Ongoing'
    },
    {
      id: 5,
      title: 'Chatbot with NLP',
      description: 'Intelligent chatbot using natural language processing for customer service automation.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'NLTK', 'spaCy', 'Flask'],
      category: 'AI/ML',
      icon: Brain,
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#',
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Stock Price Predictor',
      description: 'Machine learning model to predict stock prices using historical data and sentiment analysis.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'scikit-learn', 'pandas', 'matplotlib'],
      category: 'Data Science',
      icon: Database,
      github: 'https://github.com/SAHAYASAVARI',
      demo: '#',
      status: 'Planning'
    }
  ];

  const categories = ['All', 'AI/ML', 'Data Science', 'Web Development', 'Animation'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Ongoing': return 'bg-purple-500/20 text-purple-400';
      case 'Planning': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

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
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my journey through data science, AI, and creative web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`${
                selectedCategory === category 
                  ? 'bg-primary text-primary-foreground glow-effect' 
                  : 'border-primary/30 hover:border-primary'
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-primary opacity-50" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {project.category}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Want to collaborate?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects and opportunities. 
              Let's build something amazing together!
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 glow-effect">
              <a href="mailto:sahayasavari@gmail.com">
                Get In Touch
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}