import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Selector from ".";

const meta: Meta<typeof Selector> = {
  title: "Components/Selector",
  component: Selector,
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

type Story = StoryObj<typeof Selector>;

export const BaseSelector: Story = {};
