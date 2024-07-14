import { useContext } from "react";
import { TaskContext } from "../contexts/taskContext";

export const useTask = () => {
  return useContext(TaskContext);
};
