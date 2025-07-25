import { queryKeys } from "@/constants/query-keys";
import { API } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const getMonthRange = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return {
    start: start.toISOString().split("T")[0],
    end: end.toISOString().split("T")[0],
  };
};
const { start, end } = getMonthRange();

const params = {
  sort: "sort",
  start,
  end,
};

export const useMaterials = () =>
  useQuery({
    queryKey: [queryKeys.MATERIALS],
    queryFn: async () => API.materials(params),
  });
