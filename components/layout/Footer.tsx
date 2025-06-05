"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Smartphone, Mail} from "lucide-react";
import {useState} from "react";

const legalContents: Record<string, {title: string; body: JSX.Element}> = {
  "Privacy Policy": {
    title: "Privacy Policy",
    body: (
      <>
        <p>This policy outlines how Nova Kitchen collects, uses, and protects customer data on NovaKitchen.com, ensuring transparency and compliance with Nepal’s privacy regulations.</p>
        <p>
          <strong>Company Information:</strong> Nova Kitchen, based in Kathmandu, Nepal, operates NovaKitchen.com and is committed to respecting your privacy in accordance with the Individual Privacy
          Act, 2018.
        </p>
        <p>
          <strong>Data Collected:</strong> We collect data you provide (e.g., names, contact numbers, emails, project inquiries) and data automatically generated (e.g., IP addresses, browser types,
          device info through cookies or analytics tools).
        </p>
        <p>
          <strong>Purpose of Collection:</strong> Collected data helps us deliver interior design consultations and services, respond to inquiries, improve our site, and send design tips or
          promotional offers (with your permission).
        </p>
        <p>
          <strong>Consent Requirement:</strong> We request your explicit consent before collecting, using, or sharing personal data, except where required by legal obligation or court order.
        </p>
        <p>
          <strong>Data Storage:</strong> Your information is stored on secure servers using encryption, access controls, and other safeguards. While we take every precaution, no system is completely
          immune to risk.
        </p>
        <p>
          <strong>Data Sharing:</strong> Your data may be shared with trusted service partners (e.g., payment gateways, logistics providers) only as necessary and with your permission.
        </p>
        <p>
          <strong>User Rights:</strong> Under the Individual Privacy Act, 2018, and applicable international laws (e.g., GDPR), you have rights to access, update, or request deletion of your data.
        </p>
        <p>
          <strong>Data Retention:</strong> We retain data only as long as necessary to fulfill our design services or meet legal obligations, after which it is safely deleted.
        </p>
        <p>
          <strong>Security Measures:</strong> We implement standard security practices, including SSL encryption and firewalls, to keep your information safe.
        </p>
        <p>
          <strong>Contact and Updates:</strong> For any questions or requests about your data, contact us at [insert email/phone/address]. This policy may be updated from time to time, with the latest
          version published here (Last Updated: May 27, 2025).
        </p>
      </>
    ),
  },
  "Terms of Service": {
    title: "Terms of Service (ToS)",
    body: (
      <>
        <p>This agreement outlines the terms and conditions for using NovaKitchen.com and our interior design services, ensuring a mutual understanding between you and Nova Kitchen.</p>
        <p>
          <strong>Agreement Scope:</strong> By using our website or hiring our services (e.g., kitchen remodeling, interior consultation), you agree to comply with these legally binding terms.
        </p>
        <p>
          <strong>Service Description:</strong> Nova Kitchen provides professional interior design services, specializing in kitchen renovation, custom cabinetry, and layout planning.
        </p>
        <p>
          <strong>User Responsibilities:</strong> You agree to provide accurate information and not misuse our platform or services, including avoiding the distribution of false information or
          engaging in unlawful activities.
        </p>
        <p>
          <strong>Project Agreements:</strong> All design projects are subject to a separate service agreement, including timelines, pricing, and scope. Changes must be documented and agreed upon by
          both parties.
        </p>
        <p>
          <strong>Payment Terms:</strong> Service fees, deposits, and refund policies are outlined in individual contracts. Payment must be made as agreed, and delays may result in project
          rescheduling.
        </p>
        <p>
          <strong>Intellectual Property:</strong> All design concepts, visuals, and written content on NovaKitchen.com are the property of Nova Kitchen and cannot be reproduced without our consent.
        </p>
        <p>
          <strong>Acceptable Use:</strong> Users must not attempt to hack, disrupt, or reverse-engineer our systems or content. Any misuse may result in denial of services.
        </p>
        <p>
          <strong>Limitation of Liability:</strong> Our services are provided “as is.” Nova Kitchen is not liable for damages such as delays, losses, or third-party actions beyond what Nepalese law
          allows.
        </p>
        <p>
          <strong>Termination:</strong> We reserve the right to refuse or terminate services if terms are violated. You may terminate a service contract by contacting us directly.
        </p>
        <p>
          <strong>Governing Law:</strong> These terms are governed by the laws of Nepal and disputes are subject to the jurisdiction of courts in Kathmandu.
        </p>
      </>
    ),
  },
  "Cookie policy": {
    title: "Cookie Policy",
    body: (
      <>
        <p>This Cookie Policy explains how Nova Kitchen uses cookies and similar technologies on NovaKitchen.com to enhance user experience and ensure website functionality.</p>

        <p>
          <strong>What Are Cookies:</strong> Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, analyze traffic, and improve our
          services.
        </p>

        <p>
          <strong>Types of Cookies We Use:</strong>
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for basic website functionality (e.g., navigation, security, and access to protected areas).
          </li>
          <li>
            <strong>Performance Cookies:</strong> Collect anonymous data on how visitors use the site to help us improve performance and usability.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> Remember your settings and preferences (e.g., language, region, layout choices).
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used (only with your consent) to track browsing habits and show you relevant ads through third-party services.
          </li>
        </ul>

        <p>
          <strong>How We Use Cookies:</strong> Cookies help us understand how users interact with our website, personalize content, and provide you with a more tailored browsing experience.
        </p>

        <p>
          <strong>Third-Party Cookies:</strong> Some cookies may be set by third-party services we use (e.g., Google Analytics, social media plugins). These are governed by the privacy policies of
          those providers.
        </p>

        <p>
          <strong>Managing Cookies:</strong> You can manage or disable cookies through your browser settings. However, disabling essential cookies may affect the functionality of our website.
        </p>

        <p>
          <strong>Consent:</strong> By continuing to browse NovaKitchen.com, you consent to our use of cookies, as outlined in this policy. You may withdraw your consent at any time by adjusting
          cookie settings in your browser.
        </p>

        <p>
          <strong>Updates:</strong> This policy may be updated occasionally. The latest version will always be available on this page (Last Updated: May 27, 2025).
        </p>

        <p>
          <strong>Contact:</strong> If you have questions about our Cookie Policy, please contact us at info@novakitchen.com.
        </p>
      </>
    ),
  },
};

function LegalModal({open, onClose, content}: {open: boolean; onClose: () => void; content: string}) {
  if (!open) return null;
  const legal = legalContents[content];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-background rounded-lg shadow-lg p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2 text-xl" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="font-bold text-lg mb-4">{legal?.title}</h2>
        <div className="text-muted-foreground space-y-3">{legal?.body}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const handleLegalClick = (content: string) => {
    setModalContent(content);
    setModalOpen(true);
  };
  return (
    <footer className="bg-muted">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">
              <span>Nova</span>
              <span className="text-primary"> Kitchen</span>
            </h3>
            <p className="text-muted-foreground">Premium kitchen solutions for modern homes. Transforming spaces with innovative designs and quality craftsmanship since 2010.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/NovaKitchenInteriors" target="_blank">
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 p-0">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=Modular Kitchen" className="text-muted-foreground hover:text-foreground transition-colors">
                  Modular Kitchens
                </Link>
              </li>
              <li>
                <Link href="/products?category=Appliances" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kitchen Appliances
                </Link>
              </li>
              <li>
                <Link href="/products?category=Water Purifiers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Water Purifiers
                </Link>
              </li>
              <li>
                <Link href="/products?category=Kitchen Accessories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kitchen Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=Interior Solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interior Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">Main Road, Narayangarh(way to Pokhara Buspark), Putali Bazar Chowk, opposite of NMB Bank</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">Milan Chowk, Opposite of Yamaha showroom. (150m away from Paras Buspark)</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">056-596482</span>
              </li>
              <li className="flex">
                <Smartphone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground"> 9845046865, 9801246865</span>
              </li>

              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">mathurashrestha1974@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© {new Date().getFullYear()} Nova Kitchen & Interiors. All rights reserved.</p>
          <div className="flex space-x-6">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => handleLegalClick("Privacy Policy")} type="button">
              Privacy Policy
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => handleLegalClick("Terms of Service")} type="button">
              Terms of Service
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => handleLegalClick("Cookie policy")} type="button">
              Cookie Policy
            </button>

            <LegalModal open={modalOpen} onClose={() => setModalOpen(false)} content={modalContent} />
          </div>
        </div>
      </div>
    </footer>
  );
}
