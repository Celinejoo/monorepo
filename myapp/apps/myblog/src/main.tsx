import { createRoot } from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import { globalReset } from "@repo/ui";
import { BrowserRouter } from "react-router";
import { AuthContextProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <Global styles={globalReset} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
