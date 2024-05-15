import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectTimezone from ".";

const meta: Meta<typeof SelectTimezone> = {
  title: "Components/SelectTimezone",
  component: SelectTimezone,
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

type Story = StoryObj<typeof SelectTimezone>;

export const TimezoneSelector: Story = {
  args: {},
};
