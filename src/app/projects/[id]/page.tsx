"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectData: Record<string, any> = {
    "01": {
        title: "Cars – Mobile Application",
        tagline: "The Future of Luxury Mobility",
        stack: ["React Native", "MobX", "FlashList", "React Navigation"],
        description: "A comprehensive mobile ecosystem for car enthusiasts and buyers. We focused on delivering a buttery-smooth experience using FlashList for long lists and MobX for reactive state management.",
        features: [
            "Secure Auth System with Biometrics",
            "High-end Brand Exploration UI",
            "Real-time Model Comparison Engine",
            "Integrated Spare-parts Marketplace",
            "Dynamic Dark/Light Theme Switching",
            "Custom Drawer & Tab Navigation"
        ],
        mainImage: "/project-cars-v2.png",
    },
    "02": {
        title: "Prakruti – Wellness Platform",
        tagline: "Ayurveda Meets Modern Tech",
        stack: ["React 18", "Node.js", "MongoDB", "Framer Motion", "MUI"],
        description: "An innovative wellness platform that bridges ancient Ayurvedic wisdom with modern technology. Featuring a custom Dosha analysis engine and interactive health charts.",
        features: [
            "Complex Dosha Analysis Engine",
            "Data-driven Health Visualization",
            "Admin & Coach Dashboards",
            "Personalized Diet Algorithms",
            "Seamless Glassmorphism UI",
            "Real-time Chat with Health Coaches"
        ],
        mainImage: "/project-prakruti-v2.png",
    },
    "03": {
        title: "Velocity Shop – Sports E-Commerce",
        tagline: "E-Commerce Reimagined",
        stack: ["React (Vite)", "Node.js", "Express", "Framer Motion", "Tailwind"],
        description: "A high-performance sports apparel store built for speed and immersion. The design follows a dark brutalist theme with cinematic transitions.",
        features: [
            "Ultra-fast Mini-cart System",
            "Immersive 3D Product Viewers",
            "Optimized Checkout Pipeline",
            "Order Tracking Dashboard",
            "Performance-first Rendering",
            "Dynamic Inventory Management"
        ],
        mainImage: "/project-velocity-v2.png",
    },
    "04": {
        title: "Terra – Techwear Platform",
        tagline: "The Intersection of Fashion & Tech",
        stack: ["Next.js 15", "TypeScript", "Three.js", "Tailwind", "AI SDK"],
        description: "A spatial commerce platform for the techwear subculture. Leveraging Three.js for 3D product interaction and AI for personalized shopping agents.",
        features: [
            "Interactive 3D Mesh Interaction",
            "AI-powered Styling Assistant",
            "Kinetic Typography Engine",
            "Responsive Spatial Layouts",
            "Advanced AR Try-on Previews",
            "Edge-optimized Performance"
        ],
        mainImage: "/project-terra-v2.png",
    }
};

export default function ProjectDetail() {
    const params = useParams();
    const id = params.id as string;
    const project = projectData[id] || projectData["01"];

    return (
        <main className="min-h-screen bg-background">
            <nav className="fixed top-0 left-0 right-0 p-8 z-50 bg-background/50 backdrop-blur-md">
                <Link href="/" className="flex items-center gap-2 group text-muted hover:text-primary transition-colors">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm tracking-widest uppercase">Back to Portfolio</span>
                </Link>
            </nav>

            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 mb-16"
                >
                    <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter">
                        {project.title.split('–')[0]}<span className="text-primary">.</span>
                    </h1>
                    <p className="text-2xl text-muted font-body italic">{project.tagline}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src={project.mainImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading">Mission Brief</h2>
                            <p className="text-xl text-muted leading-relaxed font-body">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="glass-card p-8 border border-white/10 space-y-8">
                            <div>
                                <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((s: string) => (
                                        <span key={s} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-medium">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Core Features</h3>
                                <ul className="space-y-4">
                                    {project.features.map((f: string) => (
                                        <li key={f} className="flex items-start gap-3 text-sm text-muted">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 flex gap-4">
                                <button className="flex-1 py-4 bg-primary text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </button>
                                <button className="flex-1 py-4 glass-card border border-white/10 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                                    <Github className="w-4 h-4" /> Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
