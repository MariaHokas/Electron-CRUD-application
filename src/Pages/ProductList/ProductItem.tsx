import * as React from "react";
import { IProduct } from "../../Interfaces/interface";

export interface ProductItemProps {
  product: IProduct;
  handleDelete: (handleDelete: number) => void;
  handleEdit: (handleEdit: IProduct[]) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  handleDelete,
  handleEdit,
}) => {
  return (
    <>
      <div className="product-item-container">
        <button
          className="product-item-delete-button"
          value={product.productId}
          onClick={() => handleDelete(product.productId as number)}
          type="button"
        >
          <p className="delete-button-text">X</p>
        </button>
        <button
          className="product-item-edit-button"
          value={product.productId}
          onClick={() => handleEdit(product as IProduct[])}
          type="button"
        >
          {" "}
          <h2>
            {" "}
            <strong>{product.name} </strong>{" "}
          </h2>
          <p>Product number: {product.productNumber}</p>
          <p> Product Price: {product.listPrice} €</p>
        </button>
      </div>
    </>
  );
};

export default ProductItem;
