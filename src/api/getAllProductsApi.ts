import { instance } from "./API";

async function getAllProductsApi() {
  const response = await instance.get("/products");
  const data = await response.data.result;

  return data;
}

export default getAllProductsApi;
