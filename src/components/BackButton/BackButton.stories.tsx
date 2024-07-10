import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import BackButton from '.';

const meta: Meta<typeof BackButton> = {
  title: "Components/BackButton",
  component: BackButton,
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

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {
  },
};
