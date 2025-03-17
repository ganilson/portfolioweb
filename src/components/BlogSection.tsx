import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "Building Scalable APIs with Django REST Framework",
    excerpt: "Learn how to create robust and scalable APIs using Django REST Framework with best practices and advanced features.",
    date: "March 15, 2024",
    readTime: "10 min read",
    link: "#"
  },
  {
    title: "Microservices Architecture with Spring Boot",
    excerpt: "A comprehensive guide to building microservices using Spring Boot, including service discovery and load balancing.",
    date: "March 1, 2024",
    readTime: "12 min read",
    link: "#"
  }
];

export const BlogSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 mt-4"
    >
      {posts.map((post, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-[#1E1E1E] p-6 rounded-lg border border-gray-700 hover:border-green-400 transition-colors"
        >
          <h3 className="text-xl font-semibold text-gray-200 hover:text-green-400 transition-colors">
            {post.title}
          </h3>
          
          <div className="flex items-center gap-4 text-gray-400 text-sm mt-2">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <p className="text-gray-400 mt-4">{post.excerpt}</p>
          
          <a
            href={post.link}
            className="inline-flex items-center gap-2 text-green-400 mt-4 hover:text-green-300 transition-colors"
          >
            Read More
            <ArrowRight size={16} />
          </a>
        </motion.article>
      ))}
    </motion.div>
  );
};