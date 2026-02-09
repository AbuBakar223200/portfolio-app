"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Heart, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: siteConfig.socials.github, icon: Github, label: "GitHub" },
  { href: siteConfig.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.socials.facebook || "#", icon: Facebook, label: "Facebook" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  { href: `tel:${siteConfig.mobile}`, icon: Phone, label: "Phone" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Gradient line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.02 }}
            >
              {siteConfig.name}
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.role}
            </p>
            <p className="text-gray-500 text-sm">
              {siteConfig.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:pl-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") || social.href.startsWith("tel:") || social.href.startsWith("/") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") || social.href.startsWith("tel:") || social.href.startsWith("/") ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} {siteConfig.name}. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500 fill-red-500" />
            </motion.span>
          </p>
          
          {/* Animated dot */}
          <div className="flex items-center gap-2">
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-gray-500 text-sm">Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
