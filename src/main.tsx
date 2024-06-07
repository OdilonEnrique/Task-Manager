import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes/index.tsx";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/global.ts";
import { AuthProvider } from "./contexts/authContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider theme={appTheme}>
          <AppRoutes />
          <GlobalStyles />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
