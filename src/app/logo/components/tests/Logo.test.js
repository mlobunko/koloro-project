import React from "react";
import { shallow } from "enzyme";

import { Logo } from "../Logo";

describe("render", () => {
  it("renders correctly", () => {
    const landscape = true;
    const wrapper = shallow(<Logo landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});
