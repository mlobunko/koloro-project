import styled, { injectGlobal, keyframes } from "styled-components";
import PropTypes from "prop-types";

import imageBgRadiantLeft from "../images/imageBgRadiantLeft.png";
import imageBgRadiantRight from "../images/imageBgRadiantRight.png";
import imageGameOfThrones from "../images/imageGameOfThrones.png";
import imageGameOfThronesMini from "../images/imageGameOfThronesMini.png";
import fontGothamProLight from "../fonts/GothamPro-Light.ttf";
import fontGothamProBold from "../fonts/GothamPro-Bold.ttf";
import fontGothamProItalic from "../fonts/GothamPro-Italic.ttf";

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
    
    @media (min-width: 2000px) {
      font-size: 150%;
    }
  }
`;

const animGradient = keyframes`
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100% {
        background-position: 0% 50%
    }
`;

export const StyledGradient = styled.div`
  background-color: #efcb19;
  background: linear-gradient(to right, #8141a9 0%, #d4436c 50%, #efcb19 100%);
  background-size: 500% 500%;
  width: 100%;
  min-height: 100vh;
  animation: ${animGradient} 30s linear infinite;
`;
StyledGradient.displayName = "StyledGradient";

export const StyledImageGameOfThrones = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${imageGameOfThronesMini}) no-repeat bottom center/contain;

  @media (min-width: 1024px) {
    display: ${props => (props.landscape ? "none" : "block")};
  }
`;
StyledImageGameOfThrones.displayName = "StyledImageGameOfThrones";

StyledImageGameOfThrones.propTypes = {
  landscape: PropTypes.bool.isRequired
};

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${imageBgRadiantLeft}) no-repeat center center / cover,
    url(${imageBgRadiantRight}) no-repeat center center / cover;
  width: 100%;
  color: white;
  font-family: GothamPro;
  font-weight: 400;
  min-height: 100vh;

  @media (min-width: 1024px) {
    display: block;
    background: ${props =>
        props.landscape
          ? `url(${imageGameOfThrones}) no-repeat center center/cover`
          : ``},
      url(${imageBgRadiantLeft}) no-repeat center center / cover,
      url(${imageBgRadiantRight}) no-repeat center center / cover;
  }

  @font-face {
    font-family: GothamPro;
    src: url(${fontGothamProLight});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: GothamPro;
    src: url(${fontGothamProBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: GothamPro;
    src: url(${fontGothamProItalic});
    font-weight: 400;
    font-style: italic;
  }
`;
StyledMain.displayName = "StyledMain";

StyledMain.propTypes = {
  landscape: PropTypes.bool.isRequired
};

export const StyledTextBlock = styled.div`
  width: 100%;
`;
StyledTextBlock.displayName = "StyledTextBlock";
