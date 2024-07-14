import { Container } from "./style";

type MenuProps = {
  title: string;
  icon: string;
  onClick?: () => void;
};

export function MenuItem({ title, icon, onClick }: MenuProps) {
  return (
    <Container onClick={onClick}>
      <i className="material-icons">{icon}</i>
      <span>{title}</span>
    </Container>
  );
}
