import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./index";

export default {
  title: "Atoms/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Example = Template.bind({});