import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { fetchProductsNoView, deleteProduct } from "../../Service/service";
import { ProductAdd } from "../ProductAdd";
import { IProduct } from "../../Interfaces/interface";
import { ProductEdit } from "../EditProduct";
import ProductItem from "./ProductItem";

const productsFromDB: IProduct[] = [];

export const Product2List: React.FC = () => {
  const queryClient = useQueryClient();
  const history = useHistory();
  const show = useState(true);
  const [deleteSuccess, setDeleteSuccess] = useState("");
  const [productOneQuery, setProductOneQuery] = useState(productsFromDB);
  const [visible, setVisible] = useState("list");
  const { isLoading, isError, data, error } = useQuery(
    "products",
    fetchProductsNoView
  );
  const mutation = useMutation("delete-product", deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      setDeleteSuccess(`
      successfully deleted product`);
      setTimeout(() => {
        setDeleteSuccess("");
      }, 4000);
    },
    onError: () => {
      alert("there was an error");
      console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const activateAddNewWindow = () => {
    history.push("/ProductAdd");
  };

  const handleDelete = (productId: number): void => {
    console.log(typeof productId);
    mutation.mutate(productId);
  };

  const handleEdit = (productObject: IProduct[]): void => {
    setProductOneQuery(productObject);
    setVisible("edit");
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }
  if (visible === "list") {
    return (
      <>
        <button type="button" onClick={activateAddNewWindow}>
          Add New
        </button>
        {mutation.isSuccess ? <div>{deleteSuccess} </div> : null}
        {!show ? (
          <ProductAdd />
        ) : (
          <div>
            {data.map((product: IProduct) => (
              <ProductItem
                key={product.productId}
                product={product}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </div>
        )}
      </>
    );
  } else {
    return (
      <ProductEdit productOneQuery={productOneQuery} setVisible={setVisible} />
    );
  }
};
