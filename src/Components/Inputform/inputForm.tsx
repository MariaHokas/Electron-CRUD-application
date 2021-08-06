import React from "react";

interface IInputForm {
  formik: any;
}

export const InputForm: React.FC<IInputForm> = ({ formik }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-field-box">
          <label htmlFor="name">Product Name</label>
          <input
            autoFocus
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <label htmlFor="productNumber">Product Name</label>
          <input
            id="productNumber"
            name="productNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productNumber}
          />

          <label htmlFor="standardCost">Standard Cost</label>
          <input
            id="standardCost"
            name="standardCost"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.standardCost}
          />
          <label htmlFor="listPrice">List Price</label>
          <input
            id="listPrice"
            name="listPrice"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.listPrice}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
