import { Products } from "@prisma/client";
import { axiosInstance } from "./instance";

export const getSearchProducts = async (query: string): Promise<Products[]> => {
  return (await axiosInstance.get<Products[]>("/search", { params: { query } }))
    .data;
};
