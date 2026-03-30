import styled from "@emotion/styled";
import { Paragraph } from "../Paragraph";
import {
  ButtonSize,
  buttonSizeMap,
  ButtonVaiant,
  buttonVarientMap,
  IconSize,
  iconSizeMap,
} from "./type/iconbutton";

export interface IconButtonProps {
  variant?: ButtonVaiant;
  size?: ButtonSize;
  iconSize?: IconSize;
  configuration?: "icon" | "label-icon";
  icon?: React.ReactNode;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonBase = styled.button<IconButtonProps>(
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    transition: "all ease 0.2s",
    cursor: "pointer",

    "&:active:not(:disabled)": {
      transform: "scale(0.97)",
    },

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  ({ variant = "fill" }) => buttonVarientMap[variant],
  ({ size = "medium" }) => buttonSizeMap[size],
);

export const Label = ({
  text,
  variant,
}: {
  text: string;
  variant?: ButtonVaiant;
}) => {
  return (
    <Paragraph
      typography="sub3"
      color={variant === "border" || variant === "clear" ? "gray700" : "white0"}
    >
      {text}
    </Paragraph>
  );
};

const IconWrapper = styled.div<{ size: IconSize }>(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ({ size }) => iconSizeMap[size],
);

export const Icon = ({
  children,
  size = "medium",
}: {
  children: React.ReactNode;
  size?: IconSize;
}) => {
  return <IconWrapper size={size}>{children}</IconWrapper>;
};

export const IconButton = ({
  configuration = "label-icon",
  variant = "border",
  size = "medium",
  icon,
  iconSize,
  label,
  disabled,
  onClick,
}: IconButtonProps) => {
  return (
    <ButtonBase
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
    >
      <Icon size={iconSize}>{icon}</Icon>
      {configuration === "label-icon" && label && (
        <Label text={label} variant={variant} />
      )}
    </ButtonBase>
  );
};
