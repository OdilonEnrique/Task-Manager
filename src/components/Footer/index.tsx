import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Footer() {
  return (
    <>
      <Container>
        <Link to={""}>
          <strong>&copy; Reprograma Jucás</strong>
        </Link>
      </Container>
    </>
  );
}
