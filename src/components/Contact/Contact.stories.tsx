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

export const SpecialistOnline: Story = {
  args: {
    isOnline: false,
    user: {
      avatar:
        "https://media.kg-portal.ru/anime/j/jojosbizarreadventurestardustcrusaders2/images/jojosbizarreadventurestardustcrusaders2_397.jpg",
      name: "Куджо Джотаро",
      email: "example@exam.ple",
      isCustomer: false,
      rating: "5",
      specialization: "Грумер",
      pets: [
        {
          name: "Игги",
          image:
            "https://media.kg-portal.ru/anime/j/jojosbizarreadventurestardustcrusaders2/images/jojosbizarreadventurestardustcrusaders2_153.jpg",
        },
      ],
    },
  },
};

export const OnePetOffline: Story = {
  args: {
    isOnline: false,
    user: {
      avatar:
        "https://media.kg-portal.ru/anime/j/jojosbizarreadventurestardustcrusaders2/images/jojosbizarreadventurestardustcrusaders2_397.jpg",
      name: "Куджо Джотаро",
      email: "example@exam.ple",
      isCustomer: true,
      rating: "5",
      specialization: "",
      pets: [
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
      name: "Куджо Джотаро",
      email: "example@exam.ple",
      isCustomer: true,
      rating: "5",
      specialization: "",
      pets: [
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
