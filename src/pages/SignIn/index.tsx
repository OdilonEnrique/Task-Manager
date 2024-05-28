import { Container } from "./styles";
import logo from "../../assets/logo-reprograma-jucas.png";
import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";

export function SignIn() {
  return (
    <>
      <Container>
        <div className="signInPart1">
          <div>
            <h1>Task Manager</h1>
            <Link
              to={"https://emanuelquintino.github.io/Page-WDC"}
              target="_blank"
            >
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="signInPart2">
          <FormLogin />
        </div>
      </Container>
    </>
  );
}
