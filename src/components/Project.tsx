import Link from "next/link";
import React from "react";
import { IProject } from "../types";

interface Props extends IProject {}

export const Project: React.FC<Props> = ({
  name,
  description,
  githubURL,
  homepage,
}) => {
  return (
    <div className="project">
      <Link href={githubURL}>
        <h4 className="project-name">{name}</h4>
      </Link>
      <p className="project-description">{description}</p>
      <Link href={homepage}>
        <a className="primary">Check it out</a>
      </Link>
    </div>
  );
};
