import { Route, Routes } from "react-router-dom";
import { App } from "../pages/App";
import { Page404 } from "../pages/Page404";
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";
import { CreateTasks } from "../pages/CreateTasks";
import { About } from "../pages/About";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/create-tasks" element={<CreateTasks />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
