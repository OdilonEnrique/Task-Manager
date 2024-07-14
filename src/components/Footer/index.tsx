import { Container } from "./style";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Container>
      <Link to={"https://emanuelquintino.github.io/Page-WDC/"} target="_blank">
        <strong>&copy; Reprograma Jucás</strong>
      </Link>
    </Container>
  );
}
