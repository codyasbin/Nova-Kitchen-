'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="px-6 py-16 sm:p-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-4 text-white">
                Ready to Transform Your Kitchen?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Schedule a consultation with our design experts today. We'll help you create the kitchen of your dreams.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Explore Our Showroom
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}