import axios from "axios";

const url = "http://localhost:3050/";

export const fetchProducts = async () => {
  const response = await fetch(`${url}product-view/`);
  return response.json();
};

export const fetchProductsNoView = async () => {
  const response = await fetch(`${url}product/order`);
  return response.json();
};

export const createProduct = async (data) => {
  const { data: response } = await axios.post(`${url}product/create`, data);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const { data: response } = await axios.delete(`${url}product/${productId}`);
  return response.data;
};

export const updateProduct = async ({ productId, ...data }) => {
  const response = await fetch(
    `http://localhost:3050/product/update/${productId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("error");
  }

  return response.text();
};
