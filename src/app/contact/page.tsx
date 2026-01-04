"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  Facebook,
  MapPin,
  Loader2,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Zap,
  MessageCircle,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { siteConfig } from "@/config/site";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const socialLinks = [
  { href: siteConfig.socials.github, icon: Github, label: "GitHub" },
  { href: siteConfig.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.socials.facebook || "#", icon: Facebook, label: "Facebook" },
];

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-violet-500/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`cyan-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-500/40"
          style={{
            right: `${10 + i * 20}%`,
            bottom: `${15 + i * 20}%`,
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

// Animated ring decoration
function AnimatedRing({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full border border-violet-500/20 ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Something went wrong");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background decorations */}
      <FloatingParticles />
      <AnimatedRing className="w-96 h-96 -top-48 -right-48" />
      <AnimatedRing className="w-64 h-64 -bottom-32 -left-32" />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-violet-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
            {/* Animated icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30 mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.3)",
                  "0 0 40px rgba(139, 92, 246, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <MessageCircle size={36} className="text-violet-400" />
              </motion.div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear
              from you. Send me a message and I&apos;ll get back to you as soon as
              possible.
            </p>

            {/* Animated line */}
            <motion.div
              className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <SectionWrapper className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <GlassCard className="p-8 relative overflow-hidden">
                {/* Form glow effect */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-violet-500/20 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="text-violet-400" size={24} />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white">
                    Send a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                          errors.name
                            ? "border-red-500/50"
                            : "border-white/10 focus:border-violet-500/50"
                        } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-400"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                          errors.email
                            ? "border-red-500/50"
                            : "border-white/10 focus:border-violet-500/50"
                        } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-400"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/50 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message
                          ? "border-red-500/50"
                          : "border-white/10 focus:border-violet-500/50"
                      } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all resize-none`}
                      placeholder="Tell me about your project or idea..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-400"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)" }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full glow-button px-6 py-4 rounded-xl font-medium text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                        <Zap size={16} className="text-yellow-400" />
                      </>
                    )}
                  </motion.button>

                  {/* Status Message */}
                  {submitStatus !== "idle" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex items-center gap-2 p-4 rounded-lg ${
                        submitStatus === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-400"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                        >
                          <CheckCircle size={20} />
                        </motion.div>
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      {statusMessage}
                    </motion.div>
                  )}
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Details */}
              <GlassCard className="p-6 relative overflow-hidden">
                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Mail size={18} className="text-violet-400" />
                  </motion.div>
                  Contact Information
                </h3>
                <div className="space-y-4 relative z-10">
                  <motion.a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-sm">{siteConfig.email}</span>
                  </motion.a>
                  <motion.div
                    className="flex items-center gap-3 text-gray-400"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <MapPin size={18} />
                    </div>
                    <span className="text-sm">{siteConfig.location}</span>
                  </motion.div>
                </div>
              </GlassCard>

              {/* Social Links */}
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -5,
                        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </GlassCard>

              {/* Quick Response Card */}
              <GlassCard className="p-6 relative overflow-hidden" variant="glow">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="flex items-start gap-3 relative z-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.4)",
                        "0 0 0 10px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-green-500 mt-1"
                  />
                  <div>
                    <h3 className="text-white font-medium mb-1 flex items-center gap-2">
                      Quick Response
                      <motion.span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                      >
                        ⚡
                      </motion.span>
                    </h3>
                    <p className="text-gray-400 text-sm">
                      I typically respond within 24 hours. Looking forward to
                      hearing from you!
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.2)",
                      "0 0 40px rgba(139, 92, 246, 0.4)",
                      "0 0 20px rgba(139, 92, 246, 0.2)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-400"
                  />
                  Open for opportunities
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
