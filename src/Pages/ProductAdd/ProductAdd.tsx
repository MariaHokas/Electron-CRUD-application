import React from "react";
import { useFormik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { createProduct } from "../../Service/service";
import { initialValues } from "../../Interfaces/interface";
import InputForm from "../../Components/InputForm/inputForm";

export const ProductAdd: React.FC = () => {
  const queryClient = useQueryClient();
  const history = useHistory();
  const { mutate, isLoading, error } = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.refetchQueries(["products"], { active: true });
      history.push("/Product2List");
    },
    onError: () => {
      alert("there was an error");
      console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const product = {
        ...values,
      };
      mutate(product);
    },
  });
  return (
    <>
      {isLoading ? <p>Is loading ..</p> : null}
      <button
        className="button-basic"
        onClick={() => history.push("/Product2List")}
      >
        Close
      </button>
      <InputForm formik={formik} />
    </>
  );
};
