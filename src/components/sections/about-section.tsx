"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  User,
  Code2,
  Server,
  Database,
  Globe,
  Terminal,
  Cpu,
  Layout,
  Box,
  Layers,
  GitBranch,
  TerminalSquare,
  Figma,
  Zap,
  Key,
  Coffee,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/config/site";
import type { Skill, TimelineItem } from "@/types";

const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 90, icon: Code2 },
  { name: "Vite", category: "frontend", level: 85, icon: Zap },
  { name: "JavaScript", category: "frontend", level: 90, icon: Terminal },
  { name: "HTML/CSS", category: "frontend", level: 95, icon: Globe },
  { name: "Tailwind CSS", category: "frontend", level: 95, icon: Layout },
  { name: "Framer Motion", category: "frontend", level: 75, icon: Layers },
  { name: "JavaFX", category: "frontend", level: 80, icon: Coffee },

  // Backend & Database
  { name: "Node.js", category: "backend", level: 85, icon: Server },
  { name: "Express.js", category: "backend", level: 85, icon: Box },
  { name: "MongoDB", category: "backend", level: 80, icon: Database },
  { name: "MySQL Server", category: "backend", level: 80, icon: Database },
  { name: "REST APIs", category: "backend", level: 90, icon: Globe },
  { name: "JWT Auth", category: "backend", level: 85, icon: Key },
  { name: "Zustand", category: "backend", level: 80, icon: Database },

  // Languages & Tools
  { name: "C", category: "tools", level: 90, icon: Code2 },
  { name: "C++", category: "tools", level: 85, icon: Cpu },
  { name: "Java", category: "tools", level: 85, icon: Coffee },
  { name: "Python", category: "tools", level: 80, icon: TerminalSquare },
  { name: "Git & GitHub", category: "tools", level: 90, icon: GitBranch },
  { name: "Jira", category: "tools", level: 75, icon: Layout },
  { name: "VS Code", category: "tools", level: 95, icon: Terminal },
  { name: "Figma", category: "tools", level: 65, icon: Figma },
];

const timeline: TimelineItem[] = [
  {
    year: "2016 - 2017",
    title: "Secondary School Certificate (SSC)",
    description: "Shamsul Hoque Khan School & College | GPA: 5.00 / 5.00 (Science)",
    type: "education",
  },
  {
    year: "2018 - 2019",
    title: "Higher Secondary Certificate (HSC)",
    description: "Dhaka College | GPA: 5.00 / 5.00 (Science)",
    type: "education",
  },
  {
    year: "2021 - Present",
    title: "B.Sc. in Computer Science & Engineering",
    description: "United International University (UIU), Dhaka | CGPA: 3.88 / 4.00 (129/138 Credits Completed)",
    type: "education",
  },
  {
    year: "2023",
    title: "Advanced OOP Project Competition — 1st Runner-Up",
    description: "Fall 2023 Showcase — Recognized for best-in-class object-oriented design and desktop architecture.",
    type: "achievement",
  },
  {
    year: "2024 - Present",
    title: "Undergraduate Teaching Assistant (6 Consecutive Trimesters)",
    description: "Selected by faculty to mentor 300+ students across OOP, Data Structures, and Software Engineering labs.",
    type: "work",
  },
  {
    year: "2025",
    title: "System Analysis & Design (SAD) Showcase — 6th Runner-Up",
    description: "Summer 2025 Competition — Recognized for architectural modeling, business workflows, and system design.",
    type: "achievement",
  },
  {
    year: "2025",
    title: "CSE Capstone Project Show — Champion (Fall 2025)",
    description: "Awarded Champion in Software Engineering Lab Project Show for outstanding full-stack execution and architecture.",
    type: "achievement",
  },
];

const timelineIcons = {
  education: GraduationCap,
  work: Briefcase,
  achievement: Award,
};

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & DB" },
  { id: "tools", label: "Languages & Tools" },
];

// DNA Helix Animation
function DNAHelix() {
  return (
    <div className="absolute left-4 md:left-8 top-0 bottom-0 pointer-events-none overflow-hidden opacity-25">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full border border-[#590907]/50"
          style={{ top: `${i * 8}%` }}
          animate={{
            x: [0, 40, 0, -40, 0],
            scale: [1, 1.2, 1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`pair-${i}`}
          className="absolute w-3 h-3 rounded-full border border-[#A5A79B]/50"
          style={{ top: `${i * 8}%` }}
          animate={{
            x: [0, -40, 0, 40, 0],
            scale: [1, 1.2, 1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Neural Network Nodes
function NeuralNetwork() {
  const nodes = [
    { x: 88, y: 15 },
    { x: 94, y: 30 },
    { x: 80, y: 45 },
    { x: 92, y: 60 },
    { x: 84, y: 75 },
    { x: 90, y: 90 },
  ];

  return (
    <div className="absolute right-0 top-0 bottom-0 w-40 pointer-events-none overflow-hidden">
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#590907]/40"
          style={{ right: `${100 - node.x}%`, top: `${node.y}%` }}
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
      {nodes.slice(0, -1).map((node, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-px bg-gradient-to-b from-[#590907]/20 to-[#A5A79B]/20"
          style={{
            right: `${100 - node.x}%`,
            top: `${node.y}%`,
            height: `${nodes[i + 1].y - node.y}%`,
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

// Floating personality traits
function FloatingTraits() {
  const traits = ["Architecture", "Clean Code", "Leadership", "Mentorship", "Problem Solver"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {traits.map((trait, i) => (
        <motion.span
          key={i}
          className="absolute text-xs font-medium text-[#590907]/20"
          style={{
            left: `${15 + i * 18}%`,
            top: `${8 + (i % 3) * 35}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          {trait}
        </motion.span>
      ))}
    </div>
  );
}

const skillColors: Record<string, string> = {
  React: "#61DAFB",
  Vite: "#646CFF",
  JavaScript: "#F7DF1E",
  "Tailwind CSS": "#38B2AC",
  "HTML/CSS": "#E34F26",
  "Framer Motion": "#E10098",
  JavaFX: "#007396",
  "Node.js": "#339933",
  "Express.js": "#E8D2B5",
  MongoDB: "#47A248",
  "MySQL Server": "#4479A1",
  "REST APIs": "#0096FF",
  "JWT Auth": "#D63AFF",
  Zustand: "#443E38",
  Java: "#ED8B00",
  Python: "#3776AB",
  C: "#A8B9CC",
  "C++": "#00599C",
  "Git & GitHub": "#F05032",
  Jira: "#0052CC",
  "VS Code": "#007ACC",
  Figma: "#F24E1E",
};

export function AboutSection() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => {
    if (activeSkillCategory === "all") return true;
    return skill.category === activeSkillCategory;
  });

  return (
    <section id="about" className="relative overflow-hidden scroll-mt-24 py-16">
      {/* Background visual accents */}
      <DNAHelix />
      <NeuralNetwork />
      <FloatingTraits />

      <motion.div
        className="absolute top-40 left-10 w-40 h-40 rounded-full bg-[#590907]/10 blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-48 h-48 rounded-full bg-[#A5A79B]/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
              <User className="text-[#a04040]" size={28} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know more about my engineering background, mentorship, and technical foundation
            </p>

            <motion.div
              className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#590907] to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bio Section */}
      <SectionWrapper className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="p-8 relative overflow-hidden">
                <motion.div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-[#590907]/30 via-[#A5A79B]/30 to-[#590907]/30 rounded-full"
                  animate={{ height: ["30%", "50%", "30%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="aspect-square relative rounded-xl overflow-hidden bg-gradient-to-br from-[#590907]/20 to-[#A5A79B]/20">
                  <img
                    src="/abu.jpeg"
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#590907]/30 blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-[#A5A79B]/30 blur-2xl" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{siteConfig.name}</h3>
                  <p className="text-[#a04040] text-sm font-medium mb-1">
                    Full-Stack Software Engineer & Teaching Assistant
                  </p>
                  <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
                    <MapPin size={16} />
                    {siteConfig.location}
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold">
                A Dedicated <span className="gradient-text">Software Engineer & Mentor</span>
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  As an <span className="text-[#a04040] font-medium">Undergraduate Teaching Assistant for 6 consecutive trimesters</span> at 
                  United International University, I have had the privilege of mentoring over 300 students in Object-Oriented 
                  Programming, Data Structures, and Software Engineering methodologies.
                </p>
                <p>
                  I specialize in architecting <span className="text-[#A5A79B]">production-grade web platforms</span>, 
                  combining modern React ecosystems with high-throughput Node.js microservices and clean relational/NoSQL databases.
                </p>
                <p>
                  My engineering journey is marked by competition-tested execution—from pioneering the{" "}
                  <span className="text-[#A5A79B]">Advyon legal-tech platform</span> to taking{" "}
                  <span className="text-[#a04040] font-medium">Champion in the Software Engineering Lab Showcase</span> and 
                  leading collegiate development teams.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { label: "Years Coding", value: "4+" },
                  { label: "Projects Built", value: "10+" },
                  { label: "Students Mentored", value: "300+" },
                ].map((stat, i) => (
                  <motion.div key={stat.label} whileHover={{ scale: 1.05, y: -3 }}>
                    <GlassCard className="p-4 text-center" variant="hover">
                      <motion.p
                        className="text-2xl font-bold gradient-text"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h3>
            <p className="text-gray-400">Key milestones across my academic & software engineering career</p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#590907] via-[#A5A79B] to-[#E8D2B5]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {timeline.map((item, index) => {
              const Icon = timelineIcons[item.type];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${
                      isEven ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <GlassCard className="p-6" variant="hover">
                      <span className="text-sm text-[#a04040] font-semibold">{item.year}</span>
                      <h4 className="text-xl font-bold text-white mt-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                    </GlassCard>
                  </div>

                  <motion.div
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#590907]/20 border-2 border-[#590907] flex items-center justify-center z-10"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(89, 9, 7, 0.3)",
                        "0 0 15px rgba(89, 9, 7, 0.5)",
                        "0 0 0px rgba(89, 9, 7, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon size={14} className="text-[#a04040]" />
                  </motion.div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h3>
            <p className="text-gray-400">Core technologies, frameworks, and programming languages I work with</p>
          </motion.div>

          {/* Skill Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveSkillCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all cursor-pointer ${
                  activeSkillCategory === cat.id
                    ? "bg-[#590907]/25 border border-[#590907]/50 text-[#E8D2B5]"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <AnimatePresence>
              {filteredSkills.map((skill, index) => {
                const Icon = skill.icon;
                const color = skillColors[skill.name] || "#590907";

                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                    whileHover={{ y: -8 }}
                    className="group"
                  >
                    <GlassCard className="p-6 flex flex-col items-center justify-center gap-4 text-center h-40 relative overflow-hidden bg-zinc-900/50 hover:bg-zinc-800/80 transition-colors border-zinc-800">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
                        }}
                      />

                      <div
                        className="absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          borderColor: color,
                          boxShadow: `0 0 20px ${color}40, inset 0 0 10px ${color}20`,
                        }}
                      />

                      <div
                        className="p-3 rounded-xl bg-zinc-950/50 relative z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{ boxShadow: `0 0 20px ${color}15` }}
                      >
                        <Icon size={36} style={{ color: color }} />
                      </div>

                      <h4 className="font-medium text-gray-300 group-hover:text-white transition-colors relative z-10 text-sm">
                        {skill.name}
                      </h4>

                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-400 font-mono capitalize">
                          {skill.category}
                        </span>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
