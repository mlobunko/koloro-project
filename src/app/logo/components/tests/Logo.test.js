import React from "react";
import { shallow } from "enzyme";

import { Logo } from "../Logo";

describe("render", () => {
  it("renders correctly, render StyledReactTilt", () => {
    const landscape = true;
    const clientWidth = 1024;
    const wrapper = shallow(
      <Logo landscape={landscape} clientWidth={clientWidth} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe("renders correctly, render StyledReactTiltMobile", () => {
    it("landscape false", () => {
      const landscape = false;
      const clientWidth = 1024;
      const wrapper = shallow(
        <Logo landscape={landscape} clientWidth={clientWidth} />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it("clientWidth < 1024", () => {
      const landscape = true;
      const clientWidth = 1023;
      const wrapper = shallow(
        <Logo landscape={landscape} clientWidth={clientWidth} />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
