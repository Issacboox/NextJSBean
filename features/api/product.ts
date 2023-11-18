import api from "./api";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getAllProductByRemark = async (remark: string) => {
  const response = await api.get(`/allproductlistbyremark/${remark}`);
  return response.data;
};

