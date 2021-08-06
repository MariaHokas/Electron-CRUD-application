import { useFormik } from "formik";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { InputForm } from "../../Components/InputForm";
import { EditProductProps } from "../../Interfaces/interface";
import { updateProduct } from "../../Service/service";

export const ProductEdit: React.FC<EditProductProps> = ({
  productOneQuery,
  setVisible,
}) => {
  const queryClient = useQueryClient();
  const [initialValues, setInitialValues] = useState({ ...productOneQuery });
  const { mutate, isLoading, error } = useMutation(updateProduct, {
    onSuccess: () => {
      queryClient.refetchQueries(["products"], { active: true });
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
      setInitialValues({ ...values });
      mutate(values);
      setVisible("list");
    },
  });

  return (
    <>
      {isLoading ? <p>Is loading ..</p> : null}
      <button onClick={() => setVisible("list")}>Close</button>
      <InputForm formik={formik} />
    </>
  );
};
