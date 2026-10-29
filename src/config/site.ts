export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  mobile: string;
  description: string;
  socials: {
    github: string;
    linkedin: string;
    facebook?: string;
  };
  highlights: {
    title: string;
    value: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Md. Abu Bakar",
  role: "Full-Stack Software Engineer • Undergraduate Teaching Assistant • CSE Senior",
  location: "Dhaka, Bangladesh",
  email: "abubakarmunshi786@gmail.com",
  mobile: "+8801521703968",
  description:
    "Full-Stack Software Engineer and 6x Undergraduate Teaching Assistant with deep expertise in modern React ecosystems, Node.js, and scalable web architecture. Proven track record building enterprise legal-tech platforms, educational software systems, and championing university engineering competitions.",
  socials: {
    github: "https://github.com/AbuBakar223200",
    linkedin: "https://www.linkedin.com/in/abu-bakar-87b9aa228/",
    facebook: "https://www.facebook.com/abu.bakar.168288/",
  },
  highlights: [
    {
      title: "Years Coding",
      value: "4+",
      description: "Engineering digital solutions since 2021",
    },
    {
      title: "Tech Stack",
      value: "15+",
      description: "React 19, Next.js, Node.js, C++ & Databases",
    },
    {
      title: "Projects Built",
      value: "10+",
      description: "Production web platforms, APIs & software",
    },
    {
      title: "Students Mentored",
      value: "300+",
      description: "6 consecutive trimesters as Teaching Assistant",
    },
  ],
};
