import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SideMenuItem from ".";
import DashboardIcon from "../../svg/DashboardIcon";

const meta: Meta<typeof SideMenuItem> = {
  title: "Components/SideMenuItem",
  component: SideMenuItem,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "none",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "var(--color-black-bg)",
          padding: "2rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SideMenuItem>;

export const Button: Story = {
  args: {
    title: "Dashboard",
    link: "",
    icon: <DashboardIcon key="link-dashboard" />,
    isSelected: false,
  },
};

export const Link: Story = {
  args: {
    title: "Dashboard",
    link: "/",
    icon: <DashboardIcon key="link-dashboard" />,
    isSelected: false,
  },
};

export const SelectedItem: Story = {
  args: {
    title: "Dashboard",
    link: "",
    icon: <DashboardIcon key="link-dashboard" />,
    isSelected: true,
  },
};
