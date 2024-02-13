import { instance } from "./API";

async function getAllProductsApi() {
  const response = await instance.get("/products");
  const data = response.data;

  return data;
}

export default getAllProductsApi;
