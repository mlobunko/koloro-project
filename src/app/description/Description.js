import React from "react";
import PropTypes from "prop-types";

import {
  StyledStandardParagraph,
  StyledBoldParagraph,
  StyledH1,
  StyledItalicText
} from "./styles";

export const Description = ({ landscape }) => (
  <React.Fragment>
    <StyledH1 landscape={landscape}>
      <StyledItalicText>#КОЛОНИРУЙСЯ</StyledItalicText> - СТАНЬ ЧАСТЬЮ СЕМЬИ
      УСПЕШНЫХ КЛИЕНТОВ KOLORO
    </StyledH1>
    <StyledStandardParagraph landscape={landscape}>
      Брендинговое агентство KOLORO – создаем, позиционируем и продаем бренды.
      Индивидуальный подход к каждому проекту и восьмилетний опыт на рынке
      научили нас делать быстро, качественно и креативно!
    </StyledStandardParagraph>
    <StyledBoldParagraph landscape={landscape}>
      <div>ХОТИТЕ СОЗДАТЬ КОРОЛЕВСКИЙ БРЕНД?</div>
      <div>ТОГДА СКОРЕЕ ЗАПОЛНЯЙТЕ ФОРМУ?</div>
    </StyledBoldParagraph>
  </React.Fragment>
);

export default Description;

Description.propTypes = {
  landscape: PropTypes.bool.isRequired
};
