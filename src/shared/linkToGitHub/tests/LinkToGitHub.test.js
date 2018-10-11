import React from "react";
import { shallow } from "enzyme";

import { LinkToGitHub } from "../LinkToGitHub";

describe("render", () => {
  it("renders correctly", () => {
    const props = {
      link: "123",
      nameOfProject: "family",
      textColor: "black"
    };
    const wrapper = shallow(<LinkToGitHub {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
