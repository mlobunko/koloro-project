import React from "react";
import PropTypes from "prop-types";

import {
  StyledLogoO,
  StyledLogoWords,
  StyledReactTilt,
  StyledReactTiltMobile
} from "./styles";

export const Logo = ({ landscape, clientWidth }) => (
  <React.Fragment>
    <StyledLogoWords landscape={landscape} />
    {landscape && clientWidth >= 1024 ? (
      <StyledReactTilt landscape={landscape} className="tilt-elem my-tilt">
        <StyledLogoO landscape={landscape} className="Tilt-inner" />
      </StyledReactTilt>
    ) : (
      <StyledReactTiltMobile
        landscape={landscape}
        className="tilt-elem my-tilt"
      >
        <StyledLogoO landscape={landscape} className="Tilt-inner" />
      </StyledReactTiltMobile>
    )}
  </React.Fragment>
);
Logo.displayName = "Logo";

export default Logo;

Logo.propTotypes = {
  landscape: PropTypes.bool.isRequired,
  clientWidth: PropTypes.number.isRequired
};
