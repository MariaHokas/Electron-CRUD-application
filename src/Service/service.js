import axios from "axios";

const url = "http://localhost:3050/";

export const fetchProducts = async () => {
  const res = await fetch(`${url}product-view/`);
  return res.json();
};

export const fetchProductsNoView = async () => {
  const res = await fetch(`${url}product/order`);
  return res.json();
};

export const createProduct = async (data) => {
  const { data: response } = await axios.post(`${url}product/create`, data);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const { data: response } = await axios.delete(`${url}product/${productId}`);
  return response.data;
};
