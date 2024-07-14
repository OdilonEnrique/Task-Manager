import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function App() {
  return (
    <Container>
      <Header />

      <article>
        <section className="sideBar">
          <SideBar />
        </section>
        
        <Outlet /> {/*Main*/}
      </article>

      <Footer />
    </Container>
  );
}
