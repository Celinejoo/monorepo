import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  async viteFinal(config) {
    return mergeConfig(config, {
      base: "/monorepo/",
    });
  },
};
export default config;
