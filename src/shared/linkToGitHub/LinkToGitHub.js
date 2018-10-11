import React from "react";
import PropTypes from "prop-types";

import { StyledLink } from "./styles";

export const LinkToGitHub = ({ link, nameOfProject, textColor }) => (
  <StyledLink href={link} nameOfProject={nameOfProject} textColor={textColor}>
    Visit GitHub
  </StyledLink>
);

LinkToGitHub.displayName = "LinkToGithub";

export default LinkToGitHub;

LinkToGitHub.propTypes = {
  link: PropTypes.string.isRequired,
  nameOfProject: PropTypes.string.isRequired,
  textColor: PropTypes.string
};
