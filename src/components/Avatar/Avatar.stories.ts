import type { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://i.pinimg.com/originals/05/aa/17/05aa1701645cff64ed1edb56a0ca3a4f.jpg",
    width: 100,
    alt: "Kaneki Ken",
  },
};
export const WithoutImage: Story = {
  args: {
    width: 100,
    alt: "default image",
  },
};
