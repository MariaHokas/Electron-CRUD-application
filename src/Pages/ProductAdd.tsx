import React from "react";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { createProduct } from "../Service/service";
import { initialValues, NewProductProps } from "../interfaces/interface";

const ProductAdd: React.FC<NewProductProps> = ({ setShow, show }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.refetchQueries(["products"], { active: true });
    },
    onError: () => {
      alert("there was an error");
      console.log("tämä error", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const product = {
        ...values,
      };
      console.log(values);
      mutate(product);
      if (show) setShow(false);
      if (!show) setShow(true);
    },
  });
  return (
    <>
      {isLoading ? <p>Is loading ..</p> : null}
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          autoFocus
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="productNumber"
          name="productNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.productNumber}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="standardCost"
          name="standardCost"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.standardCost}
        />
        <input
          id="listPrice"
          name="listPrice"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.listPrice}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ProductAdd;
