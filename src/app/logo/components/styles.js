import styled from "styled-components";
import ReactTilt from "react-universal-tilt";

import koloroLogoO from "../images/koloroLogoO.png";
import koloroLogoWords from "../images/koloroLogoWords.png";

export const StyledLogoO = styled.div`
  position: absolute;
  height: 4rem;
  width: 11rem;
  top: 2rem;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  background: url(${koloroLogoO}) no-repeat center center / contain;

  @media (min-width: 1024px) {
    margin-left: ${props => (props.landscape ? "4rem" : "auto")};
  }
`;
StyledLogoO.displayName = "StyledLogoO";

export const StyledLogoWords = styled.div`
  position: absolute;
  height: 4rem;
  width: 11rem;
  top: 2rem;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  background: url(${koloroLogoWords}) no-repeat center center / contain;

  @media (min-width: 1024px) {
    margin-left: ${props => (props.landscape ? "4rem" : "auto")};
  }
`;
StyledLogoWords.displayName = "StyledLogoWords";

export const StyledReactTilt = styled(ReactTilt).attrs({
  options: {
    "position-base": "window",
    max: 40,
    reset: true,
    reverse: true,
    perspective: 5000,
    mobile: false
  }
})`
  position: absolute;
  height: 4rem;
  width: 11rem;
  left: 0;
  right: 0;
  margin: auto;

  @media (min-width: 1024px) {
    margin-left: ${props => (props.landscape ? "0" : "auto")};
  }
`;
StyledReactTilt.displayName = "StyledReactTilt";
