import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/global.ts";
import { AuthProvider } from "./contexts/authContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./routes/index.tsx";
import { TaskProvider } from "./contexts/taskContext.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <TaskProvider>
          <ThemeProvider theme={appTheme}>
            <AppRoutes />
            <GlobalStyles />
          </ThemeProvider>
        </TaskProvider>
      </AuthProvider>
    </QueryClientProvider>

    <ToastContainer
      theme={"dark"}
      autoClose={3000}
      closeOnClick={true}
      pauseOnHover={true}
      position={"top-right"}
      pauseOnFocusLoss={false}
      style={{ zIndex: 10001 }}
    />
  </React.StrictMode>
);
