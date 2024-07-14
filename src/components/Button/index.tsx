import { ButtonStyle, Container } from "./style";
import loadingGif from "../../assets/loading.gif";
import React from "react";

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  loading?: boolean;
  variant?: ButtonStyle;
};

export function Button({
  title,
  loading = false,
  variant = "primary",
  type = "submit",
  onClick,
}: ButtonTypes) {
  return (
    <Container type={type} disabled={loading} variant={variant} onClick={onClick}>
      {loading ? <img src={loadingGif} width={14} /> : title}
    </Container>
  );
}
