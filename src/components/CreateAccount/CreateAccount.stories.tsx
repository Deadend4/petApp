import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CreateAccount from ".";

const meta: Meta<typeof CreateAccount> = {
  title: "Components/CreateAccount",
  component: CreateAccount,
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

type Story = StoryObj<typeof CreateAccount>;

export const FormCreateAccount: Story = {};
