import { useMutation } from "@tanstack/react-query";
import { API } from "../configs/api";
import { TaskDataTypes } from "../components/TaskCard";

async function updateTask(task: TaskDataTypes) {
  const { id, title, description, date, status } = task;
  return await API.put(`/task/${id}`, { title, description, date, status });
}

export const useTaskUpdate = () => {
  const mutate = useMutation({
    mutationFn: updateTask,
    onSuccess: (res) => {
      if (res.status == 200) {
        alert("Tarefa atualizada com sucesso!");
      }
    },
    onError: (error) => {
      console.log(error);
      alert("Erro inesperado ao atualizar tarefa!");
    },
  });

  return mutate;
};
