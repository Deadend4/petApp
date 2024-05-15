import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DogBreed from ".";

const meta: Meta<typeof DogBreed> = {
  title: "Components/DogBreed",
  component: DogBreed,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DogBreed>;

export const Default: Story = {
  args: {
    breed: "Порода",
    imgSrc: "",
    alt: "Default Dog Breed",
  },
};
