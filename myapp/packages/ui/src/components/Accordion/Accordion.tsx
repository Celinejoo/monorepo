import styled from "@emotion/styled";
import { Paragraph } from "../Paragraph";
import { css } from "@emotion/react";
import { useId, useMemo, useState } from "react";
import { AccordionContext, useAccordionContext } from "./context";

export interface AccordionBaseProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionHeaderProps {
  prefix?: React.ReactNode;
  title: React.ReactNode;
}

export interface AccordionContentProps {
  children: React.ReactNode;
}

export const StyledHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  background: var(--color-white-500);
  cursor: pointer;
`;

export const LeftSection = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const Arrow = styled.span<{
  isOpen: boolean;
}>`
  transition: all 0.3s ease;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const StyledPanel = styled.div`
  padding: 10px 12px;
`;

export const AccordionRoot = ({
  children,
  defaultOpen = false,
}: AccordionBaseProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const headerId = `accordion-header-${id}`;
  const panelId = `accordion-panel-${id}`;

  const value = useMemo(
    () => ({ isOpen, toggle, headerId, panelId }),
    [isOpen, headerId, panelId],
  );
  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionHeader = ({ title, prefix }: AccordionHeaderProps) => {
  const { isOpen, toggle, headerId, panelId } = useAccordionContext();
  return (
    <StyledHeader
      id={headerId}
      type="button"
      aria-expanded={isOpen}
      aria-controls={panelId}
      onClick={toggle}
    >
      <LeftSection>
        {prefix && (
          <Paragraph typography="sub3" as="span">
            {prefix}
          </Paragraph>
        )}
        <Paragraph typography="sub3" as="span">
          {title}
        </Paragraph>
      </LeftSection>

      <Arrow isOpen={isOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.47243 8.39766C4.80494 8.10671 5.31035 8.1404 5.60129 8.47291L11.9992 15.7848L18.3972 8.47291C18.6881 8.1404 19.1935 8.10671 19.526 8.39766C19.8585 8.6886 19.8922 9.19401 19.6013 9.52652L11.9992 18.2146L4.39717 9.52652C4.10622 9.19401 4.13992 8.6886 4.47243 8.39766Z"
            fill="#2D2D2D"
          />
        </svg>
      </Arrow>
    </StyledHeader>
  );
};

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { isOpen, headerId, panelId } = useAccordionContext();
  return (
    <StyledPanel
      id={panelId}
      role="region"
      aria-labelledby={headerId}
      hidden={!isOpen}
    >
      {children}
    </StyledPanel>
  );
};
interface AccordionCompoundComponent extends React.FC<AccordionBaseProps> {
  Header: React.FC<AccordionHeaderProps>;
  Content: React.FC<AccordionContentProps>;
}

export const Accordion = Object.assign(AccordionRoot, {
  Header: AccordionHeader,
  Content: AccordionContent,
}) as AccordionCompoundComponent;
