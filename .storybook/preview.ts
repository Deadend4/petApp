import type { Preview } from "@storybook/react";
import "../src/styles.scss";
import "../src/router/Root/Root.module.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
