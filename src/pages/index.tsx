import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { axios } from "../axios";
import { projects, skills, socialLinks } from "../data";
import { ExternalLink, Project, Skill, SocialLink } from "../components";
import { ILocale, PageProps } from "../types";

interface Props extends PageProps {
  text: ILocale;
}

export default function Index({ router, text }: Props) {
  useEffect(() => {
    if (navigator.language.includes("ru") && router.locale !== "ru") {
      router.push("/", "/", { locale: "ru" });
    }
  }, [router.locale]);

  return (
    <div id="page">
      <Head>
        <title>{text.head.title}</title>
        <meta name="author" content={text.head.og.title} />
        <meta name="description" content={text.head.og.description} />
        <meta name="keywords" content={text.head.keywords.join(",")} />

        {/* Open Graph tags */}
        <meta name="og:title" content={text.head.og.title} />
        <meta name="og:description" content={text.head.og.description} />
        <meta
          name="og:image"
          content="https://teenance.sirv.com/portfolio/me.jpg"
        />
        <meta name="og:image:type" content="image/jpg" />
        <meta name="og:image:width" content="200px" />
        <meta name="og:image:height" content="200px" />

        <link rel="canonical" href="https://tsivinsky.com" />
      </Head>

      <h1 id="greeting">{text.greeting}</h1>
      <h2 id="name">{text.name}</h2>

      <div id="bio">
        <p>{text.bio.p1}</p>
        <p>{text.bio.p2}</p>
        <p>
          {text.bio.p3}{" "}
          <ExternalLink
            href="https://github.com/tsivinsky/wishlify"
            className="primary"
          >
            github
          </ExternalLink>
        </p>
        <p>
          {text.bio.p4}{" "}
          <Link href="mailto:daniil@tsivinsky.com">
            <a className="primary">daniil@tsivinsky.com</a>
          </Link>
        </p>
      </div>

      <div id="skills">
        <h3 className="title">{text.skills.title}</h3>
        <ul id="frontend-skills">
          <h4>{text.skills.frontendSkillsTitle}</h4>

          {skills.frontend.map((skill, i) => (
            <Skill key={i} {...skill} />
          ))}
        </ul>
        <ul id="backend-skills">
          <h4>{text.skills.backendSkillsTitle}</h4>

          {skills.backend.map((skill, i) => (
            <Skill key={i} {...skill} />
          ))}
        </ul>
        <ul id="other-skills">
          <h4>{text.skills.otherSkillsTitle}</h4>

          {skills.other.map((skill, i) => (
            <Skill key={i} {...skill} />
          ))}
        </ul>
      </div>

      <div id="projects">
        <h3 className="title">{text.projects.title}</h3>

        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>

      <div id="social-media">
        <h3 className="title">{text.socialMedia.title}</h3>

        <ul>
          {socialLinks.map((link, i) => (
            <SocialLink key={i} {...link} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios.get(`/locales/${ctx.locale}.json`);

  return {
    props: {
      text: response.data,
    },
  };
};
