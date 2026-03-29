// packages/ui/.storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  async viteFinal(config) {
    return mergeConfig(config, {
      // 수정: "/" 대신 "./"를 사용하여 상대 경로로 빌드합니다.
      base: "./",
      build: {
        rollupOptions: {
          output: {
            // 언더바(_)로 시작하는 파일명을 방지합니다.
            sanitizeFileName: (name: string) => name.replace(/^_+/, ""),
          },
        },
      },
    });
  },
};
export default config;
