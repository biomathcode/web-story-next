import { ChatBubbleIcon } from "@radix-ui/react-icons";
import React, { Component } from "react";

import Joyride from "react-joyride";
class OnBoarding extends Component {
  state = {
    run: false,
    steps: [
      {
        target: ".rightSidebar",
        content: "This is super awesome feature ",
      },
      {
        target: ".leftSidebar",
        content: "Everyone's learning Joyride!",
      },
    ],
  };
  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      run: true,
    });
  };
  render() {
    const { steps } = this.state;
    return (
      <div className="App">
        <Joyride
          run={this.state.run}
          steps={steps}
          continuous
          showProgress
          showSkipButton
        />
        <button className="btn flex gap-10 fs-12" onClick={this.handleClick}>
          <ChatBubbleIcon />
          Tour Guide
        </button>
      </div>
    );
  }
}
export default OnBoarding;
