import { css, SerializedStyles } from "@emotion/react";
import { lightColors } from "@repo/tokens";

type ColorObject = Record<string, string | Record<string, string>>;

const generateColorPresetMap = (obj: ColorObject) => {
  const result: Record<string, SerializedStyles> = {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      for (const shade in value) {
        const mapKey = `${key}${shade}`;

        result[mapKey] = css`
          color: var(--color-${key}-${shade});
        `;
      }
    } else {
      result[key] = css`
        color: var(--color-${key});
      `;
    }
  }

  return result;
};

export const colorPresetsMap = generateColorPresetMap(lightColors);

export type ColorPresetsMap = keyof typeof colorPresetsMap;
