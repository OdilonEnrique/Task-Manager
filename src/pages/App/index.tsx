import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Container } from "./styles";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <Container>
      <Header />

      <article>
        <section className="sideBar">
          <SideBar />
        </section>
        <Outlet /> {/* main */}
      </article>

      <Footer />
    </Container>
  );
}
