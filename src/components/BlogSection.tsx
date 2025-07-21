import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Code, Brain, Palette } from 'lucide-react';
import { Button } from './ui/button';

export function BlogSection() {
  const articles = [
    {
      id: 1,
      title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
      excerpt: 'Discover the fundamentals of machine learning and how to start your journey in AI. Learn about key concepts, tools, and practical applications.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Machine Learning',
      icon: Brain,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 2,
      title: 'Building Interactive Web Animations with Framer Motion',
      excerpt: 'Learn how to create smooth, engaging animations for your React applications using Framer Motion. Tips and tricks for better UX.',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Web Development',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      id: 3,
      title: 'The Art of Data Visualization: Making Numbers Tell Stories',
      excerpt: 'Explore best practices for creating compelling data visualizations that communicate insights effectively to your audience.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Data Science',
      icon: Palette,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about technology, data science, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${article.bgColor}`}>
                    <article.icon className={`h-4 w-4 ${article.color}`} />
                    <span className={`text-sm font-medium ${article.color}`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-0">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}