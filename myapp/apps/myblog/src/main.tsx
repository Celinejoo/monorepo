import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import { globalReset } from "@repo/ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={globalReset} />
    <App />
  </StrictMode>
);
