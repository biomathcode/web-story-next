import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InfoCheckBox from "../component/InfoCheckbox/InfoCheckbox";
import "../pages/globals.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/InfoCheckBox",
  component: InfoCheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InfoCheckBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InfoCheckBox> = (args) => (
  <InfoCheckBox {...args} />
);

export const Primary = Template.bind({});
