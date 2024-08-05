import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EventCard from ".";

const meta: Meta<typeof EventCard> = {
  title: "Components/EventCard",
  component: EventCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
  args: {
    avatar:
      "https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmercy.ea1158d3.png&w=3840&q=100",
    date: Date.now(),
    label: "Выгул",
    type: "activities",
  },
};
