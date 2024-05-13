import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SettingsPage from ".";

const meta: Meta<typeof SettingsPage> = {
  title: "Components/SettingsPage",
  component: SettingsPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SettingsPage>;

export const Default: Story = {};
