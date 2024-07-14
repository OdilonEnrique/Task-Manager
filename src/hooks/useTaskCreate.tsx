import { useMutation } from "@tanstack/react-query";
import { API } from "../configs/api";
import { TaskDataTypes } from "../components/TaskCard";

async function createTask(task: TaskDataTypes) {
  const { title, description, date, status } = task;
  return await API.post("/task", { title, description, date, status });
}

export const useTaskCreate = () => {
  const mutate = useMutation({
    mutationFn: createTask,
    onSuccess: (res) => {
      if (res.status == 201) {
        alert("Tarefa criada com sucesso!");
      }
    },
    onError: (error) => {
      console.log(error);
      alert("Erro inesperado ao criar tarefa!");
    },
  });

  return mutate;
};
