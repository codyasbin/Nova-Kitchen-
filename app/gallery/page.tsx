'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { getGalleryProjects } from '@/lib/data';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  
  const projects = getGalleryProjects();
  
  const filteredProjects = currentCategory === 'all'
    ? projects
    : projects.filter(project => project.category === currentCategory);
  
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-playfair font-bold mb-4">Our Project Gallery</h1>
        <p className="text-muted-foreground text-lg">
          Browse our portfolio of beautifully designed kitchens and interior spaces that we've created for our clients.
        </p>
      </div>
      
      <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setCurrentCategory}>
        <div className="flex justify-center">
          <TabsList
              className="inline-flex scrollbar-hide  h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent"
              style={{ maxWidth: '100%', minWidth: 0 }}
            >
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="modular">Modular Kitchens</TabsTrigger>
            <TabsTrigger value="interiors">Interiors</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="mt-8">
          <TabsContent value="all" className="mt-0">
            <GalleryGrid
              projects={filteredProjects}
              setSelectedImage={setSelectedImage}
            />
          </TabsContent>
          <TabsContent value="modular" className="mt-0">
            <GalleryGrid
              projects={filteredProjects}
              setSelectedImage={setSelectedImage}
            />
          </TabsContent>
          <TabsContent value="interiors" className="mt-0">
            <GalleryGrid
              projects={filteredProjects}
              setSelectedImage={setSelectedImage}
            />
          </TabsContent>
          <TabsContent value="commercial" className="mt-0">
            <GalleryGrid
              projects={filteredProjects}
              setSelectedImage={setSelectedImage}
            />
          </TabsContent>
        </div>
      </Tabs>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Project View</DialogTitle>
            <DialogDescription>
              {projects.find(p => p.images.includes(selectedImage || ''))?.name || ''}
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Project image"
                fill
                className="object-cover"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      <Separator className="my-16" />
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold mb-4">Client Testimonials</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Here's what our clients have to say about their experience with Nova Kitchen & Interiors.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <TestimonialCard
          name="Priya Sharma"
          location="Mumbai"
          image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          quote="Nova Kitchen transformed our outdated kitchen into a modern, functional space that has become the heart of our home. Their attention to detail and quality craftsmanship exceeded our expectations."
        />
        
        <TestimonialCard
          name="Raj Malhotra"
          location="Delhi"
          image="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          quote="From design to installation, the team at Nova showed exceptional professionalism. They understood our requirements perfectly and delivered a kitchen that perfectly balances aesthetics and functionality."
        />
        
        <TestimonialCard
          name="Ananya Patel"
          location="Bangalore"
          image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          quote="We were impressed by the range of options available and the expert guidance provided. Our modular kitchen is not just beautiful but designed for maximum efficiency. Couldn't be happier!"
        />
      </div>
    </div>
  );
}

type GalleryGridProps = {
  projects: any[];
  setSelectedImage: (image: string) => void;
};

function GalleryGrid({ projects, setSelectedImage }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {project.images.slice(0, 3).map((image: string, index: number) => (
              <motion.div
                key={image}
                className={`relative rounded-lg overflow-hidden cursor-pointer ${
                  index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Project ${project.name} image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="font-medium">{project.name}</h3>
            <p className="text-sm text-muted-foreground">{project.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type TestimonialCardProps = {
  name: string;
  location: string;
  image: string;
  quote: string;
};

function TestimonialCard({ name, location, image, quote }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-card p-6 rounded-lg border border-border shadow-sm"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
      <p className="text-muted-foreground italic">"{quote}"</p>
    </motion.div>
  );
}