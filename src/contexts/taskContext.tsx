import { createContext, useState, ReactNode } from "react";
import { TaskDataTypes } from "../@types/tasks";
import { API } from "../configs/api";
import { toast } from "react-toastify";

interface TaskContextProps {
  taskData: TaskDataTypes;
  setTaskData: (task: TaskDataTypes) => void;
  deleteTask: (id: string) => Promise<boolean | void>;
  isLoading: boolean;
}

export const TaskContext = createContext({} as TaskContextProps);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskData, setTaskData] = useState({} as TaskDataTypes);
  const [isLoading, setIsloading] = useState(false);

  async function deleteTask(id: string) {
    setIsloading(true);
    return await API.delete(`/task/${id}`)
      .then((response) => {
        if (response.status == 200) {
          toast.dismiss();
          toast.success("Tarefa removida com sucesso!");
          return true;
        }
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(
          error.response?.data?.message || "Erro inesperado ao remover tarefa!"
        );
      })
      .finally(() => {
        setIsloading(false);
      });
  }

  return (
    <TaskContext.Provider value={{ taskData, setTaskData, deleteTask, isLoading }}>
      {children}
    </TaskContext.Provider>
  );
};
