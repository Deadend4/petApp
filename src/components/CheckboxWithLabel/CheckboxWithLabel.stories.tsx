import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ChecboxWithLabel from ".";

const meta: Meta<typeof ChecboxWithLabel> = {
  title: "Components/ChecboxWithLabel",
  component: ChecboxWithLabel,
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

type Story = StoryObj<typeof ChecboxWithLabel>;

export const Checkbox: Story = {
  args: {
    label: "Label",
  },
};
