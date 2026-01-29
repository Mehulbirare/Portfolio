"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
    github?: string;
    id: string;
}

export default function ProjectCard({ title, description, tags, image, link, github, id }: ProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative flex flex-col md:flex-row gap-8 items-center py-20 border-b border-white/5"
        >
            <div className="flex-1 space-y-6">
                <div className="space-y-2">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase">Project {id}</span>
                    <Link href={`/projects/${id}`}>
                        <h3 className="text-4xl md:text-5xl font-bold font-heading group-hover:text-primary transition-colors cursor-pointer flex items-center gap-4">
                            {title} <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                        </h3>
                    </Link>
                </div>

                <p className="text-muted text-lg max-w-xl leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-6 pt-4">
                    {link && (
                        <a href={link} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                            <ExternalLink className="w-4 h-4" /> LIVE DEMO
                        </a>
                    )}
                    {github && (
                        <a href={github} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                            <Github className="w-4 h-4" /> SOURCE CODE
                        </a>
                    )}
                </div>
            </div>

            <div className="flex-1 w-full relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
        </motion.div>
    );
}
