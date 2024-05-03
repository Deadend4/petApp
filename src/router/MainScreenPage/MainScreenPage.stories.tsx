import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MainScreenPage from ".";

const meta: Meta<typeof MainScreenPage> = {
  title: "Components/MainScreenPage",
  component: MainScreenPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "fit-content",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MainScreenPage>;

export const Default: Story = {};
