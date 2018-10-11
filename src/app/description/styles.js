import styled from "styled-components";

export const StyledBoldParagraph = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  max-width: 45rem;
  margin: 0 auto;
  padding: 2rem 1rem 0 1rem;

  @media (min-width: 1024px) {
    margin: ${props => (props.landscape ? "0" : "0 auto")};
    text-align: ${props => (props.landscape ? "left" : "center")};
    padding: ${props =>
      props.landscape ? "2rem 4rem 0 4rem" : "2rem 1rem 0 1rem"};
  }
`;
StyledBoldParagraph.displayName = "StyledBoldParagraph";

export const StyledH1 = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 10rem 1rem 0 1rem;
  max-width: 53rem;

  @media (min-width: 1024px) {
    margin: ${props => (props.landscape ? "0" : "0 auto")};
    width: ${props => (props.landscape ? "70%" : "100%")};
    text-align: ${props => (props.landscape ? "left" : "center")};
    padding: ${props =>
      props.landscape ? "10rem 4rem 0 4rem" : "10rem 1rem 0 1rem"};
  }
`;
StyledH1.displayName = "StyledH1";

export const StyledItalicText = styled.span`
  font-style: italic;
`;
StyledItalicText.displayName = "StyledItalicText";

export const StyledStandardParagraph = styled.div`
  width: 100%;
  max-width: 45rem;
  text-align: center;
  font-style: normal;
  margin: 0 auto;
  padding: 2rem 1rem 0 1rem;

  @media (min-width: 1024px) {
    margin: ${props => (props.landscape ? "0" : "0 auto")};
    text-align: ${props => (props.landscape ? "left" : "center")};
    padding: ${props =>
      props.landscape ? "2rem 4rem 0 4rem" : "2rem 1rem 0 1rem"};
  }
`;
StyledStandardParagraph.displayName = "StyledStandardParagraph";
