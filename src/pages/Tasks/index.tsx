import { useState } from "react";
import { ModalTaskDetails } from "../../components/ModalTaskDetails";
import { Pagination } from "../../components/Pagination";
import { TaskCard } from "../../components/TaskCard";
import { useQueryTasks } from "../../hooks/useQueryTasks";
import { Container } from "./style";
import { TaskDataTypes } from "../../@types/tasks";
import { useTask } from "../../hooks/useTask";

export function Tasks() {
  const [showModalTaskDetails, setShowModalTaskDetails] = useState(false);
  const { setTaskData } = useTask();

  const { data, isLoading, error, changeLimit, page, totalPages, prevPage, nextPage } =
    useQueryTasks();

  function toggleModal() {
    setShowModalTaskDetails((prevState) => (prevState == true ? false : true));
  }

  function addTaskToggleModal(task: TaskDataTypes) {
    toggleModal();
    setTaskData(task);
  }

  return (
    <Container>
      <div className="headPageTasks">
        <h2>Lista</h2>

        <div className="paginationDesktop">
          <Pagination
            page={page}
            step={5}
            totalPages={totalPages}
            prevPage={prevPage}
            nextPage={nextPage}
            changeLimit={changeLimit}
          />
        </div>
      </div>

      {isLoading && <span className="loading">Carregando...</span>}
      {!isLoading && error && <span className="queryError">Erro!</span>}

      <div className="tasksContainer scrollBar">
        {data?.length == 0 ? (
          <p className="loading">Sem tarefas para mostrar</p>
        ) : (
          data?.map((task) => {
            return (
              <TaskCard
                data={task}
                key={task.id}
                onClick={() => addTaskToggleModal(task)}
              />
            );
          })
        )}
      </div>

      <div className="paginationMobile">
        <Pagination
          page={page}
          step={5}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
          changeLimit={changeLimit}
        />
      </div>

      {showModalTaskDetails && <ModalTaskDetails toggleModal={toggleModal} />}
    </Container>
  );
}
