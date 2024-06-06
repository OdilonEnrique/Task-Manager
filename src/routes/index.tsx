import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app.routes";
import { AuthRouter } from "./auth.routes";
import { useAuth } from "../hooks/useAuth";

export function AppRoutes() {
  const { authUserID } = useAuth();
  const isAuth = !!authUserID; //type conversion
  const routes = isAuth ? <AppRouter /> : <AuthRouter />;
  //type cohesion
  return <BrowserRouter>{routes}</BrowserRouter>;
}
