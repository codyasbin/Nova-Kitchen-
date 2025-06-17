"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Play} from "lucide-react";

// Types
type Store = {
  id: number;
  name: string;
  location: string;
  images: {
    image: string;
    iframe?: string;
  }[];
};

export default function StoreGallery() {
  const [stores, setStores] = useState<Store[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v1/product/store-galleries/`);
        const data = await response.json();

        const normalizedStores: Store[] = data.results.map((item: any) => ({
          id: item.id,
          name: item.name,
          location: item.description,
          images: item.images.map((img: any) => ({
            image: img.image,
            iframe: img.url ? `<iframe src="${img.url}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` : undefined,
          })),
        }));

        setStores(normalizedStores);
      } catch (error) {
        console.error("Failed to fetch store galleries:", error);
      }
    };

    fetchStores();
  }, []);

  return (
    <>
      <div id="showroom" className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">Our Stores Gallery</h2>
          <p className="text-muted-foreground text-lg">Explore our stores located at Main Road and Milan Chowk, Bharatpur</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stores.map((store) => {
            const iframeImages = store.images.filter((img) => img.iframe);
            const photoImages = store.images.filter((img) => !img.iframe);

            return (
              <div key={store.id} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">{store.name}</h3>
                  <p className="text-muted-foreground mb-4">{store.location}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {iframeImages.map((media, index) => (
                    <motion.div
                      key={media.image + index}
                      className="col-span-2 relative rounded-lg overflow-hidden Ssm:aspect-video aspect-[16/12] h-auto sm:h-auto"
                      whileHover={{scale: 1.02}}
                      transition={{duration: 0.2}}
                    >
                      <div className="w-full h-full" dangerouslySetInnerHTML={{__html: media.iframe!}} />
                    </motion.div>
                  ))}

                  {photoImages.map((media, index) => (
                    <motion.div
                      key={media.image + index}
                      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                      whileHover={{scale: 1.03}}
                      transition={{duration: 0.2}}
                      onClick={() => setSelectedImage(media.image)}
                    >
                      <Image src={media.image} alt={`Image ${index + 1} of ${store.name}`} fill className="object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
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
