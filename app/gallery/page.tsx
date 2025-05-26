"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { getGalleryProjects, getTestimonials } from "@/lib/data";
import { Play } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  const projects = getGalleryProjects();

  const filteredProjects =
    currentCategory === "all"
      ? projects
      : projects.filter((project) => project.category === currentCategory);

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-playfair font-bold mb-4">
          Our Project Gallery
        </h1>
        <p className="text-muted-foreground text-lg">
          Browse our portfolio of beautifully designed kitchens and interior
          spaces that we've created for our clients.
        </p>
      </div>

      <Tabs
        defaultValue="all"
        className="w-full mb-12"
        onValueChange={setCurrentCategory}
      >
        <div className="flex justify-center">
          <TabsList
            className="inline-flex scrollbar-hide  h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent"
            style={{ maxWidth: "100%", minWidth: 0 }}
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

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Project View</DialogTitle>
            <DialogDescription>
              {projects.find((p) => p.images.includes(selectedImage || ""))
                ?.name || ""}
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
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
        <h2 className="text-3xl font-playfair font-bold mb-4">
          Client Testimonials
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Here's what our clients have to say about their experience with Nova
          Kitchen & Interiors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {getTestimonials()
          .slice(0, 3)
          .map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image}
              quote={testimonial.text}
            />
          ))}
      </div>
    </div>
  );
}

type GalleryGridProps = {
  projects: any[];
  setSelectedImage: (image: string) => void;
};

// Helper function to extract YouTube video ID from URL (including Shorts)
function getYouTubeVideoId(url: string): string | null {
  // Handle various YouTube URL formats including Shorts
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([^#&?]{11})/,
    /youtube\.com\/watch\?.*v=([^#&?]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function GalleryGrid({ projects, setSelectedImage }: GalleryGridProps) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        // Assume the first item in images array is either a YouTube URL or regular image
        const firstItem = project.images[0];
        const videoId = getYouTubeVideoId(firstItem);
        const isVideo = !!videoId;

        return (
          <div key={project.id} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {/* First larger item - video or image */}
              <motion.div
                className="col-span-2 aspect-[16/9] relative rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  if (isVideo && videoId) {
                    setPlayingVideo(playingVideo === videoId ? null : videoId);
                  } else {
                    setSelectedImage(firstItem);
                  }
                }}
              >
                {isVideo && videoId ? (
                  <>
                    {playingVideo === videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={`${project.name} video`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <Image
                          src={getYouTubeThumbnail(videoId)}
                          alt={`${project.name} video thumbnail`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="bg-red-600 rounded-full p-4 shadow-lg">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <Image
                    src={firstItem || "/placeholder.svg"}
                    alt={`Project ${project.name} image 1`}
                    fill
                    className="object-cover"
                  />
                )}
              </motion.div>

              {/* Remaining images */}
              {project.images
                .slice(1, 3)
                .map((image: string, index: number) => (
                  <motion.div
                    key={image}
                    className="aspect-square relative rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Project ${project.name} image ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
            </div>
            <div>
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-sm text-muted-foreground">
                {project.location}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

type TestimonialCardProps = {
  name: string;
  location: string;
  image: string;
  quote: string;
};

function TestimonialCard({
  name,
  location,
  image,
  quote,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-card p-6 rounded-lg border border-border shadow-sm"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image || "/placeholder.svg"}
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
