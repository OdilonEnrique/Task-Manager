import { useQuery } from "@tanstack/react-query";
import { AxiosPromise } from "axios";
import { API } from "../configs/api";
import { UserDataTypes } from "../@types/user";

export function useQueryUser() {
  const query = useQuery({
    queryKey: ["userData"],
    queryFn: async (): AxiosPromise<UserDataTypes> =>
      await API.get<UserDataTypes>("/user"),
  });

  const refetchQueryUser = async () => await query.refetch();

  return {
    ...query,
    data: query.data?.data,
    refetchQueryUser,
  };
}
