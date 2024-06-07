import { useQuery } from "@tanstack/react-query";
import { AxiosPromise } from "axios";
import { API } from "../configs/api";

export function useQueryUser() {
  const query = useQuery({
    queryKey: ["userData"],
    queryFn: async (): AxiosPromise => await API.get("/user"),
  });
  return {
    ...query,
    data: query.data?.data,
  };
}
