import React from "react";

import Description from "app/description";
import Form from "app/form";
import Logo from "app/logo/components";

import ErrorBoundary from "./ErrorBoundary";
import {
  StyledMain,
  StyledTextBlock,
  StyledImageGameOfThrones,
  StyledGradient
} from "./styles";

export class Main extends React.Component {
  state = {
    isLandscape: true
  };
  landscapeOn = () => {
    this.setState({
      isLandscape: true
    });
  };
  landscapeOff = () => {
    this.setState({
      isLandscape: false
    });
  };
  checkLandscape = () =>
    document.documentElement.clientWidth > document.documentElement.clientHeight
      ? this.landscapeOn()
      : this.landscapeOff();

  componentDidMount = () => {
    this.checkLandscape();
    window.addEventListener("resize", this.checkLandscape);
  };
  render() {
    return (
      <ErrorBoundary>
        <StyledGradient>
          <StyledMain landscape={this.state.isLandscape}>
            <StyledTextBlock>
              <Logo landscape={this.state.isLandscape} />
              <Description landscape={this.state.isLandscape} />
              <Form landscape={this.state.isLandscape} />
            </StyledTextBlock>
            <StyledImageGameOfThrones landscape={this.state.isLandscape} />
          </StyledMain>
        </StyledGradient>
      </ErrorBoundary>
    );
  }
}

Main.displayName = "Main";

export default Main;
