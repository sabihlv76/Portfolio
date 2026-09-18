import type { LucideIcon } from "lucide-react";
import { Code2, Palette, Video, TrendingUp } from "lucide-react";

export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
}

export const services: Service[] = [
    {
        icon: Code2,
        title: "Software Development",
        description: "Building modern, scalable web applications with clean architecture, responsive design, and optimized performance.",
        features: [
            "Full-Stack Web Development",
            "Frontend with React.js",
            "Backend with Node.js",
            "REST API Integration",
            "Performance Optimization",
            "Debugging & Maintenance",
        ],
    },
    {
        icon: Palette,
        title: "Graphic Design",
        description: "Creating visually compelling brand identities, marketing materials, and digital graphics using professional design tools.",
        features: [
            "Logo Design",
            "Branding & Visual Identity",
            "Social Media Graphics",
            "Posters & Banners",
            "Marketing Materials",
            "Typography & Layout",
        ],
    },
    {
        icon: Video,
        title: "Video Editing",
        description: "Professional post-production editing for promotional content, short-form social media videos, and motion graphics.",
        features: [
            "Professional Video Editing",
            "Motion Graphics",
            "Short-form Content",
            "Promotional Videos",
            "Social Media Videos",
            "Post-Production Editing",
        ],
    },
    {
        icon: TrendingUp,
        title: "Sales & Business Services",
        description: "Driving business growth through strategic customer acquisition, lead generation, and relationship management.",
        features: [
            "Customer Acquisition",
            "Sales Strategy",
            "Lead Generation",
            "Client Communication",
            "Brand Promotion",
            "Partnership Negotiation",
        ],
    },
];
