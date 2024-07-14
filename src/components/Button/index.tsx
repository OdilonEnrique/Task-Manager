import { ButtonStyleType, Container } from "./style";
import loadingGif from "../../assets/loading.gif";

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  loading?: boolean;
  variant?: ButtonStyleType;
  onClick?: () => void;
};

export function Button({
  title,
  type = "submit",
  loading = false,
  variant = "PRIMARY700",
  onClick,
}: ButtonTypes) {
  return (
    <Container type={type} disabled={loading} variant={variant} onClick={onClick}>
      {loading ? <img src={loadingGif} width={14} /> : title}
    </Container>
  );
}
