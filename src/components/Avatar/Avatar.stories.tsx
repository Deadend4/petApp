import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#373737",
          padding: "2rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Online: Story = {
  args: {
    src: "https://i.pinimg.com/originals/05/aa/17/05aa1701645cff64ed1edb56a0ca3a4f.jpg",
    width: 100,
    alt: "Kaneki Ken",
    isOnline: true,
    withOutline: false,
  },
};

export const WithoutImage: Story = {
  args: {
    width: 100,
    alt: "default image",
    isOnline: false,
    withOutline: false,
  },
};
export const WithOutline: Story = {
  args: {
    src: "https://i.pinimg.com/originals/05/aa/17/05aa1701645cff64ed1edb56a0ca3a4f.jpg",
    width: 100,
    alt: "Kaneki Ken",
    isOnline: true,
    withOutline: true,
  },
};
