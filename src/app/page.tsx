"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles, Code, Trophy, Rocket, Terminal } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/config/site";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "Years Coding": Code,
  "Tech Stack": Sparkles,
  "Projects Built": Trophy,
  "Contributions": Rocket,
};

// Typing animation component
function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-violet-400`}>|</span>
    </span>
  );
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

// Matrix rain effect
function MatrixRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-500 font-mono text-xs"
          style={{ left: `${i * 5}%` }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: ["-10%", "110%"],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        >
          {String.fromCharCode(0x30A0 + Math.random() * 96)}
        </motion.div>
      ))}
    </div>
  );
}

// Scan line effect
function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none"
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  );
}

// Glitch text effect
function GlitchText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        textShadow: [
          "0 0 0 transparent",
          "2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,255,255,0.5)",
          "0 0 0 transparent",
          "-2px 0 0 rgba(255,0,0,0.5), 2px 0 0 rgba(0,255,255,0.5)",
          "0 0 0 transparent",
        ],
      }}
      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
    >
      {children}
    </motion.span>
  );
}

// Floating tech icons
function FloatingTechOrbit() {
  const techs = ["⚛️", "🔷", "📦", "🚀", "💻", "⚡"];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {techs.map((tech, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: Math.cos((i / techs.length) * Math.PI * 2) * 180,
            y: Math.sin((i / techs.length) * Math.PI * 2) * 180,
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
}

// Pulse ring effect
function PulseRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full border border-violet-500/20"
          animate={{
            scale: [1, 2, 2],
            opacity: [0.5, 0.2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain />
      <ScanLine />
      
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 relative">
        <PulseRings />
        
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 relative z-10">
              {/* Badge with pulse */}


              {/* Heading with glitch */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Terminal className="text-violet-400" size={20} />
                  <span className="text-lg text-violet-400 font-mono">
                    <TypewriterText text="Hello, I'm" />
                  </span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                >
                  <GlitchText>
                    <span className="gradient-text">{siteConfig.name}</span>
                  </GlitchText>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-2 flex-wrap"
                >
                  {siteConfig.role.split("•").map((role, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      {role.trim()}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Description with typing effect */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-gray-400 leading-relaxed max-w-lg font-mono text-sm border-l-2 border-violet-500/50 pl-4"
              >
                {siteConfig.description}
              </motion.p>

              {/* CTA Buttons with hover effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/projects">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="glow-button px-6 py-3 rounded-xl font-medium text-white flex items-center gap-2 group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    View Projects
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.div>
                </Link>
                <Link href="/cv.pdf" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl font-medium border border-white/20 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download CV
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Holographic Code Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block relative"
            >
              <FloatingTechOrbit />
              
              <HolographicCard>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GlassCard className="p-8 relative overflow-hidden backdrop-blur-xl">
                    {/* Holographic overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-cyan-500/10 to-pink-500/10"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(139,92,246,0.1), rgba(6,182,212,0.1), rgba(236,72,153,0.1))",
                          "linear-gradient(90deg, rgba(6,182,212,0.1), rgba(236,72,153,0.1), rgba(139,92,246,0.1))",
                          "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(139,92,246,0.1), rgba(6,182,212,0.1))",
                        ],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />

                    {/* Code snippet visual */}
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-3 h-3 rounded-full bg-red-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="w-3 h-3 rounded-full bg-yellow-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-3 h-3 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                        />
                        <span className="ml-4 text-sm text-gray-500 font-mono">
                          developer.ts
                        </span>
                      </div>
                      
                      <div className="font-mono text-sm space-y-2">
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <span className="text-violet-400">const</span>{" "}
                          <span className="text-cyan-400">developer</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-yellow-400">{`{`}</span>
                        </motion.p>
                        <motion.p
                          className="pl-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                        >
                          <span className="text-gray-400">name:</span>{" "}
                          <span className="text-green-400">&quot;{siteConfig.name}&quot;</span>,
                        </motion.p>
                        <motion.p
                          className="pl-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 }}
                        >
                          <span className="text-gray-400">skills:</span>{" "}
                          <span className="text-cyan-400">[</span>
                          <span className="text-green-400">&quot;React&quot;</span>,{" "}
                          <span className="text-green-400">&quot;Node.js&quot;</span>,{" "}
                          <span className="text-green-400">&quot;TypeScript&quot;</span>
                          <span className="text-cyan-400">]</span>,
                        </motion.p>
                        <motion.p
                          className="pl-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4 }}
                        >
                          <span className="text-gray-400">passion:</span>{" "}
                          <span className="text-green-400">&quot;Building amazing apps&quot;</span>,
                        </motion.p>
                        <motion.p
                          className="pl-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.6 }}
                        >
                          <span className="text-gray-400">status:</span>{" "}
                          <motion.span
                            className="text-green-400"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            &quot;Available&quot;
                          </motion.span>{" "}
                          <motion.span
                            animate={{ rotate: [0, 20, -20, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="inline-block"
                          >
                            ✨
                          </motion.span>
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.8 }}
                        >
                          <span className="text-yellow-400">{`}`}</span>;
                        </motion.p>
                      </div>
                    </div>

                    {/* Glow effects */}
                    <motion.div
                      className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/30 rounded-full blur-3xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"
                      animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                  </GlassCard>
                </motion.div>
              </HolographicCard>

              {/* Floating badges with glow */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(6, 182, 212, 0.3)",
                      "0 0 20px rgba(6, 182, 212, 0.5)",
                      "0 0 10px rgba(6, 182, 212, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="rounded-2xl"
                >
                  <GlassCard className="px-3 py-1.5 text-xs font-medium text-cyan-400 border-cyan-500/30">
                    TypeScript
                  </GlassCard>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(139, 92, 246, 0.3)",
                      "0 0 20px rgba(139, 92, 246, 0.5)",
                      "0 0 10px rgba(139, 92, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="rounded-2xl"
                >
                  <GlassCard className="px-3 py-1.5 text-xs font-medium text-violet-400 border-violet-500/30">
                    Full-Stack
                  </GlassCard>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8"
                animate={{ x: [0, 5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <GlassCard className="px-3 py-1.5 text-xs font-medium text-pink-400 border-pink-500/30">
                  React 19
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section with stagger */}
      <SectionWrapper className="px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-violet-400" size={32} />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A snapshot of my journey in software development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.title] || Sparkles;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <GlassCard
                    variant="hover"
                    className="p-6 h-full text-center group relative overflow-hidden"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="mb-4 inline-flex p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <motion.h3
                        className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                        animate={{
                          textShadow: [
                            "0 0 10px rgba(139, 92, 246, 0.3)",
                            "0 0 20px rgba(139, 92, 246, 0.5)",
                            "0 0 10px rgba(139, 92, 246, 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {highlight.value}
                      </motion.h3>
                      <p className="font-medium text-white mb-1">
                        {highlight.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {highlight.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section with cyberpunk style */}
      <SectionWrapper className="px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 md:p-12 text-center relative overflow-hidden">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(90deg, rgba(139,92,246,0.5), rgba(6,182,212,0.5), rgba(236,72,153,0.5), rgba(139,92,246,0.5))",
                  backgroundSize: "300% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[2px] rounded-xl bg-gray-900/95" />

              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Let&apos;s Build Something{" "}
                    <GlitchText>
                      <span className="gradient-text">Amazing</span>
                    </GlitchText>{" "}
                    Together
                  </h2>
                </motion.div>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                  I&apos;m always excited to work on new projects and collaborate
                  with creative minds. Have an idea? Let&apos;s talk!
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="glow-button px-8 py-4 rounded-xl font-medium text-white inline-flex items-center gap-2 group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                    Get In Touch
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </motion.button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
