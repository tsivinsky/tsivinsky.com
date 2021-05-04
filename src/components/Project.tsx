import React from "react";
import { useRouter } from "next/router";
import { IProject } from "../types";
import { ExternalLink } from "./ExternalLink";

interface Props extends IProject {}

export const Project: React.FC<Props> = ({
  name,
  description,
  githubURL,
  homepage,
}) => {
  const { locale } = useRouter();

  return (
    <div className="project">
      <ExternalLink href={githubURL} className="no-text-decoration">
        <h4 className="project-name">{name}</h4>
      </ExternalLink>
      <p className="project-description">
        {description[locale] || description["en"]}
      </p>
      <ExternalLink href={homepage}>
        <a className="primary">
          {locale === "ru" ? "Посмотреть" : "Check it out"}
        </a>
      </ExternalLink>
    </div>
  );
};
