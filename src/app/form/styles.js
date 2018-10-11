import styled from "styled-components";

export const StyledButton = styled.button.attrs({
  type: props => props.type,
  "aria-label": props => props.ariaLabel
})`
  margin: 2rem 0;
  width: 100%;
  background-color: white;
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.8rem 4rem 0.8rem 4rem;
  border: none;
  border-radius: 2rem;

  &:hover {
    background-color: gold;
  }
  &:active {
    background-color: gold;
  }
`;
StyledButton.displayName = "StyledButton";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 26.5rem;
  padding: 2rem 1rem 0 1rem;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 1024px) {
    margin: ${props => (props.landscape ? "0" : "0 auto")};
    padding: ${props =>
      props.landscape ? "2rem 4rem 0 4rem" : "2rem 1rem 0 1rem"};
  }
`;
StyledForm.displayName = "StyledForm";

export const StyledInput = styled.input.attrs({
  type: props => props.type,
  placeholder: props => props.placeHolder
})`
  background: rgba(0, 0, 0, 0);
  width: 100%;
  border: none;
  border-bottom: 1px solid white;
  padding: 1rem 1rem 0.5rem 0;
  color: white;
  font-style: normal;
  font-weight: 400;

  &::placeholder {
    color: white;
    font-style: normal;
  }
`;
StyledInput.displayName = "StyledInput";
