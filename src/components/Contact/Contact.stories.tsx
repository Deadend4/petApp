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
          id: "iggi",
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
        "https://avatars.dzeninfra.ru/get-zen_doc/1886729/pub_5f5c08b4354535081e370da1_5f5c1be5d709247317014058/scale_2400",
      title: "Джозеф Джостар",
      subtitle: "example@exam.ple",
      rating: 0,
      wards: [
        {
          id: "iggi",
          name: "Игги",
          image:
            "https://media.kg-portal.ru/anime/j/jojosbizarreadventurestardustcrusaders2/images/jojosbizarreadventurestardustcrusaders2_153.jpg",
        },
        {
          id: "kakein",
          name: "Какёин",
          image: "https://i.ytimg.com/vi/zzg2Ab_1d8c/maxresdefault.jpg",
        },
      ],
    },
  },
};
