import React from "react";
import { ISocialLink } from "../types";
import { ExternalLink } from "./ExternalLink";

interface Props extends ISocialLink {}

export const SocialLink: React.FC<Props> = ({ name, url }) => {
  return (
    <li>
      <ExternalLink href={url}>{name}</ExternalLink>
    </li>
  );
};
