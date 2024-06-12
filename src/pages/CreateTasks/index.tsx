import { FormMutationTask } from "../../components/FormMutationTask";
import { Container } from "./styles";


export function CreateTasks() {
  return (
    <>
      <Container>
        <h2>Adicionar Tarefas</h2>

        <div className="formContainer">
          <FormMutationTask />
        </div>
      </Container>
    </>
  );
}
