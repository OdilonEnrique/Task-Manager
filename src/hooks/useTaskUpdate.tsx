import { useMutation } from "@tanstack/react-query";
import { API } from "../configs/api";
import { toast } from "react-toastify";
import { TaskDataTypes } from "../@types/tasks";
import { AxiosError } from "axios";

async function updateTask(data: TaskDataTypes) {
  const { id, title, description, date, status } = data;
  return await API.put(`/task/${id}`, { title, description, date, status });
}

export const useTaskUpdate = () => {
  const mutate = useMutation({
    mutationFn: updateTask,
    onSuccess: (response) => {
      if (response.status == 200) {
        toast.dismiss();
        toast.success("Tarefa atualizada com sucesso!");
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.dismiss();
      toast.error(
        error.response?.data?.message || "Erro inesperado ao atualizar tarefa!"
      );
    },
  });

  return mutate;
};
