import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledButton, StyledForm, StyledInput } from "../styles";

describe("StyledButton", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledButton />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledForm", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledForm landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledForm landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledInput", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<StyledInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
