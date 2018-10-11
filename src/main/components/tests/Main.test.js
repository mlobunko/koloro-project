import React from "react";
import { shallow } from "enzyme";

import { Main } from "../Main";

describe("landscapeOn", () => {
  it("set isLandscape to true", () => {
    const wrapper = shallow(<Main />);
    wrapper.setState({ isLandscape: false });
    wrapper.instance().landscapeOn();
    expect(wrapper.state("isLandscape")).toEqual(true);
  });
});

describe("landscapseOff", () => {
  it("set isLandscape to false", () => {
    const wrapper = shallow(<Main />);
    wrapper.setState({ isLandscape: true });
    wrapper.instance().landscapeOff();
    expect(wrapper.state("isLandscape")).toEqual(false);
  });
});

describe("checkLandscape", () => {
  const clientHeight = 200;
  const clientWidth = 100;

  Object.defineProperty(document, "documentElement", {
    value: { clientHeight, clientWidth }
  });

  it("call landscapeOn", () => {
    const wrapper = shallow(<Main />);
    wrapper.instance().landscapeOn = jest.fn();
    wrapper.instance().landscapeOff = jest.fn();
    wrapper.instance().checkLandscape();
    expect(wrapper.instance().landscapeOff).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().landscapeOn).toHaveBeenCalledTimes(0);
  });

  it("call landscapeOff", () => {
    document.documentElement.clientHeight = 100;
    document.documentElement.clientWidth = 200;
    const wrapper = shallow(<Main />);
    wrapper.instance().landscapeOn = jest.fn();
    wrapper.instance().landscapeOff = jest.fn();
    wrapper.instance().checkLandscape();
    expect(wrapper.instance().landscapeOff).toHaveBeenCalledTimes(0);
    expect(wrapper.instance().landscapeOn).toHaveBeenCalledTimes(1);
  });
});

describe("componentDidMount", () => {
  Object.defineProperty(window, "addEventListener", {
    value: jest.fn()
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("call checkLandscape", () => {
    const wrapper = shallow(<Main />);
    wrapper.instance().checkLandscape = jest.fn();
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().checkLandscape).toHaveBeenCalledTimes(1);
  });

  it("call addEventListener", () => {
    const wrapper = shallow(<Main />);
    expect(window.addEventListener).toHaveBeenCalledWith(
      "resize",
      wrapper.instance().checkLandscape
    );
  });
});

describe("render", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
