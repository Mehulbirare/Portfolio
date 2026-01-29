"use client";

import { motion } from "framer-motion";
import {
    Smartphone,
    Globe,
    Server,
    Cpu,
    Layout,
    Database,
    Zap,
    Layers
} from "lucide-react";

const skillCategories = [
    {
        title: "Mobile Development",
        icon: <Smartphone className="w-6 h-6" />,
        skills: ["React Native", "MobX", "Redux", "Expo", "Push Notifications", "Bluetooth Low Energy"],
        color: "from-blue-500/20 to-blue-500/0",
        borderColor: "border-blue-500/20"
    },
    {
        title: "Web Engineering",
        icon: <Globe className="w-6 h-6" />,
        skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"],
        color: "from-primary/20 to-primary/0",
        borderColor: "border-primary/20"
    },
    {
        title: "Backend & Cloud",
        icon: <Server className="w-6 h-6" />,
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "JWT", "REST APIs"],
        color: "from-purple-500/20 to-purple-500/0",
        borderColor: "border-purple-500/20"
    },
    {
        title: "Design & UX",
        icon: <Layout className="w-6 h-6" />,
        skills: ["Figma", "UI Design", "Glassmorphism", "Micro-interactions", "Responsive Design"],
        color: "from-pink-500/20 to-pink-500/0",
        borderColor: "border-pink-500/20"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-white/[0.02] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-sm font-mono text-primary tracking-widest uppercase">Expertise</h2>
                        <h3 className="text-4xl md:text-7xl font-bold font-heading">
                            Technical <span className="text-white/30">Arsenal.</span>
                        </h3>
                    </div>
                    <p className="text-muted max-w-sm font-body leading-relaxed">
                        Meticulously crafted skill set focused on building scalable,
                        high-performance digital products for the next generation of users.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-8 rounded-3xl glass-card border ${category.borderColor} bg-gradient-to-br ${category.color} relative overflow-hidden group`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h4 className="text-2xl font-bold font-heading">{category.title}</h4>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
