import React from "react";
import { shallow } from "enzyme";
import "enzyme-to-json";

import { StyledLink } from "../styles";

describe("StyledLink", () => {
  const initialProps = {
    href: "123",
    nameOfProject: "family",
    textColor: "black"
  };
  it("renders correctly, all properties exists", () => {
    const props = {
      ...initialProps
    };
    const wrapper = shallow(<StyledLink {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly, textColor false", () => {
    const props = {
      ...initialProps,
      textColor: ""
    };
    const wrapper = shallow(<StyledLink {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
