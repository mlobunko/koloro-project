import React from "react";

import { StyledForm, StyledButton, StyledInput } from "./styles";

export const Form = ({ landscape }) => (
  <StyledForm landscape={landscape}>
    <StyledInput type={"text"} placeHolder={"Имя"} />
    <StyledInput type={"tel"} placeHolder={"Телефон"} />
    <StyledInput type={"email"} placeHolder={"E-mail"} />
    <StyledButton ariaLabel={"submit form button"} type={"submit"}>
      КОЛОРОНИРОВАТЬСЯ
    </StyledButton>
  </StyledForm>
);

export default Form;
