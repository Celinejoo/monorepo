import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Paragraph } from "../Paragraph";

type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  placement?: TooltipPlacement;
  disabled?: boolean;
}

const tooltipPositionMap = {
  top: css`
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  `,
  bottom: css`
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  `,
  left: css`
    right: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
  `,
  right: css`
    left: calc(100% + 8px);
    top: 50%;
    transform: translateY(-50%);
  `,
} as const;

const arrowPositionMap = {
  top: css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: var(--color-gray-800) transparent transparent transparent;
  `,
  bottom: css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 6px 6px 6px;
    border-style: solid;
    border-color: transparent transparent var(--color-gray-800) transparent;
  `,
  left: css`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px 0 6px 6px;
    border-style: solid;
    border-color: transparent transparent transparent var(--color-gray-800);
  `,
  right: css`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 6px 6px 6px 0;
    border-style: solid;
    border-color: transparent var(--color-gray-800) transparent transparent;
  `,
} as const;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;

  &:hover .tooltip-content {
    opacity: 1;
    visibility: visible;
  }
`;

const TooltipContent = styled.div<{ placement: TooltipPlacement }>(
  {
    position: "absolute",
    zIndex: 1000,
    padding: "8px 10px",
    minWidth: "max-content",
    maxWidth: "240px",
    borderRadius: "8px",
    background: "var(--color-gray-800)",
    boxSizing: "border-box",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.2s ease, visibility 0.2s ease",
    pointerEvents: "none",
    wordBreak: "keep-all",
    whiteSpace: "normal",
  },
  ({ placement }) => tooltipPositionMap[placement],
);

const TooltipArrow = styled.span<{ placement: TooltipPlacement }>(
  {
    position: "absolute",
    width: 0,
    height: 0,
  },
  ({ placement }) => arrowPositionMap[placement],
);

export const Tooltip = ({
  content,
  children,
  placement = "top",
  disabled = false,
}: TooltipProps) => {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipWrapper>
      {children}
      <TooltipContent
        className="tooltip-content"
        placement={placement}
        role="tooltip"
      >
        <Paragraph typography="sub3" color="white0">
          {content}
        </Paragraph>
        <TooltipArrow placement={placement} />
      </TooltipContent>
    </TooltipWrapper>
  );
};
