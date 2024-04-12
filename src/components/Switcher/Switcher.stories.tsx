import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Switcher from ".";

const meta: Meta<typeof Switcher> = {
  title: "Components/Switcher",
  component: Switcher,
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

type Story = StoryObj<typeof Switcher>;

export const WithoutLabel: Story = {
  args: {
    hasLabel: false,
    switcherID: "01",
  },
};

export const WithLabel: Story = {
  args: {
    hasLabel: true,
    switcherID: "02",
  },
};
