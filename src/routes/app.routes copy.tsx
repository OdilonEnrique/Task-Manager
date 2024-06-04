import { Route, Routes } from "react-router-dom";
import { App } from "../pages/App";
import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
