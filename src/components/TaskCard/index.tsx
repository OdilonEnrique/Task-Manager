import { Container } from "./style";

export type TaskDataTypes = {
  id?: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "pending";
};

type TaskCardProps = {
  data: TaskDataTypes;
  onClick: () => void;
};

export function TaskCard({ data, onClick }: TaskCardProps) {
  const { title, description, date, status } = data;
  const isCompleted = status == "completed";
  const isLate = new Date(date) < new Date();

  const taskStatus = isCompleted ? "completed" : isLate ? "late" : "pending";
  return (
    <>
      <Container onClick={onClick}>
        <div className={`status ${taskStatus}`}>{taskStatus}</div>

        <div className="taskDetails">
          <strong>{title}</strong>
          <p>{description}</p>
        </div>

        <span>{new Date(date).toLocaleString()}</span>
      </Container>
    </>
  );
}
