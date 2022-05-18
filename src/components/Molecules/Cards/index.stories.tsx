import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cards from "./index";
import { testMovies } from "../../../data/movies";

export default {
  title: "Atoms/Cards",
  component: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Example = Template.bind({});

Example.args = {
  movies: [...testMovies, ...testMovies, ...testMovies],
};
