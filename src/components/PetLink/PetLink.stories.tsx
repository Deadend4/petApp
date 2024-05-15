import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PetLink from ".";

const meta: Meta<typeof PetLink> = {
  title: "Components/PetLink",
  component: PetLink,
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

type Story = StoryObj<typeof PetLink>;

export const AddPet: Story = {
  args: {
    title: "Добавить",
  },
};

export const WithAvatar: Story = {
  args: {
    title: "Рик",
    avatarSrc:
      "https://avatars.dzeninfra.ru/get-zen_doc/5285564/pub_6391dae5b3aa6f0d89a52c1f_639477c00adf8360a5d6ab6c/scale_2400",
    url: "/",
  },
};
