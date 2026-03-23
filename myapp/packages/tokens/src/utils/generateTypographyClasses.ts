import { heading, body } from "../typography/typography";

export const generateTypographyClasses = () => {
  let result = "";

  const createClass = (
    prefix: string,
    styles: Record<string, { fontSize: string; lineHeight: string }>,
  ) => {
    Object.entries(styles).forEach(([size, styleProps]) => {
      result += `.${prefix}-${size} {\n`;
      result += `font-size: ${styleProps.fontSize};\n`;
      result += `line-height: ${styleProps.lineHeight};\n`;
      result += `}\n\n`;
    });
  };

  createClass("heading", heading);
  createClass("body", body);

  return result;
};
