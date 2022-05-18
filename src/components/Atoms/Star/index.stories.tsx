import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Star, { StarState } from "./index";

export default {
  title: "Atoms/Star",
  component: Star,
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const Example = Template.bind({});

Example.args = {
  state: StarState.Full,
};
