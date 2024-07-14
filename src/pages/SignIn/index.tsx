import { FormLogin } from "../../components/FormLogin";
import { Container } from "./style";
import logoReprogramaJucas from "../../assets/logo-reprograma-jucas.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";

export function SignIn() {
  const navigate = useNavigate();
  const { isLoading } = useAuth();
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (delay) {
    return null;
  }

  return (
    <Container>
      <div className="signInLogo">
        <div>
          <h1>Task Manager</h1>
          <Link to={"https://emanuelquintino.github.io/Page-WDC/"} target="_blank">
            <img src={logoReprogramaJucas} alt="logo-reprograma-jucas" />
          </Link>
        </div>
      </div>

      <div className="signInForm">
        <h2>Faça seu login</h2>

        <FormLogin />

        <div className="messageChangePage">
          <span>Não tem uma conta? </span>
          <button onClick={() => navigate("/sign-up")} disabled={isLoading}>
            Registre-se
          </button>
        </div>
      </div>
    </Container>
  );
}
