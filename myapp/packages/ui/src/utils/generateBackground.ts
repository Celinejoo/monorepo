import { css, SerializedStyles } from "@emotion/react";
import { lightColors } from "@repo/tokens";

type ColorObject = Record<string, string | Record<string, string>>;

const generateBackgroundPresetMap = (obj: ColorObject) => {
  const result: Record<string, SerializedStyles> = {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      for (const shade in value) {
        const mapKey = `${key}${shade}`;

        result[mapKey] = css`
          background: var(--color-${key}-${shade});
        `;
      }
    } else {
      result[key] = css`
        background: var(--color-${key});
      `;
    }
  }

  return result;
};

export const backgroundPresetsMap = generateBackgroundPresetMap(lightColors);

export type BackgroundPresetsMap = keyof typeof backgroundPresetsMap;
