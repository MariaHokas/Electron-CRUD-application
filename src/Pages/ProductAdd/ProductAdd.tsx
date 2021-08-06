import React from "react";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { createProduct } from "../../Service/service";
import { initialValues, NewProductProps } from "../../Interfaces/interface";
import InputForm from "../../Components/InputForm/inputForm";

export const ProductAdd: React.FC<NewProductProps> = ({ setShow, show }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.refetchQueries(["products"], { active: true });
    },
    onError: () => {
      alert("there was an error");
      console.log(error);
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
      console.log("olen tämä value", values);
      mutate(product);
      if (show) setShow(false);
      if (!show) setShow(true);
    },
  });
  return (
    <>
      {isLoading ? <p>Is loading ..</p> : null}
      <InputForm formik={formik} />
    </>
  );
};
