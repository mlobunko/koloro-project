import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import {
  StyledLogoO,
  StyledLogoWords,
  StyledReactTilt,
  StyledReactTiltMobile
} from "../styles";

describe("StyledLogoO", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledLogoO landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledLogoO landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledLogoWords", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledLogoWords landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledLogoWords landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledReactTilt", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledReactTilt landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledReactTilt landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("StyledReactTiltMobile", () => {
  it("renders correctly, landscape true", () => {
    const landscape = true;
    const wrapper = shallow(<StyledReactTiltMobile landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correctly, landscape false", () => {
    const landscape = false;
    const wrapper = shallow(<StyledReactTiltMobile landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});
