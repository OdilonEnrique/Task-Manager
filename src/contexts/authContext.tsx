import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { API } from "../configs/api";
import { STORAGE_USERID_KEY } from "../utils/userIdAuthKey";

export type SignInTypes = {
  email: string;
  password: string;
};

export type SignUpTypes = {
  name: string;
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (params: SignInTypes) => Promise<boolean | void>;
  signUp: (params: SignUpTypes) => Promise<boolean | void>;
  authUserID: string;
  signOut: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [authUserID, setAuthUserID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha!");

    setIsLoading(true);

    return API.post("/login", { email, password })
      .then((response) => {
        const userID = response.data.id;
        setAuthUserID(userID);
        localStorage.setItem(STORAGE_USERID_KEY, JSON.stringify(userID));
        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado ao fazer login!");
        }

        console.error("erro ao fazer login:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signUp({ name, email, password }: SignUpTypes) {
    if (!name || !email || !password)
      throw alert("Por favor informar name, email e senha!");

    setIsLoading(true);

    return API.post("/user", { name, email, password })
      .then((response) => {
        if (response?.data.status == 201) {
          alert("Usuário criado com sucesso!");
        }
        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado ao cadastrar usuário!");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    setAuthUserID("");
    localStorage.removeItem(STORAGE_USERID_KEY);

    API.post("/logout").catch((error) => {
      console.error("erro ao fazer logout:", error);
    });
  }

  useEffect(() => {
    const userIDStorage = localStorage.getItem(STORAGE_USERID_KEY);

    if (userIDStorage) {
      const userID = JSON.parse(userIDStorage);

      API.get("/user")
        .then((response) => {
          if (userID == response.data.id) setAuthUserID(userID);
        })
        .catch((error) => {
          console.error(error);
          if (error.response?.status == 401) signOut();
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signUp, authUserID, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
