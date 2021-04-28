import React from "react";
import { ISkill } from "../types";

interface Props extends ISkill {}

export const Skill: React.FC<Props> = ({ name }) => {
  return <li>{name}</li>;
};
