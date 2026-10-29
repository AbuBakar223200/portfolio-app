"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Folder, Code2, Zap, Layers, Cpu, Terminal } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import initialProjects from "@/data/projects.json";
import type { Project } from "@/types";

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "web", label: "Web Applications", icon: Code2 },
  { id: "backend", label: "Backend & APIs", icon: Zap },
  { id: "software", label: "Desktop & Systems", icon: Cpu },
  { id: "algorithms", label: "Core CS & DSA", icon: Folder },
];

// Tech circuit grid (futuristic style)
function TechCircuitGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-[#590907]/30 to-transparent"
          style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-[#A5A79B]/20 to-transparent"
          style={{ left: `${25 + i * 20}%`, top: 0, bottom: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}

// Floating code brackets
function FloatingCodeSymbols() {
  const symbols = ["<", "/>", "{", "}", "( )", "[ ]"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, i) => (
        <motion.span
          key={i}
          className="absolute text-xl font-mono text-[#590907]/15"
          style={{
            left: `${8 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          {symbol}
        </motion.span>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <GlassCard variant="hover" className="h-full group overflow-hidden relative flex flex-col justify-between">
        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#590907]/40" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#A5A79B]/40" />

        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-medium">
              <Star size={12} className="fill-yellow-400" />
              Featured
            </div>
          </div>
        )}

        {/* Modern styled card header preview */}
        <div className="h-44 bg-gradient-to-br from-[#1c0706] via-[#120a09] to-[#1c1815] relative overflow-hidden border-b border-white/5 p-4 flex flex-col justify-between">
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#590907]/50 to-transparent"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Window dots */}
          <div className="flex items-center gap-1.5 relative z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-[11px] text-gray-500 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Center Graphic */}
          <div className="flex items-center justify-center my-auto">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2 group-hover:border-[#590907]/40 transition-colors">
              <Terminal size={18} className="text-[#a04040]" />
              <span className="text-xs font-mono font-medium text-gray-200">
                {project.techStack[0] || "Code"}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[11px] text-gray-400 font-mono">
            <span>Repository</span>
            <span className="text-[#A5A79B]">Ready</span>
          </div>
        </div>

        <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-bold text-white group-hover:text-[#a04040] transition-colors line-clamp-1 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded-md bg-[#590907]/10 border border-[#590907]/20 text-[#E8D2B5] font-mono"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-0.5 text-xs rounded-md bg-white/5 border border-white/10 text-gray-500 font-mono">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            <div className="flex gap-4 pt-2 border-t border-white/5">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 2 }}
              >
                <Github size={15} />
                Source Code
              </motion.a>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-[#A5A79B] hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  <ExternalLink size={15} />
                  Live Preview
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className="overflow-hidden relative" variant="glow">
        <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#590907]/50" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#A5A79B]/50" />

        <div className="grid lg:grid-cols-2 gap-0">
          <div className="h-64 lg:h-auto bg-gradient-to-br from-[#2b0807] via-[#1a0f0d] to-[#120907] relative overflow-hidden flex flex-col justify-between p-8">
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#590907]/50 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-medium">
                <Star size={13} className="fill-yellow-400" />
                Flagship Project
              </div>
            </div>

            <div className="my-auto text-center relative z-10 py-6">
              <h3 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                {project.title.split("-")[0].trim()}
              </h3>
              <p className="text-xs font-mono text-[#A5A79B] uppercase tracking-widest">
                Enterprise Legal Technology
              </p>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
              <span>Full-Stack Architecture</span>
              <span className="text-green-400">● Live Production</span>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {project.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs rounded-lg bg-[#590907]/10 border border-[#590907]/20 text-[#E8D2B5] font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium"
              >
                <Github size={18} />
                View Code
              </motion.a>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glow-button flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium"
                >
                  <ExternalLink size={18} />
                  Live Preview
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [projects] = useState<Project[]>(initialProjects as Project[]);
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredProject = projects.find((p) => p.featured);
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });
  const nonFeaturedProjects = filteredProjects.filter(
    (p) => activeCategory !== "all" || p.id !== featuredProject?.id
  );

  return (
    <section id="projects" className="relative overflow-hidden scroll-mt-24 py-16">
      <TechCircuitGrid />
      <FloatingCodeSymbols />

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#590907]/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#A5A79B]/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="px-4 pb-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#590907]/20 to-[#A5A79B]/20 border border-[#590907]/30 mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(89, 9, 7, 0.3)",
                  "0 0 40px rgba(89, 9, 7, 0.5)",
                  "0 0 20px rgba(89, 9, 7, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code2 className="text-[#a04040]" size={28} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A curated collection of full-stack platforms, scalable APIs, and system software
            </p>

            <motion.div
              className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#590907] to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {categories.map((category, i) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#590907]/25 border border-[#590907]/50 text-[#E8D2B5]"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Featured Project */}
      {featuredProject && activeCategory === "all" && (
        <SectionWrapper className="px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <FeaturedProjectCard project={featuredProject} />
          </div>
        </SectionWrapper>
      )}

      {/* Project Grid */}
      <SectionWrapper className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {nonFeaturedProjects.length > 0 ? (
              <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nonFeaturedProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-sm">No projects found in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SectionWrapper>
    </section>
  );
}
