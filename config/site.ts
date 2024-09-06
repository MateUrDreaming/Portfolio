export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Parin's Portfolio",
  description: "A Modern portfolio website for Parin Kasabia.",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Journey",
      href: "#Education",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Journey",
      href: "#Education",
    },
  ],
  links: {
    github: "https://github.com/MateUrDreaming",
    discord: "https://discord.gg/9b6yyZKmH4",
    // eslint-disable-next-line prettier/prettier
    linkedin: "https://www.linkedin.com/in/parinkasabia/"
  },
};
