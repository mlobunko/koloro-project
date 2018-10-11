import React from "react";

import { StyledLogoO, StyledLogoWords, StyledReactTilt } from "./styles";

export const Logo = ({ landscape }) => (
  <React.Fragment>
    <StyledLogoWords landscape={landscape} />
    <StyledReactTilt landscape={landscape} className="tilt-elem my-tilt">
      <StyledLogoO landscape={landscape} className="Tilt-inner" />
    </StyledReactTilt>
  </React.Fragment>
);
Logo.displayName = "Logo";

export default Logo;
