import { createContext, useContext } from "react";

export interface AccordionItemContextValue {
  isOpen: boolean;
  toggle: () => void;
  headerId: string;
  panelId: string;
}

export const AccordionContext = createContext<AccordionItemContextValue | null>(
  null,
);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "AccordionHeader and AccordionPanel must be used within Accordion",
    );
  }
  return context;
};
