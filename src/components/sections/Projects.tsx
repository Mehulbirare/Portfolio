"use client";

import ProjectCard from "../ui/ProjectCard";

const projects = [
    {
        id: "01",
        title: "Cars – Mobile Application",
        description: "A luxury automotive platform featuring brand exploration, spare-parts marketplace, and real-time model comparison. Built with high-performance React Native architecture.",
        tags: ["React Native", "MobX", "FlashList", "iOS + Android"],
        image: "/project-cars.jpg",
        link: "#",
        github: "#",
    },
    {
        id: "02",
        title: "Prakruti – Wellness Platform",
        description: "A comprehensive health & wellness ecosystem with Dosha analysis, personalized coaching, and dynamic lifestyle tracking. Features glassmorphism UI.",
        tags: ["React 18", "Node.js", "MongoDB", "Framer Motion"],
        image: "/project-prakruti.jpg",
        link: "#",
        github: "#",
    },
    {
        id: "03",
        title: "Velocity Shop – Sports E-Commerce",
        description: "High-performance sports commerce engine with a dark brutalist aesthetic. Features a cinematic product-first UI and optimized checkout flow.",
        tags: ["Vite", "Node.js", "Express", "Tailwind CSS"],
        image: "/project-velocity.jpg",
        link: "#",
        github: "#",
    },
    {
        id: "04",
        title: "Terra – Techwear Platform",
        description: "Spatial commerce experience with 3D product viewing and AI shopping assistance. Pushing the boundaries of modern web tech.",
        tags: ["Next.js 15", "Three.js", "Tailwind", "TypeScript"],
        image: "/project-terra.jpg",
        link: "#",
        github: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="mb-20 space-y-4">
                <h2 className="text-sm font-mono text-primary tracking-widest uppercase">Selected Works</h2>
                <h3 className="text-5xl md:text-7xl font-bold font-heading italic">
                    High-Impact <span className="text-muted">Creations.</span>
                </h3>
            </div>

            <div className="flex flex-col">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}
