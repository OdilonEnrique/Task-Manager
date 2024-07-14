import { Link } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/logo-rj.png";
import { FormSignUp } from "../../components/FormSignUp";
import { useEffect, useState } from "react";

export function SignUp() {
  const [deley, setDeley] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeley(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (deley) {
    return null;
  }
  return (
    <Container>
      <div className="signInPart2">
        <FormSignUp />
      </div>

      <div className="signInPart1">
        <div>
          <Link
            to={"https://emanuelquintino.github.io/Page-WDC"}
            target="_blank"
          >
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
