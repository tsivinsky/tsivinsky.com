import { Router } from "next/router";

export interface IProject {
  name: string;
  description: string;
  githubURL: string;
  homepage: string;
}

export interface ISocialLink {
  name: string;
  url: string;
}

export interface ISkills {
  frontend: Array<ISkill>;
  backend: Array<ISkill>;
  other: Array<ISkill>;
}

interface ISkill {
  name: string;
}

export interface PageProps {
  router: Router;
}

export interface ILocale {
  head: {
    title: string;
    keywords: Array<string>;
    og: {
      title: string;
      description: string;
    };
  };
  greeting: string;
  name: string;
  bio: {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  skills: {
    title: string;
    frontendSkillsTitle: string;
    backendSkillsTitle: string;
    otherSkillsTitle: string;
  };
  projects: {
    title: string;
  };
  socialMedia: {
    title: string;
  };
}
