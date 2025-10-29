import { Global } from "@emotion/react";
import type { Preview } from "@storybook/react";
import { globalReset } from "../src/styles/index";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <>
        <Global styles={globalReset} />
        {Story()}
      </>
    ),
  ],
};
export default preview;
