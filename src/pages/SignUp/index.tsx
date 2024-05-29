import { Container } from "./styles";
import logo from "../../assets/logo-rj.png";
import { Link } from "react-router-dom";
import { FormSignUp } from "../../components/FormSignUp";

export function SignUp() {
  return (
    <>
      <Container>
        <div className="signInPart2">
          <FormSignUp />
        </div>
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
      </Container>
    </>
  );
}
