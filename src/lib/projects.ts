export interface Project {
    slug: string;
    name: string;
    url: string;
    displayUrl: string;
    role: "team" | "solo";
    status: "live" | "development";
    tagline: string;
    image: string;
    myRole: string;
    problem: string;
    features: string[];
    techStack: string[];
}

export const projects: Project[] = [
    {
        slug: "higura",
        name: "Higura",
        url: "https://www.higura.com",
        displayUrl: "higura.com",
        role: "team",
        status: "live",
        tagline:
            "AI-powered inventory & POS software helping shops across Rwanda and Africa track sales, stock, debts, and expenses from one simple dashboard.",
        image: "/Hifura.png",
        myRole:
            "Contributing full-stack developer and sales lead — building dashboard features while driving client sales and onboarding for the product.",
        problem:
            "Small shop owners across Rwanda and Africa often track sales, stock, debts, and expenses on paper or across disconnected apps, making it hard to see the full picture of their business.",
        features: [
            "Real-time sales & inventory tracking",
            "Debt and expense management",
            "AI-assisted business insights",
            "Simple, mobile-friendly dashboard",
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
        slug: "eazy1teck",
        name: "Eazy1Teck",
        url: "https://eazy1teck.com",
        displayUrl: "eazy1teck.com",
        role: "solo",
        status: "live",
        tagline:
            "An online electronics & smartphone retail platform serving customers across Rwanda — designed and built independently, end to end.",
        image: "/Eazy1teck.png",
        myRole: "Sole developer — designed, built, and deployed the entire platform end to end.",
        problem:
            "Customers in Rwanda needed a reliable, easy-to-browse platform to buy electronics and smartphones online without relying on unreliable informal sellers.",
        features: [
            "Product catalog with categories & search",
            "Responsive storefront for mobile shoppers",
            "Order-friendly product structure",
            "Fast, optimized page loads",
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
        slug: "ingendohub",
        name: "IngendoHub",
        url: "https://ingendohub.vercel.app",
        displayUrl: "ingendohub.vercel.app",
        role: "solo",
        status: "development",
        tagline:
            "A bus booking platform for Rwanda that lets travelers search, compare, and reserve intercity bus tickets online.",
        image: "/IngendoHub.png",
        myRole: "Sole developer — architecting and building the platform from the ground up.",
        problem:
            "Booking intercity bus tickets in Rwanda is often manual and inconvenient, with travelers relying on phone calls or in-person purchases.",
        features: [
            "Route search & comparison",
            "Online seat reservation",
            "Secure ticket booking flow",
            "Mobile-first design for travelers on the go",
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
        slug: "autorwa",
        name: "AutoRwa",
        url: "https://autorwa.vercel.app",
        displayUrl: "autorwa.vercel.app",
        role: "solo",
        status: "development",
        tagline:
            "A vehicle & auto spare-parts marketplace connecting Rwandan buyers directly with verified sellers, with WhatsApp contact and rental options.",
        image: "/Autorwa.png",
        myRole: "Sole developer — building the marketplace end to end.",
        problem:
            "Buyers and sellers of vehicles & auto parts in Rwanda often rely on informal networks, making it hard to find verified listings or trustworthy sellers.",
        features: [
            "Vehicle & spare-parts listings",
            "WhatsApp-based direct contact with sellers",
            "Rental options alongside sales",
            "Verified-seller listing structure",
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
