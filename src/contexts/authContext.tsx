import { PropsWithChildren, createContext } from "react";
import { API } from "../configs/api";

export type SignInTypes = {
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (params: SignInTypes) => Promise<boolean | void>;
};

export const AuthContext = createContext({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha!");

    return API.post("/login", { email, password })
      .then((res) => {
        console.log({ userID: res.data.id });
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado no login!");
          console.log(error);
        }
      });
  }
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}
