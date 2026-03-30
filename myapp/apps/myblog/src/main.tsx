import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import { globalReset } from "@repo/ui";
import { BrowserRouter } from "react-router";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { injectCssVariables, injectTypographyClasses } from "@repo/tokens";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

injectCssVariables();
injectTypographyClasses();

createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <Global styles={globalReset} />
    <BrowserRouter>
      <ErrorBoundary fallbackUI={<div>Error</div>}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </AuthContextProvider>,
);
