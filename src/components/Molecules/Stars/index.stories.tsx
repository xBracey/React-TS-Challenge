import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stars from "./index";

export default {
  title: "Atoms/Stars",
  component: Stars,
} as ComponentMeta<typeof Stars>;

const Template: ComponentStory<typeof Stars> = (args) => (
  <Stars {...args} />
);

export const Example = Template.bind({});