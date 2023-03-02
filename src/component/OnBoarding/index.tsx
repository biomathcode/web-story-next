import { ChatBubbleIcon } from "@radix-ui/react-icons";
import React, { Component } from "react";

import Joyride from "react-joyride";
class OnBoarding extends Component {
  state = {
    run: false,
    steps: [
      {
        target: ".viewEditor",
        content: "Canvas Preview: A Simple Preview of ",
      },
      {
        target: ".rightSidebar",
        content:
          "ContentDisplay: Drag and drop content from here to canvas preview",
      },
      {
        target: ".leftSidebar",
        content: "Editor: Change Editor setting to customize as per your needs",
      },
      {
        target: "#select",
        content: "Change the Blog that you want to work on ",
      },
      {
        target: "#username",
        content: "Hashnode username: Change it to get your blog data ",
      },
      {
        target: "#search",
        content: "Click to fetch your blog data",
      },

      {
        target: "#page",
        content: "Change page to get new Blogs from hashnode",
      },
      {
        target: "#animation",
        content:
          "Play the animation to get a short preview of the animation in action",
      },
      {
        target: "#Publish",
        content:
          "Click to add author, publication and seo info to generate webstory code",
      },
      {
        target: "#Settings",
        content: "Add Monetization and Analytics",
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
          styles={{
            options: {
              primaryColor: "var(--violet11)",
            },
          }}
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
