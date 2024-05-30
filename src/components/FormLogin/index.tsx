import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

type InputTypes = {
  email: string;
  password: string;
};

export function FormLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>();

  const { signIn } = useAuth();

  const onSubmiit: SubmitHandler<InputTypes> = async ({ email, password }) => {
    const userLogged = await signIn({ email, password });
    if (userLogged) reset();
  };

  return (
    <Container>
      <h2>Faça seu Login</h2>
      <form onSubmit={handleSubmit(onSubmiit)}>
        <section>
          <label>
            Email:
            <input
              type="email"
              placeholder="exemplo@email.com"
              {...register("email", {
                required: "campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Endereço de e-mail inválido",
                },
              })}
            />
          </label>
          <span className="inputError">{errors.email?.message}</span>
        </section>

        <section>
          <label>
            Senha:
            <input
              type="password"
              placeholder="Digite sua Senha"
              {...register("password", {
                required: "Campo obrigatório",
              })}
            />
          </label>
          <span className="inputError">{errors.password?.message}</span>
        </section>

        <Button title="Login" loading={false} />
      </form>

      <span className="messageChangePage">Não tem uma conta? </span>

      <button className="buttonChangePage" onClick={() => navigate("/signup")}>
        Registre-se
      </button>
    </Container>
  );
}
