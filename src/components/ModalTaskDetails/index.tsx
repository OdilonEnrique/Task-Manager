import { Container } from "./style";
import { FormMutationTask } from "../FormMutationTask";
import { useEffect } from "react";

type HandleTaskProps = {
  toggleModal: () => void;
};

export function ModalTaskDetails({ toggleModal }: HandleTaskProps) {
  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key == "Enter") {
      toggleModal();
    }
  }

  useEffect(() => {
    function handleKeyUp(event: KeyboardEvent) {
      if (event.key == "Escape") {
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
            <h2>Detalhes da tarefa</h2>
            <i
              className="material-icons closeIcon"
              onClick={toggleModal}
              onKeyUp={handleKeyUp}
              tabIndex={0}
            >
              close
            </i>
          </div>
          <FormMutationTask isUpdate={true} toggleModal={toggleModal} />
        </div>
      </div>
    </Container>
  );
}
