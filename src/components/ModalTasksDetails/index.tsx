import { TaskDataTypes } from "../TaskCard";
import { Container } from "./style";

export type ModalTasksDetailsTypes = {
  toggleModal?: () => void;
  task: TaskDataTypes;
};

export function ModalTaksDatails({
  toggleModal,
  task,
}: ModalTasksDetailsTypes) {
  return (
    <>
      <Container onClick={toggleModal}>
        <div className="handleTaskContainer" onClick={toggleModal}>
          <div className="formContainer">
            <div className="headerForm">
              <h2>Detalhes da Tarefa</h2>
              <i className="material-icons closeIcon" onClick={toggleModal}>
                close
              </i>
            </div>
            {task.title}
            {/* form */}
          </div>
        </div>
      </Container>
    </>
  );
}
