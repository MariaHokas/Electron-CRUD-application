import { useMutation, useQuery, useQueryClient } from "react-query";
import { useStyles } from "../style";
import { fetchProductsNoView, deleteProduct } from "../Service/service";
import ProductAdd from "./ProductAdd";
import { useState } from "react";
import { IProduct } from "../interfaces/interface";

const Product2List: React.FC = () => {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const [show, setShow] = useState(true);
  const [deleteSuccess, setDeleteSuccess] = useState(0);
  const { isLoading, isError, data, error } = useQuery(
    "products",
    fetchProductsNoView
  );

  const mutation = useMutation("delete-product", deleteProduct, {
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

  const activateAddNewWindow = () => {
    if (show) setShow(false);
    if (!show) setShow(true);
  };

  const handleDelete = (productId: number): void => {
    mutation.mutate(productId);
    setDeleteSuccess(productId);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }

  return (
    <>
      <button type="button" onClick={activateAddNewWindow}>
        Add new
      </button>
      {mutation.isSuccess ? (
        <div className={styles.h3}> Product {deleteSuccess} deleted!</div>
      ) : null}
      {!show ? (
        <ProductAdd show={show} setShow={setShow} />
      ) : (
        <div className={styles.body}>
          <table className={styles.table}>
            <thead className={styles.th}>
              <tr className={styles.th}>
                <th />
                <th>Product Id</th>
                <th>Name</th>
                <th>Product Number</th>
                <th>List Price</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody className={styles.App_planet}>
              {data.map((product: IProduct) => (
                <tr className={styles.td} key={product.productId}>
                  <td>
                    {""}
                    <button
                      value={product.productId}
                      onClick={() => handleDelete(product.productId)}
                      type="button"
                    >
                      delete
                    </button>
                  </td>
                  <td>{product.productId}</td>
                  <td>{product.name}</td>
                  <td>{product.productNumber}</td>
                  <td>{product.listPrice}</td>
                  <td>{product.standardCost}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Product2List;
