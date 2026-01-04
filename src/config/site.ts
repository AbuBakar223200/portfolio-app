export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
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
  role: "CSE Student • Teaching Assistant • Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "abubakarmunshi786@gmail.com",
  description:
    "Passionate about building modern web applications with cutting-edge technologies. I specialize in React, Next.js, and Node.js, with experience in legal-tech and educational platforms. Currently seeking opportunities to contribute to innovative projects.",
  socials: {
    github: "https://github.com/AbuBakar223200",
    linkedin: "https://www.linkedin.com/in/abu-bakar-87b9aa228/",
    facebook: "https://www.facebook.com/abu.bakar.168288/",
  },
  highlights: [
    {
      title: "Years Coding",
      value: "4+",
      description: "Building digital experiences since 2021",
    },
    {
      title: "Tech Stack",
      value: "10+",
      description: "React, Vite, Node.js, TypeScript & more",
    },
    {
      title: "Projects Built",
      value: "8+",
      description: "From web apps to collaborative platforms",
    },
    {
      title: "Contributions",
      value: "5+",
      description: "Open source and team projects",
    },
  ],
};
