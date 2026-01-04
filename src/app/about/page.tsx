"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  MapPin, GraduationCap, Briefcase, Award, User,
  Code2, Server, Database, Globe, Terminal, Cpu,
  Layout, Box, Layers, GitBranch, TerminalSquare, Figma,
  Zap, Key, Coffee
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
  { name: "Node.js", category: "backend", level: 80, icon: Server },
  { name: "Express.js", category: "backend", level: 80, icon: Box },
  { name: "MongoDB", category: "backend", level: 75, icon: Database },
  { name: "MySQL Server", category: "backend", level: 75, icon: Database },
  { name: "REST APIs", category: "backend", level: 85, icon: Globe },
  { name: "JWT Auth", category: "backend", level: 80, icon: Key },
  { name: "Zustand", category: "backend", level: 70, icon: Database },
  
  // Languages & Tools
  { name: "C", category: "tools", level: 85, icon: Code2 },
  { name: "C++", category: "tools", level: 80, icon: Cpu },
  { name: "Java", category: "tools", level: 80, icon: Coffee },
  { name: "Python", category: "tools", level: 75, icon: TerminalSquare },
  { name: "Git & GitHub", category: "tools", level: 85, icon: GitBranch },
  { name: "Jira", category: "tools", level: 70, icon: Layout },
  { name: "VS Code", category: "tools", level: 95, icon: Terminal },
  { name: "Figma", category: "tools", level: 60, icon: Figma },
];

const timeline: TimelineItem[] = [
  {
    year: "2016-2017",
    title: "Secondary School Certificate",
    description: "Shamsul Hoque Khan School & College | GPA: 5.00",
    type: "education",
  },
  {
    year: "2018-2019",
    title: "Higher Secondary Certificate",
    description: "Dhaka College | GPA: 5.00",
    type: "education",
  },
  {
    year: "2021-Present",
    title: "B.Sc. in CSE",
    description: "United International University, Dhaka | Current CGPA: 3.84",
    type: "education",
  },
  {
    year: "2023",
    title: "AOOP Lab's Project",
    description: "1st Runner-up (Fall-2023) - Recognized for outstanding project implementation",
    type: "achievement",
  },
  {
    year: "2024",
    title: "Undergraduate Teaching Assistant",
    description: "Selected as an Undergraduate Teaching Assistant for 4 consecutive trimesters",
    type: "work",
  },
  // {
  //   year: "2024",
  //   title: "Advyon Legal-Tech Platform",
  //   description: "Contributed to modern legal-tech platform with React 19, Vite, and AI integration",
  //   type: "achievement",
  // },
  {
    year: "2025",
    title: "SAD Lab's Project",
    description: "6th Runner-up (Summer-2025) - System Analysis and Design project competition",
    type: "achievement",
  },
];

const categoryLabels: Record<string, string> = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  tools: "Languages & Tools",
};

const timelineIcons = {
  education: GraduationCap,
  work: Briefcase,
  achievement: Award,
};

// Helper to get skill label
function getSkillLabel(level: number) {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 60) return "Intermediate";
  return "Familiar";
}

// Holographic card effect
function HolographicCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotateX.set((e.clientY - centerY) / 20);
    rotateY.set((centerX - e.clientX) / 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// UNIQUE - DNA Helix Animation (bio/personal theme)
function DNAHelix() {
  return (
    <div className="absolute left-8 top-0 bottom-0 pointer-events-none overflow-hidden opacity-30">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full border border-violet-500/50"
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
          className="absolute w-3 h-3 rounded-full border border-cyan-500/50"
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

// UNIQUE - Neural network nodes (brain/learning theme)
function NeuralNetwork() {
  const nodes = [
    { x: 85, y: 15 }, { x: 92, y: 25 }, { x: 78, y: 35 },
    { x: 88, y: 45 }, { x: 95, y: 55 }, { x: 82, y: 65 },
    { x: 90, y: 75 }, { x: 85, y: 85 },
  ];

  return (
    <div className="absolute right-0 top-0 bottom-0 w-40 pointer-events-none overflow-hidden">
      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-violet-500/40"
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
      {/* Connecting lines (pulse effect) */}
      {nodes.slice(0, -1).map((node, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-px bg-gradient-to-b from-violet-500/20 to-cyan-500/20"
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

// UNIQUE - Floating personality traits
function FloatingTraits() {
  const traits = ['Creative', 'Learner', 'Team Player', 'Problem Solver', 'Curious'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {traits.map((trait, i) => (
        <motion.span
          key={i}
          className="absolute text-xs font-medium text-violet-500/15"
          style={{
            left: `${15 + i * 18}%`,
            top: `${8 + (i % 3) * 35}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.2, 0.1],
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

// UNIQUE - Pulse wave from center
function PulseWave() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full border border-violet-500/10"
          animate={{
            scale: [0.5, 2.5],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* UNIQUE futuristic background animations */}
      <DNAHelix />
      <NeuralNetwork />
      <FloatingTraits />
      <PulseWave />

      {/* Same violet/cyan glowing orbs for color consistency */}
      <motion.div
        className="absolute top-40 left-20 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
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
              <User className="text-violet-400" size={28} />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know more about my background, skills, and journey in tech
            </p>

            <motion.div
              className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <SectionWrapper className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo / Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="p-8 relative overflow-hidden">
                {/* DNA decoration on card */}
                <motion.div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-violet-500/30 via-cyan-500/30 to-violet-500/30 rounded-full"
                  animate={{ height: ["30%", "50%", "30%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="aspect-square relative rounded-xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                  <img 
                    src="/abu.jpeg" 
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-violet-500/30 blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-cyan-500/30 blur-2xl" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {siteConfig.name}
                  </h3>
                  <p className="text-violet-400 text-sm font-medium mb-1">
                    Undergraduate Teaching Assistant
                  </p>
                  <p className="text-gray-400 flex items-center justify-center gap-2">
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
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">
                A Passionate <span className="gradient-text">Developer</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I&apos;ve had the chance to work as a <span className="text-violet-400 font-medium">Undergraduate Teaching Assistant</span> 3 times before, 
                  and it&apos;s been a great experience each time. I&apos;m someone who&apos;s responsible and organized, 
                  and I genuinely enjoy helping others understand new things.
                </p>
                <p>
                  Being able to <span className="text-cyan-400">support students</span> and be part of their learning process 
                  is something I find really fulfilling, so I&apos;m excited for the opportunity to do it again.
                </p>
                <p>
                  Beyond teaching, I&apos;ve built projects like the <span className="text-cyan-400">Advyon legal-tech platform</span>, 
                  and participated in multiple project competitions like AOOP and SAD Labs.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { label: "Years Coding", value: "4+" },
                  { label: "Projects", value: "8+" },
                  { label: "Team Projects", value: "4+" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <GlassCard
                      className="p-4 text-center"
                      variant="hover"
                    >
                      <motion.p 
                        className="text-2xl font-bold gradient-text"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline Section */}
      <SectionWrapper className="px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-400">Key milestones in my development career</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line with pulse */}
            <motion.div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-pink-500"
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
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${
                      isEven ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <GlassCard className="p-6" variant="hover">
                      <span className="text-sm text-violet-400 font-medium">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Icon with pulse */}
                  <motion.div 
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-violet-500/20 border-2 border-violet-500 flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(139, 92, 246, 0.3)",
                        "0 0 15px rgba(139, 92, 246, 0.5)",
                        "0 0 0px rgba(139, 92, 246, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon size={14} className="text-violet-400" />
                  </motion.div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper className="px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-gray-400">Technologies I work with regularly</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              // Define brand colors
              const getColor = (name: string) => {
                const colors: Record<string, string> = {
                  'React': '#61DAFB',
                  'Vite': '#646CFF',
                  'JavaScript': '#F7DF1E',
                  'Tailwind CSS': '#38B2AC',
                  'HTML/CSS': '#E34F26',
                  'Framer Motion': '#E10098',
                  'JavaFX': '#007396',
                  'Node.js': '#339933',
                  'Express.js': '#000000',
                  'MongoDB': '#47A248',
                  'MySQL Server': '#4479A1',
                  'REST APIs': '#0096FF',
                  'JWT Auth': '#D63AFF',
                  'Zustand': '#443E38',
                  'Java': '#ED8B00',
                  'Python': '#3776AB',
                  'C': '#A8B9CC',
                  'C++': '#00599C',
                  'Git & GitHub': '#F05032',
                  'Jira': '#0052CC',
                  'VS Code': '#007ACC',
                  'Figma': '#F24E1E',
                };
                return colors[name] || '#8b5cf6';
              };

              const color = getColor(skill.name);
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <GlassCard className="p-6 flex flex-col items-center justify-center gap-4 text-center h-40 relative overflow-hidden bg-zinc-900/50 hover:bg-zinc-800/80 transition-colors border-zinc-800">
                     {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
                    />

                    {/* Side Glow Border */}
                    <div 
                      className="absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ 
                        borderColor: color,
                        boxShadow: `0 0 20px ${color}40, inset 0 0 10px ${color}20` 
                      }}
                    />
                    
                    <div 
                      className="p-3 rounded-xl bg-zinc-950/50 relative z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{ boxShadow: `0 0 20px ${color}15` }}
                    >
                      <Icon size={40} style={{ color: color }} />
                    </div>
                    
                    <h3 className="font-medium text-gray-300 group-hover:text-white transition-colors relative z-10">
                      {skill.name}
                    </h3>

                    {/* Level Badge (Optional, small) */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-400 font-mono">
                         {getSkillLabel(skill.level)}
                       </span>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
