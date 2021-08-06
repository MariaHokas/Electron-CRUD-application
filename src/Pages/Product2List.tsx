import { useMutation, useQuery, useQueryClient } from "react-query";
import { useStyles } from "../style";
import { fetchProductsNoView, deleteProduct } from "../Service/service";
import ProductAdd from "./ProductAdd";
import { useState } from "react";
import { EditProductProps, IProduct } from "../Interfaces/interface";
import ProductEdit from "./ProductEdit";

const productsFromDB: EditProductProps[] = [];

const Product2List: React.FC = () => {
  const styles = useStyles();
  const queryClient = useQueryClient();
  const [show, setShow] = useState(true);
  const [deleteSuccess, setDeleteSuccess] = useState("");
  const [productOneQuery, setProductOneQuery] = useState(productsFromDB);
  const [id, setId] = useState(0);
  const [visible, setVisible] = useState("list");
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
      console.log(error);
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
    console.log("olen productid :", productId);
    mutation.mutate(productId);
    setDeleteSuccess(`
    successfully deleted product number: ${productId}`);
    setTimeout(() => {
      setDeleteSuccess("");
    }, 4000);
  };

  const handleEdit = (productId: number, productObject: any): void => {
    setProductOneQuery(productObject);
    setId(productId);
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
          Add new
        </button>
        {mutation.isSuccess ? (
          <div className={styles.h3}>{deleteSuccess} </div>
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
                    <td>
                      {" "}
                      <button
                        value={product.productId}
                        onClick={() => handleEdit(product.productId, product)}
                        type="button"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  } else {
    return (
      <ProductEdit
        productOneQuery={productOneQuery}
        id={id}
        setVisible={setVisible}
      />
    );
  }
};

export default Product2List;
