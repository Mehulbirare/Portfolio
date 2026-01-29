"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
    {
        company: "Logicwind Technologies LLP",
        role: "React Native Developer",
        period: "Present",
        description: "Architecting and developing mission-critical mobile applications with React Native. Focusing on performance optimization and clean architecture.",
    },
    {
        company: "Viha IT Solution",
        role: "Former Intern",
        period: "Previous",
        description: "Gained hands-on experience in full-stack development and mobile UI/UX principles.",
    },
    {
        company: "V Think Solution",
        role: "Former Intern",
        period: "Previous",
        description: "Explored early-stage startup engineering and rapid prototyping.",
    },
];

export default function Experience() {
    return (
        <section id="about" className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <h2 className="text-sm font-mono text-primary tracking-widest uppercase">Overview</h2>
                        <h3 className="text-4xl md:text-8xl font-bold font-heading">
                            The <span className="neon-gradient">Architect</span>.
                        </h3>
                    </div>
                    <p className="text-muted max-w-md font-body leading-relaxed text-lg">
                        Fusing startup agility with enterprise-grade engineering.
                        I build mobile products that feel as good as they function.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 glass-card p-10 flex flex-col justify-between group relative overflow-hidden"
                    >
                        <div className="space-y-6 relative z-10">
                            <p className="text-2xl md:text-3xl font-heading leading-tight italic">
                                &quot;Based in Surat, India, I&apos;m a React Native specialist
                                currently at <span className="text-white">Logicwind Technologies LLP</span>.
                                My journey is fueled by a B.Tech in Computer Engineering.&quot;
                            </p>
                            <p className="text-muted leading-relaxed">
                                I specialize in crafting high-performance, animation-heavy mobile applications
                                that push the boundaries of React Native. My focus is on clean architecture,
                                smooth 60fps interactions, and developer-centric code.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 relative z-10">
                            <div>
                                <div className="text-4xl font-bold font-heading neon-gradient">1.5</div>
                                <div className="text-muted text-xs uppercase tracking-widest mt-1">Years Exp.</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold font-heading neon-gradient">10+</div>
                                <div className="text-muted text-xs uppercase tracking-widest mt-1">Projects</div>
                            </div>
                            <div className="col-span-2 sm:col-auto">
                                <div className="text-4xl font-bold font-heading neon-gradient">100%</div>
                                <div className="text-muted text-xs uppercase tracking-widest mt-1">UI Intensity</div>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors" />
                    </motion.div>

                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                        <div className="relative h-full aspect-[4/5] lg:aspect-auto overflow-hidden rounded-3xl border border-white/10 glass-card">
                            <Image
                                src="/profile.jpg"
                                alt="Mehul Birare"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 glass-card p-10 space-y-12"
                    >
                        <div className="flex items-center justify-between">
                            <h4 className="text-2xl font-bold font-heading">Career Roadmap</h4>
                            <div className="hidden sm:flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="space-y-4 relative group">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-mono text-primary uppercase tracking-widest">{exp.period}</span>
                                        <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all shadow-[0_0_10px_var(--color-primary)]" />
                                    </div>
                                    <div className="space-y-1">
                                        <h5 className="text-xl font-bold">{exp.company}</h5>
                                        <div className="text-sm text-primary font-medium">{exp.role}</div>
                                    </div>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
