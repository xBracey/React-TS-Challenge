import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Overview from "./index";
import { testMovies } from "../../../data/movies";

export default {
  title: "Atoms/Overview",
  component: Overview,
} as ComponentMeta<typeof Overview>;

const Template: ComponentStory<typeof Overview> = (args) => (
  <Overview {...args} />
);

export const Example = Template.bind({});

Example.args = {
  movie: testMovies[0],
};
