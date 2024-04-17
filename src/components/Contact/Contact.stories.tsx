import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Contact from ".";

const meta: Meta<typeof Contact> = {
  title: "Components/Contact",
  component: Contact,
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

type Story = StoryObj<typeof Contact>;

export const DefaultData: Story = {
  args: {},
};
export const SpecialistOnline: Story = {
  args: {
    isOnline: true,
    user: {
      avatar:
        "https://media.kg-portal.ru/anime/j/jojosbizarreadventurestardustcrusaders2/images/jojosbizarreadventurestardustcrusaders2_397.jpg",
      title: "Куджо Джотаро",
      subtitle: "Грумер",
      rating: 4.3,
      wards: [
        {
          name: "Игги",
          image:
            "https://media.kg-portal.ru/anime/j/jojosbizarreadventurestardustcrusaders2/images/jojosbizarreadventurestardustcrusaders2_153.jpg",
        },
      ],
    },
  },
};

export const TwoPetsOffline: Story = {
  args: {
    isOnline: false,
    user: {
      avatar:
        "https://media.kg-portal.ru/anime/j/jojosbizarreadventurestardustcrusaders2/images/jojosbizarreadventurestardustcrusaders2_397.jpg",
      title: "Куджо Джотаро",
      subtitle: "example@exam.ple",
      rating: 0,
      wards: [
        {
          name: "Игги",
          image:
            "https://media.kg-portal.ru/anime/j/jojosbizarreadventurestardustcrusaders2/images/jojosbizarreadventurestardustcrusaders2_153.jpg",
        },
        {
          name: "Какёин",
          image: "https://i.ytimg.com/vi/zzg2Ab_1d8c/maxresdefault.jpg",
        },
      ],
    },
  },
};
