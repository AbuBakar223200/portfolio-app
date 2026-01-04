"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Folder, Code2, Zap, Layers } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Project } from "@/types";

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "web", label: "Web Apps", icon: Code2 },
  { id: "backend", label: "Backend", icon: Zap },
  { id: "codes", label: "Codes", icon: Folder },
];

// UNIQUE - Tech circuit grid (futuristic style)
function TechCircuitGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal circuit lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
          style={{ top: `${20 + i * 15}%`, left: 0, right: 0 }}
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 4 + i, 
            repeat: Infinity, 
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
      {/* Vertical circuit lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
          style={{ left: `${25 + i * 20}%`, top: 0, bottom: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity, 
            delay: i * 0.8 
          }}
        />
      ))}
      {/* Connection nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-violet-500/30"
          style={{
            left: `${20 + (i % 3) * 30}%`,
            top: `${25 + Math.floor(i / 3) * 40}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

// UNIQUE - Floating code brackets (tech theme)
function FloatingCodeSymbols() {
  const symbols = ['<', '/>', '{', '}', '( )', '[ ]'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, i) => (
        <motion.span
          key={i}
          className="absolute text-xl font-mono text-violet-500/15"
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

// UNIQUE - Data stream effect on side
function DataStream() {
  return (
    <>
      <div className="absolute right-0 top-0 bottom-0 w-px overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-32 bg-gradient-to-b from-transparent via-violet-500/40 to-transparent"
          animate={{ y: ["-100%", "800%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-px overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
          animate={{ y: ["800%", "-100%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </>
  );
}

// UNIQUE - Hexagon pattern overlay
function HexOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 border border-violet-500/20"
          style={{
            left: `${15 + (i % 2) * 60}%`,
            top: `${20 + Math.floor(i / 2) * 50}%`,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          animate={{
            rotate: [0, 60, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Project card
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <GlassCard variant="hover" className="h-full group overflow-hidden relative">
        {/* Tech corner brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-violet-500/40" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-500/40" />

        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-medium">
              <Star size={12} className="fill-yellow-400" />
              Featured
            </div>
          </div>
        )}

        <div className="h-48 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 relative overflow-hidden">
          {/* Scan line */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="flex items-center justify-center h-full">
            <motion.span 
              className="text-6xl opacity-50"
              whileHover={{ scale: 1.1 }}
            >
              💻
            </motion.span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-500">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              whileHover={{ x: 3 }}
            >
              <Github size={16} />
              Code
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ x: 3 }}
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// Featured project card
function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className="overflow-hidden relative" variant="glow">
        {/* Tech corners */}
        <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-violet-500/50" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-cyan-500/50" />

        <div className="grid lg:grid-cols-2 gap-0">
          <div className="h-64 lg:h-auto bg-gradient-to-br from-violet-500/15 to-cyan-500/15 relative overflow-hidden">
            {/* Scan effect */}
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl opacity-30">🚀</span>
            </div>
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium">
                <Star size={14} className="fill-yellow-400" />
                Featured Project
              </div>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
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
                  className="glow-button flex items-center gap-2 px-4 py-2 rounded-lg text-white"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

// Loading spinner
function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <motion.div
        className="w-12 h-12 border-2 border-violet-500/30 border-t-violet-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-gray-400 text-sm">Loading projects...</p>
    </div>
  );
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const featuredProject = projects.find((p) => p.featured);
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });
  const nonFeaturedProjects = filteredProjects.filter(
    (p) => activeCategory !== "all" || p.id !== featuredProject?.id
  );

  return (
    <div className="relative overflow-hidden">
      {/* UNIQUE tech-futuristic background animations (same violet color theme) */}
      <TechCircuitGrid />
      <FloatingCodeSymbols />
      <DataStream />
      <HexOverlay />
      
      {/* Same violet/cyan glowing orbs as other pages */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero */}
      <section className="px-4 pt-12 pb-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30 mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.3)",
                  "0 0 40px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code2 className="text-violet-400" size={28} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of projects I&apos;ve built, ranging from web applications
              to backend APIs and code experiments
            </p>

            <motion.div
              className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, i) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-violet-500/20 border border-violet-500/50 text-violet-300"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} />
                  {category.label}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {loading && <LoadingSpinner />}

      {!loading && featuredProject && activeCategory === "all" && (
        <SectionWrapper className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <FeaturedProjectCard project={featuredProject} />
          </div>
        </SectionWrapper>
      )}

      {!loading && (
        <SectionWrapper className="px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {nonFeaturedProjects.length > 0 ? (
                <motion.div
                  layout
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {nonFeaturedProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500">
                    No projects found in this category.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SectionWrapper>
      )}
    </div>
  );
}
