'use client';

import { motion } from 'framer-motion';
import { Shield, ThumbsUp, Clock, Zap, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Quality Assurance',
    description: 'We use only the highest quality materials and appliances for durability and performance.',
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: 'Expert Craftsmanship',
    description: 'Our skilled craftsmen bring years of experience to ensure flawless execution.',
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Timely Delivery',
    description: 'We value your time and ensure on-schedule project completion.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Innovative Designs',
    description: 'Our designs blend aesthetics with functionality for modern living.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Customer-Centric Approach',
    description: 'We prioritize your needs and preferences throughout the design process.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'After-Sales Support',
    description: 'Our relationship continues long after your project is completed.',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="py-20 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Why Choose Us</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We're committed to excellence in every aspect of our service. Here's what sets us apart.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-background p-6 rounded-lg border border-border hover:shadow-md transition-all"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}