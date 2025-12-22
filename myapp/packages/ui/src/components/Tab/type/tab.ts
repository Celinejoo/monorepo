export type TabType = "fixed" | "scrollable";
export type TabConfiguration = "label" | "icon" | "label-icon";

export interface TabItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  type: TabType;
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  configuration?: TabConfiguration;
  className?: string;
}
