import React from "react";

interface IInputForm {
  formik: any;
}

const InputForm: React.FC<IInputForm> = ({ formik }) => {
  return (
    <>
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

export default InputForm;
