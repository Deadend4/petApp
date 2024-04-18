import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SideMenuItem from ".";
import DashboardIcon from "../../svg/SideMenu/DashboardIcon";
import ContactsIcon from "../../svg/SideMenu/ContactsIcon";
import CalendarIcon from "../../svg/SideMenu/CalendarIcon";

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
    title: "Панель инструментов",
    link: "",
    icon: <DashboardIcon key="link-dashboard" />,
    isSelected: false,
  },
};

export const Link: Story = {
  args: {
    title: "Контакты",
    link: "/",
    icon: <ContactsIcon key="link-contacts" />,
    isSelected: false,
  },
};

export const SelectedItem: Story = {
  args: {
    title: "Календарь",
    link: "",
    icon: <CalendarIcon key="link-calendar" />,
    isSelected: true,
  },
};
