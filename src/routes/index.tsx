import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app.routes";
import { AuthRouter } from "./auth.routes";
import { useAuth } from "../hooks/useAuth";

export function AppRoutes() {
  const { authUserID } = useAuth();
  const routes = authUserID ? <AppRouter /> : <AuthRouter />;
  return <BrowserRouter>{routes}</BrowserRouter>;
}
