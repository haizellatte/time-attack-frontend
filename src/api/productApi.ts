import { instance } from "./API";

async function getAllProductsApi() {
  const response = await instance.get("/products");
  const data = await response.data.result;

  return data;
}

async function getDetailProductApi(id: number) {
  const response = await instance.get(`/products/${id}`);
  const data = await response.data.result;

  return data;
}

const productApi = {
  getAllProductsApi,
  getDetailProductApi,
};

export default productApi;
