import { CardStyleType } from "../StatsCard/styles";
import { Container } from "./styles";

type StatsCardProps = {
  title: string;
  icon: string;
  number?: number;
  total?: number;
  variant?: CardStyleType;
  onClick?: () => void;
};

export function StatsCard({
  title,
  icon,
  number,
  total,
  variant = "neutral",
  onClick,
}: StatsCardProps) {
  const percentage = number && total ? (number / total) * 100 : 0;
  return (
    <>
      <Container onClick={onClick} variant={variant}>
        <div>
          <h3>
            {title} {total && `(${percentage.toFixed(2)})%`}
          </h3>
          <p>{number == undefined ? "-" : number}</p>
        </div>
        <i className="material-icons">{icon}</i>
      </Container>
    </>
  );
}
