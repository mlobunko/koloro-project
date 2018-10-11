import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import {
  StyledBoldParagraph,
  StyledH1,
  StyledItalicText,
  StyledStandardParagraph
} from "../styles";

describe("StyledBoldParagraph", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledBoldParagraph landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledBoldParagraph landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledH1", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledH1 landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledH1 landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledItalicText", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledItalicText />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledStandardParagraph", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledStandardParagraph landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledStandardParagraph landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});
