import { Global } from "@emotion/react";
import type { Preview } from "@storybook/react";
import { globalReset } from "../src/styles/index";
import { injectCssVariables, injectTypographyClasses } from "@repo/tokens";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    (Story) => {
      if (typeof document !== "undefined") {
        injectCssVariables();
        injectTypographyClasses();
      }

      return (
        <>
          <Global styles={globalReset} />
          {Story()}
        </>
      );
    },
  ],
};
export default preview;
