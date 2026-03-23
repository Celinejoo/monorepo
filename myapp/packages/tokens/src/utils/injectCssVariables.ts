import { darkColors, lightColors } from "../colors";
import { fontSize, fontWeight, lineHeight } from "../typography/typographyVars";
import { generateCssVariables } from "./generateCssVariables";

export const injectCssVariables = () => {
  const lightCss = generateCssVariables(lightColors, "color");
  const darkCss = generateCssVariables(darkColors, "color");
  const fontSizeCss = generateCssVariables(fontSize, "font-size");
  const fontWeightCss = generateCssVariables(fontWeight, "font-weight");
  const lineHeightCss = generateCssVariables(lineHeight, "line-height");

  const styleTag = document.createElement("style");

  styleTag.innerHTML = `
    :root {
      ${lightCss}
      ${fontSizeCss}
      ${fontWeightCss}
      ${lineHeightCss}
    }

    [data-theme="dark"] {
      ${darkCss}
    }
  `;
  document.head.appendChild(styleTag);
};
