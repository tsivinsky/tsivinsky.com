import React from "react";

interface Props {
  href: string;
  [key: string]: any;
}

export const ExternalLink: React.FC<Props> = ({ href, children, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener norefferer" {...props}>
      {children}
    </a>
  );
};
