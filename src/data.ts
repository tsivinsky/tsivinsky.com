import { IProject, ISkills, ISocialLink } from "./types";

export const projects: Array<IProject> = [
  {
    name: "Tic Tac Toe",
    description:
      "Simple Tic Tac Toe game written in vanilla JavaScript that I built when I was bored.",
    githubURL: "https://github.com/tsivinsky/tic-tac-toe",
    homepage: "https://tic-tac-toe.tsivinsky.com",
  },
];

export const skills: ISkills = {
  frontend: [
    {
      name: "HTML5",
    },
    { name: "CSS3" },
    { name: "SCSS" },
    { name: "JavaScript ES6" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Zustand" },
  ],
  backend: [
    {
      name: "Node.js",
    },
    {
      name: "Express",
    },
    {
      name: "Mongoose",
    },
    {
      name: "SQL",
    },
  ],
  other: [
    {
      name: "Git",
    },
  ],
};

export const socialLinks: Array<ISocialLink> = [
  {
    name: "GitHub",
    url: "https://github.com/tsivinsky",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/daniilcodes",
  },
];
