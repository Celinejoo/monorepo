import { colors } from "@repo/tokens";

export type ColorPreset =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "text"
  | "textSubtle"
  | "white";

export const colorPresetsMap: Record<ColorPreset, string> = {
  primary: colors.primary[500],
  secondary: colors.primary[300],
  success: colors.status.success,
  warning: colors.status.warning,
  error: colors.status.error,
  info: colors.status.info,
  text: colors.ui.textPrimary,
  textSubtle: colors.ui.textSubtle,
  white: colors.ui.surface,
};

export type colorPresetsMap = keyof typeof colorPresetsMap;
