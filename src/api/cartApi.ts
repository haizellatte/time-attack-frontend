import { instance } from "./API";

async function getCartApi() {
  const response = await instance.get(`/cart`);
  const data = await response.data.result.items;
  return data;
}

async function addCartApi(productId: number) {
  await instance.post(`/cart/products/${productId}`);
}

async function removeCartApi(productId: number) {
  await instance.delete(`/cart/products/${productId}`);
}

async function clearCartApi(productId: number) {
  await instance.delete(`/cart/products/${productId}/clear`);
}
const cartApi = {
  getCartApi,
  addCartApi,
  removeCartApi,
  clearCartApi,
};

export default cartApi;
