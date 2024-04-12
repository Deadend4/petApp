import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
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

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Напишите что-нибудь",
  },
};
export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "example@mail.com",
  },
};
export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Пароль",
  },
};
