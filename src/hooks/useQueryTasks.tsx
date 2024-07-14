import { useQuery } from "@tanstack/react-query";
import { API } from "../configs/api";
import { useEffect, useState } from "react";
import { TaskDataTypes } from "../@types/tasks";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { UserDataTypes } from "../@types/user";

type FilterType = "all" | "completed" | "pending" | "late";

export function useQueryTasks() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState<FilterType>("all");

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useSearchParams();

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
    const { data } = await API.get("/user");
    const { tasksInfo } = data as UserDataTypes;

    let total;
    switch (filter) {
      case "all":
        total = tasksInfo.total;
        break;
      case "completed":
        total = tasksInfo.completed;
        break;
      case "pending":
        total = tasksInfo.pending;
        break;
      case "late":
        total = tasksInfo.late;
        break;

      default:
        total = tasksInfo.total;
        break;
    }

    const calcTotalPages = Math.ceil(total / limit);
    if (calcTotalPages != totalPages) setTotalPages(calcTotalPages);
  }

  function nextPage() {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
      navigate(`?filter=${filter}&page=${page + 1}`);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      navigate(`?filter=${filter}&page=${page - 1}`);
    }
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

  useEffect(() => {
    if (location.pathname != "/tasks") return;

    const pageQuery = Number(searchParams[0].get("page"));
    const filterQuery = searchParams[0].get("filter") as FilterType;

    setPage(pageQuery || 1);
    setFilter(filterQuery || "all");

    if (totalPages > 0) {
      if (pageQuery > totalPages) {
        navigate(`?filter=${filterQuery}&page=${totalPages}`);
        setPage(totalPages);
        return;
      }

      if (pageQuery < 1) {
        navigate(`?filter=${filterQuery}&page=1`);
        setPage(1);
        return;
      }
    }
  }, [page, totalPages, searchParams, navigate, location]);

  const query = useQuery({
    queryKey: ["tasksData", page, limit, filter],
    queryFn: () => getTasks({ page, limit, filter }),
  });

  const refetchQueryTask = async () => await query.refetch();

  return {
    ...query,
    data: query.data,
    refetchQueryTask,
    page,
    totalPages,
    nextPage,
    prevPage,
    changePage,
    changeLimit,
    changeFilter,
  };
}
