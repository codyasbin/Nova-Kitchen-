"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";

import {Play} from "lucide-react";
import Testimonials from "@/components/home/Testimonials";
import StoreGallery from "@/components/Gallery/storegallery";

// Type Definitions
type APIImage = {
  image: string;
  video_url: string | null;
};

type APIProject = {
  id: number;
  name: string;
  location: string;
  images: APIImage[];
};

type GalleryProject = {
  id: number;
  name: string;
  location: string;
  images: {image: string; video_url: string | null}[];
};

export default function GalleryPage() {
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/product/galleries`);
        const data = await response.json();

        const normalizedProjects: GalleryProject[] = data.results.map((item: APIProject) => ({
          id: item.id,
          name: item.name,
          location: item.location,
          images: item.images.map((img) => ({
            image: img.image,
            video_url: img.video_url,
          })),
        }));

        setProjects(normalizedProjects);
      } catch (error) {
        console.error("Failed to fetch gallery projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">Our Project Gallery</h1>
          <p className="text-muted-foreground text-lg">Browse our portfolio of beautifully designed kitchens and interior spaces that we've created for our clients.</p>
        </div>

        <GalleryGrid projects={projects} setSelectedImage={setSelectedImage} />

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Project View</DialogTitle>
              <DialogDescription>{projects.find((p) => p.images.some((img) => img.image === selectedImage))?.name || ""}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">{selectedImage && <Image src={selectedImage} alt="Project image" fill className="object-cover" />}</div>
          </DialogContent>
        </Dialog>
      </div>
      <StoreGallery />
      <Testimonials />
    </>
  );
}

// Helper functions
function getYouTubeVideoId(url: string): string | null {
  const patterns = [/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([^#&?]{11})/, /youtube\.com\/watch\?.*v=([^#&?]{11})/];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return match[1];
  }
  return null;
}

function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// GalleryGrid Component
type GalleryGridProps = {
  projects: GalleryProject[];
  setSelectedImage: (image: string) => void;
};

function GalleryGrid({projects, setSelectedImage}: GalleryGridProps) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => {
        const displayedImages = [...project.images].sort((a, b) => {
          if (a.video_url && !b.video_url) return -1;
          if (!a.video_url && b.video_url) return 1;
          return 0;
        });

        return (
          <div key={project.id} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {displayedImages.map((media, index) => {
                const videoId = media.video_url ? getYouTubeVideoId(media.video_url) : null;
                const isVideo = !!videoId;

                return (
                  <motion.div
                    key={media.image + index}
                    className={`${index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"} relative rounded-lg overflow-hidden cursor-pointer`}
                    whileHover={{scale: 1.03}}
                    transition={{duration: 0.2}}
                    onClick={() => {
                      if (isVideo && videoId) {
                        setPlayingVideo(playingVideo === videoId ? null : videoId);
                      } else {
                        setSelectedImage(media.image);
                      }
                    }}
                  >
                    {isVideo ? (
                      playingVideo === videoId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title={`Video of ${project.name}`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <Image src={getYouTubeThumbnail(videoId)} alt={`${project.name} video thumbnail`} fill className="object-cover" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <div className="bg-red-600 rounded-full p-4 shadow-lg">
                              <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                          </div>
                        </>
                      )
                    ) : (
                      <Image src={media.image || "/placeholder.svg"} alt={`Project ${project.name} image ${index + 1}`} fill className="object-cover" />
                    )}
                  </motion.div>
                );
              })}
            </div>
            <div>
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
