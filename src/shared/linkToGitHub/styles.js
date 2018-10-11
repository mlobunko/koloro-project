import styled from "styled-components";

export const StyledLink = styled.a.attrs({
  href: props => props.href,
  target: "_blank",
  rel: "noopener noreferrer",
  "aria-label": props => `Link to ${props.nameOfProject}`
})`
  color: ${props =>
    props.textColor ? `${props.textColor}` : "rgb(0, 112, 201)"};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${props =>
      props.textColor ? `${props.textColor}` : "rgb(0, 112, 201)"};
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    color: ${props =>
      props.textColor ? `${props.textColor}` : "rgb(0, 112, 201)"};
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited {
    color: ${props =>
      props.textColor ? `${props.textColor}` : "rgb(0, 112, 201)"};
    text-decoration: none;
    cursor: auto;
  }
  &::after {
    display: inline-block;
    content: ">";
    margin-left: 0.3rem;
  }
`;

StyledLink.displayName = "StyledLink";
