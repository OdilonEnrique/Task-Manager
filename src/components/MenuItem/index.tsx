import { Container } from "./styles";

type MenuProps = {
  title: string;
  icon: string;
  onClick?: () => void;
};

export function MenuItem({ icon, title, onClick }: MenuProps) {
  return (
    <Container onClick={onClick}>
      <i className="material-icons">{icon}</i>
      <span>{title}</span>
    </Container>
  );
}
