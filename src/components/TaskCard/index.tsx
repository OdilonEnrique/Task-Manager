import { TaskDataTypes } from "../../@types/tasks";
import { Container } from "./style";

type PropsTypes = {
  data: TaskDataTypes;
  onClick: () => void;
};

export function TaskCard({ data, onClick }: PropsTypes) {
  const { title, description, date, status } = data;

  const isCompleted = status == "completed";
  const isLate = new Date(date) < new Date();

  const taskStatus = isCompleted ? "completed" : isLate ? "late" : "pending";

  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key == "Enter") {
      onClick();
    }
  }

  return (
    <Container onClick={onClick} onKeyUp={handleKeyUp} tabIndex={0}>
      <div className={`status ${taskStatus}`}>{taskStatus}</div>

      <div className="taskDetails">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <span>{new Date(date).toLocaleString()}</span>
    </Container>
  );
}
