import { useEffect } from "react";
import { FormMutationTask } from "../FormMutationTask";
import { TaskDataTypes } from "../TaskCard";
import { Container } from "./styles";

type ModalTaskDetailsTypes = {
  toggleModal?: () => void;
  task: TaskDataTypes;
};

export function ModalTaskDetails({ toggleModal, task }: ModalTaskDetailsTypes) {
  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (toggleModal && event.key == "Enter") {
      toggleModal();
    }
  }

  useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (toggleModal && event.key == "Escape") {
        toggleModal();
      }
    }

    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [toggleModal]);

  return (
    <Container onClick={toggleModal}>
      <div className="handleTaskContainer" onClick={toggleModal}>
        <div className="formContainer">
          <div className="headerForm">
            <h2>Detalhes da Tarefa</h2>
            <i
              className="material-icons closeIcon"
              onClick={toggleModal}
              tabIndex={0}
              onKeyUp={handleKeyUp}
            >
              close
            </i>
          </div>
          <FormMutationTask
            isUpdate={true}
            toggleModal={toggleModal}
            taskData={task}
          />
        </div>
      </div>
    </Container>
  );
}
