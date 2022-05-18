import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./index";
import { testMovies } from "../../../data/movies";

export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
  movie: testMovies[0],
};
