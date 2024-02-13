import { instance } from "./API";

async function getDetailProductApi(id: number) {
  const response = await instance.get(`/products/${id}`);
  const data = response.data.result;

  return data;
}

export default getDetailProductApi;
