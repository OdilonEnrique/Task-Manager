import { RouterProvider } from "react-router-dom";
import { authRouter } from "./auth.routes";

export function AppRoutes() {
  return <RouterProvider router={authRouter}/>;
}
