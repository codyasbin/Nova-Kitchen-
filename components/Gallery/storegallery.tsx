"use client";

import {useState} from "react";
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Demo data with Google Street View iframes
  const stores: Store[] = [
    {
      id: 1,
      name: "Nova Kitchen and Interior",
      location: "Main Road, Narayangarh(way to Pokhara Buspark)",
      images: [
        {
          image: "/store1_img1.jpg",
          iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1748860601726!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2VzYmFkZ0FF!2m2!1d27.69802338486377!2d84.4226342460351!3f202.8636869293947!4f-24.87974008615359!5f0.7820865974627469" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
        {
          image:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrqEgMcAFi1M--BTgAAzYFBhNHOigDegnapZ9gyEXC9GCOMLfNh_wU_yJhOLIi-pYV9IQqZq95-kANl-YFHKb-D1rPabbFZnQNPkTjne4knUthwp5h6tc5NElrxfILsOp-KDEqw=s1360-w1360-h1020-rw",
        },
        {
          image:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nok4qcXleG9up0Kd5AI_Nl732oYHkn_0KT_J5_-OT0i7WTA2aTfm6fGmCr-6R28WZVyl2F1SRNCSlmv9ZSRreUJEfoWgCva8UkETKg_jjReMaIbMimYwWJ6yBBZfPN2IKyPQmZO=s1360-w1360-h1020-rw",
        },
      ],
    },
    {
      id: 2,
      name: "Nova Kitchen and Interiors",
      location: "Putali Bazar Chowk, opposite of NMB Bank",
      images: [
        {
          image: "/store2_img1.jpg",
          iframe: `<iframe src="https://www.google.com/maps/embed?pb=!4v1748860630805!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2VzYmJkd2dF!2m2!1d27.69802762845!2d84.42260443516426!3f0.1323818099937739!4f-14.268468738054366!5f0.7820865974627469" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        },
        {
          image:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noNvI8r5PTam9p1jcqWp33cfHK6ElroWIIFqOJiwgb_hI7hNMWXpckHmZOOA4ShlHgyrQjlzmAspLsA5-lzIryZ8SV36p5EgTcxPjIGNkinArbWgMrlrUSuc6VuH1PctyM7D8yI=s1360-w1360-h1020-rw",
        },
        {
          image:
            "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npOdEGTPM4mw6XxVPYaLekINTcOeTjjPVxrpNWiT2l2TdjnOWWqtf7XMQL9Hu8Ta1W-N5ubCZuWpppJJfSXFQ6b6c98wn1I9vF1uLU113qFRTlnohaEAuM4BndtjdbdL94wicVa=s1360-w1360-h1020-rw",
        },
      ],
    },
  ];

  return (
    <>
      <div id="showroom" className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">Our Stores Gallery</h2>
          <p className="text-muted-foreground text-lg">Explore our stores located at Main Road and Putali Bazar, Bharatpur</p>
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
                  {/* Iframes - take full width across both columns */}
                  {iframeImages.map((media, index) => (
                    <motion.div key={media.image + index} className="col-span-2 relative rounded-lg overflow-hidden aspect-video" whileHover={{scale: 1.02}} transition={{duration: 0.2}}>
                      <div className="w-full h-full" dangerouslySetInnerHTML={{__html: media.iframe!}} />
                    </motion.div>
                  ))}

                  {/* Images - one per column */}
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

      {/* Dialog for full-screen image */}
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
