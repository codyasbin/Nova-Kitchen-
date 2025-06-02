"use client";

import {useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Play} from "lucide-react";

// Helpers
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

// Types
type Store = {
  id: number;
  name: string;
  location: string;
  images: {image: string; video_url: string | null}[];
};

export default function StoreGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Static demo data
  const stores: Store[] = [
    {
      id: 1,
      name: "Nova Kitchen and Interior",
      location: "Main Road, Narayanghat",
      images: [
        {
          image: "/store1_img1.jpg",
          video_url: "https://youtu.be/M5E4ckXJGP4?si=f1mnuJCqLLGMW7e8",
        },
        {
          image:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noEbEH4KiWG8txKl2t3GxYpR0FYlfG0IoftIOyCICy8Cn9EjUmKdQ5fG8LMBUcTEzzQCBdky1bzNKT7ISrZxAzPzLfg70W_EaDgbiRvjoDj4xsKWEIsYKhTdxzJj_oBvhNPTC72mA=s1360-w1360-h1020-rw",
          video_url: null,
        },
        {
          image:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nryh0UYTAdaAVKlIp-bbJAjXNLfo4XC-pOiT-PXqMVRrCgJQA2I7AAYrRdAtGC2UpSdfSPA8hfNEqPaRwxLYt2kSFzAsncnwOz8hkJ0eNO9n2XSfMs-35F-fQGtYtXkw1VIodEpug=s1360-w1360-h1020-rw",
          video_url: null,
        },
      ],
    },
    {
      id: 2,
      name: "Milan Chowk Bharatpur",
      location: "Milan Chowk, Bharatpur",
      images: [
        {
          image: "/store2_img1.jpg",
          video_url: "https://www.youtube.com/shorts/G_KMlcZEsno",
        },
        {
          image:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrHhX4CY-oEx3_iNmI0Gz7D3TyDakr06OR8URHdA12liCx8rxlIMeQKU4b5spkVjLvkK3NiXrVLCdDNnhyHiBx-umenynNldXpFCMmhyxbH56jp2GE88708egrnijjqQX6qNS_v=w243-h174-n-k-no-nu-pi-10-ya277.68-ro0-fo100",
          video_url: null,
        },
        {
          image:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqi1NXQGUmltBtB4ZOGrAUQaDMBIaGnh4pi6219VP8toRF3GhmKd1jP0YjFyAHCr2F843hTCO82CjFHE9xVQxqEND6bQaQcDGoFaAqLE00MrPo4Gj8bAD-AJIMKJkdPl-NgJ2bw=s1360-w1360-h1020-rw",
          video_url: null,
        },
      ],
    },
  ];

  return (
    <>
      <div id="showroom" className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">Our Stores</h2>
          <p className="text-muted-foreground text-lg">Explore our stores located at Milan Chowk and Main Road, Bharatpur</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {stores.map((store) => (
            <div key={store.id}>
              <h3 className="text-2xl text-center font-semibold mb-2">{store.name}</h3>
              <p className="text-muted-foreground text-center mb-4">{store.location}</p>

              <div className="grid grid-cols-2 gap-2">
                {store.images.map((media, index) => {
                  const videoId = media.video_url ? getYouTubeVideoId(media.video_url) : null;
                  const isVideo = !!videoId;

                  return (
                    <motion.div
                      key={media.image + index}
                      className={`relative rounded-lg overflow-hidden cursor-pointer ${isVideo ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
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
                            title={`Store video: ${store.name}`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                          />
                        ) : (
                          <>
                            <Image src={getYouTubeThumbnail(videoId)} alt={`${store.name} video`} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <div className="bg-red-600 rounded-full p-3 shadow-lg">
                                <Play className="w-6 h-6 text-white fill-white" />
                              </div>
                            </div>
                          </>
                        )
                      ) : (
                        <Image src={media.image} alt={`Image ${index + 1} of ${store.name}`} fill className="object-cover" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Store Image</DialogTitle>
            <DialogDescription>{stores.find((s) => s.images.some((img) => img.image === selectedImage))?.name}</DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <Image src={selectedImage} alt="Store image" fill className="object-cover" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
