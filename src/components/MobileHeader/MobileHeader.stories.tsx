import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MobileHeader from ".";

const meta: Meta<typeof MobileHeader> = {
  title: "Components/MobileHeader",
  component: MobileHeader,
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

type Story = StoryObj<typeof MobileHeader>;

export const Default: Story = {
  args: {},
};
