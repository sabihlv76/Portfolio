import type { IconType } from "react-icons";
import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiJavascript,
    SiFlutter,
    SiDart,
    SiPython,
    SiGit,
    SiGithub,
    SiUbuntu,
    SiLinux,
} from "react-icons/si";
import { DiHtml5, DiCss3Full, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import { Film, Scissors, Layers3 } from "lucide-react";

export interface TechItem {
    name: string;
    icon: IconType;
    color: string;
}

export const techStack: TechItem[] = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MERN Stack", icon: Layers3, color: "#0EA5E9" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "HTML5", icon: DiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: DiCss3Full, color: "#1572B6" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Windows Server", icon: FaWindows, color: "#0078D4" },
    { name: "Linux", icon: SiLinux, color: "#000000" },
    { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
    { name: "Adobe Photoshop", icon: DiPhotoshop, color: "#31A8FF" },
    { name: "Adobe Illustrator", icon: DiIllustrator, color: "#FF9A00" },
    { name: "Adobe Premiere Pro", icon: Film, color: "#9999FF" },
    { name: "CapCut", icon: Scissors, color: "#000000" },
];

export const heroTechStack: TechItem[] = [
    techStack[0], // React.js
    techStack[1], // Node.js
    techStack[4], // MERN Stack
    techStack[6], // Flutter
    techStack[8], // Python
    techStack[11], // Git
];
