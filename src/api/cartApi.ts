import { instance } from "./API";

async function getCartApi() {
  const response = await instance.get(`/cart`);
  const data = await response.data;
  return data;
}

async function addCartApi(productId: number) {
  const response = await instance.post(`/cart/products/${productId}`);
  const data = await response.data;
  console.log(data);
}

async function removeCartApi(productId: number) {
  const response = await instance.delete(`/cart/products/${productId}`);
  const data = await response.data;
  console.log(data);
}

async function clearCartApi(productId: number) {
  const response = await instance.delete(`/cart/products/${productId}/clear`);
  const data = await response.data;
  console.log(data);
}
const cartApi = {
  getCartApi,
  addCartApi,
  removeCartApi,
  clearCartApi,
};

export default cartApi;
