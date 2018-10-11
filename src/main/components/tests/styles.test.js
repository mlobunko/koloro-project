import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import {
  StyledGradient,
  StyledImageGameOfThrones,
  StyledMain,
  StyledTextBlock
} from "../styles";

describe("StyledGradient", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledGradient />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledImageGameOfThrones", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledImageGameOfThrones landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledImageGameOfThrones landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledMain", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledMain landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledMain landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledTextBlock", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledTextBlock />);
    expect(wrapper).toMatchSnapshot();
  });
});
