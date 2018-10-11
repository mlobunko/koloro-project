import React from "react";
import { shallow } from "enzyme";

import { Description } from "../Description";

describe("render", () => {
  it("renders correctly", () => {
    const landscape = true;
    const wrapper = shallow(<Description landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});
