// src/styles/utils/generateCssVariables.ts

export const generateCssVariables = (
  obj: Record<string, string | Record<string, string>>,
  prefix: string,
) => {
  let result = "";

  const process = (key: string, value: string | Record<string, string>) => {
    if (typeof value === "object" && value !== null) {
      Object.entries(value).map(([nestedKey, nestedValue]) => {
        return process(`${key}-${nestedKey}`, nestedValue);
      });
    } else {
      result += `--${prefix}-${key}: ${value};\n`;
    }
  };

  Object.entries(obj).forEach(([key, value]) => {
    process(key, value);
  });

  return result;
};
