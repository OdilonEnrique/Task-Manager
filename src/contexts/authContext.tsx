import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { API } from "../configs/api";

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
  signOut: () => void;
  authUserID: string;
  isLoading: boolean;
};

export const AuthContext = createContext({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(false);
  const [authUserID, setAuthUserID] = useState("");

  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) {
      throw alert("Por favor informar email e senha!");
    }

    setIsLoading(true);

    return API.post("/login", { email, password })
      .then((res) => {
        const userID = res.data.id;

        setAuthUserID(userID);
        localStorage.setItem("@task_manager:userID", JSON.stringify(userID));

        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado do login!");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signUp({ name, email, password }: SignUpTypes) {
    if (!name || !email || !password) {
      throw alert("Por favor informar nome, email e senha!");
    }

    setIsLoading(true);

    return API.post("/user", { name, email, password })
      .then((res) => {
        alert(res?.data.message);

        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado ao criar usuario!");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    localStorage.removeItem("@task_manager:userID");
    setAuthUserID("");
    API.post("/logout").catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    const userID = localStorage.getItem("@task_manager:userID");

    if (userID) {
      const id = JSON.parse(userID);

      API.get("/user")
        .then((res) => {
          if (id == res.data.id) setAuthUserID(userID);
        })
        .catch((error) => {
          console.log(error);
          if (error.response?.status == 401) signOut();
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signUp, signOut, isLoading, authUserID }}
    >
      {children}
    </AuthContext.Provider>
  );
}
