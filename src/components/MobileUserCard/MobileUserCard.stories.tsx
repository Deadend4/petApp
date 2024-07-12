import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MobileUserCard from ".";

const meta: Meta<typeof MobileUserCard> = {
  title: "Components/MobileUserCard",
  component: MobileUserCard,
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

type Story = StoryObj<typeof MobileUserCard>;

export const Default: Story = {
  args: {
    user: {
      title: "Канеки",
      src: "https://i.pinimg.com/originals/05/aa/17/05aa1701645cff64ed1edb56a0ca3a4f.jpg",
    },
  },
};
