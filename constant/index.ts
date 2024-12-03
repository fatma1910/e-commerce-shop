import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const FOOTER_DATA = {
    about: {
      title: "About Us",
      description:
        "We provide the best products with amazing offers and quality services. Join us to explore a wide range of products at unbeatable prices.",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "About", href: "/" },
        { label: "Products", href: "/" },
        { label: "Contact", href: "/" },
        { label: "FAQ", href: "/" },
      ],
    },
    contact: {
      title: "Contact",
      details: [
        { icon: MapPin, text: "123 Main Street, Cairo, Egypt" },
        { icon: Phone, text: "+20 123 456 7890" },
        { icon: Mail, text: "support@example.com" },
      ],
    },
    socialMedia: {
      title: "Follow Us",
      links: [
        { icon: Facebook, href: "/" },
        { icon: Twitter, href: "/" },
        { icon: Instagram, href: "/" },
      ],
    },
  };