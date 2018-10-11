import React from "react";
import { shallow } from "enzyme";

import { Form } from "../Form";

describe("render", () => {
  it("renders correctly", () => {
    const landscape = true;
    const wrapper = shallow(<Form landscape={landscape} />);
    expect(wrapper).toMatchSnapshot();
  });
});
