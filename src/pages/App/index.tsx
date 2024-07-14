import { Outlet } from "react-router-dom";
import { Container } from "./style";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <Container>
      <Header />

      <article>
        <section className="sideBar">
          <SideBar />
        </section>

        <Outlet />
        {/* outlet is main pages */}
      </article>

      <Footer />
    </Container>
  );
}
