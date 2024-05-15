import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SideMenuItem from ".";
import SideMenuIcon from "../../svg/SideMenu/SideMenuIcon";

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
          background: "var(--black-background-color)",
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
    title: "Панель инструментов",
    link: "",
    icon: <SideMenuIcon type="dashboard" />,
    isSelected: false,
  },
};

export const Link: Story = {
  args: {
    title: "Контакты",
    link: "/",
    icon: <SideMenuIcon type="contacts" />,
    isSelected: false,
  },
};

export const SelectedItem: Story = {
  args: {
    title: "Календарь",
    link: "",
    icon: <SideMenuIcon type="calendar" />,
    isSelected: true,
  },
};
