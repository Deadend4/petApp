import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SettingCard from ".";

const meta: Meta<typeof SettingCard> = {
  title: "Components/SettingCard",
  component: SettingCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "var(--black-background-color)",
          padding: "1rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SettingCard>;

export const TimeZone: Story = {};
