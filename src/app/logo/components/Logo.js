import React from "react";

import { StyledLogoO, StyledLogoWords, StyledReactTilt } from "./styles";

export const Logo = ({ landscape }) => (
  <React.Fragment>
    <StyledLogoWords landscape={landscape} />
    <StyledReactTilt
      landscape={landscape}
      options={{
        "position-base": "window",
        max: 80,
        reset: true,
        reverse: true,
        perspective: 500
      }}
      className="tilt-elem my-tilt"
    >
      <StyledLogoO landscape={landscape} className="Tilt-inner" />
    </StyledReactTilt>
  </React.Fragment>
);
Logo.displayName = "Logo";

export default Logo;
