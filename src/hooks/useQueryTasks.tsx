import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { useState } from "react";
import { TaskDataTypes } from "../components/TaskCard";

type FilterType = "all" | "completed" | "pending" | "late";

export function useQueryTasks() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState<FilterType>("all");

  async function getTasks({ page = 1, limit = 10, filter = "all" }) {
    if (page <= 0) page = 1;
    const offset = limit * (page - 1);

    await changeTotalPages(filter, limit);

    const { data } = await API.get(
      `/tasks?limit=${limit}&offset=${offset}&filter=${filter}`
    );

    return data.userTasks as TaskDataTypes[];
  }

  async function changeTotalPages(filter = "all", limit: number) {
    const { data } = await API.get("user");

    let total;

    switch (filter) {
      case "all":
        total = data.tasksInfo.total;
        break;
      case "completed":
        total = data.tasksInfo.completed;
        break;
      case "pending":
        total = data.tasksInfo.pending;
        break;
      case "late":
        total = data.tasksInfo.late;
        break;

      default:
        total = data.tasksInfo.total;
        break;
    }
    const calcTotalPages = Math.ceil(total / limit);
    if (calcTotalPages != totalPages) setTotalPages(calcTotalPages);
  }

  function nextPage() {
    if (page < totalPages) setPage((prevValue) => prevValue + 1);
  }

  function prevPage() {
    if (page > 1) setPage((prevValue) => prevValue - 1);
  }

  function changePage(value: number) {
    setPage(value);
  }

  function changeLimit(value: number) {
    setLimit(value);
  }

  function changeFilter(value: FilterType) {
    setFilter(value);
  }

  const query = useQuery({
    queryKey: ["tasksData", page, limit, filter],
    queryFn: () => getTasks({ page, limit, filter }),
  });
  return {
    ...query,
    data: query?.data,
    page,
    totalPages,
    nextPage,
    prevPage,
    changePage,
    changeLimit,
    changeFilter,
  };
}
