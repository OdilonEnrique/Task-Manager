import { CardStyleType, Container } from "./styles";

type StatsCardProps = {
  title: string;
  icon: string;
  number?: number;
  total?: number;
  variant?: CardStyleType;
  onClick?: () => void;
};

export function StatsCards({
  icon,
  title,
  number,
  variant = "neutral",
  total,
  onClick,
}: StatsCardProps) {
  const percentage = number && total ? (number / total) * 100 : 0;

  return (
    <Container onClick={onClick} variant={variant}>
      <div>
        <h3>
          {title} {total && `(${percentage.toFixed(2)}%)`}
        </h3>

        <p>{number == undefined ? "-" : number}</p>
      </div>

      <i className="material-icons">{icon}</i>
    </Container>
  );
}
