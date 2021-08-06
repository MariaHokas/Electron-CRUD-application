import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchProductsNoView, deleteProduct } from "../../Service/service";
import { ProductAdd } from "../ProductAdd";
import { useState } from "react";
import { EditProductProps, IProduct } from "../../Interfaces/interface";
import { ProductEdit } from "../EditProduct";

const productsFromDB: EditProductProps[] = [];

export const Product2List: React.FC = () => {
  const queryClient = useQueryClient();
  const [show, setShow] = useState(true);
  const [buttonText, setButtonText] = useState("Add New");
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
    if (show) {
      setShow(false);
      setButtonText("Close");
    }
    if (!show) {
      setShow(true);
      setButtonText("Add New");
    }
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
          {buttonText}
        </button>
        {mutation.isSuccess ? <div>{deleteSuccess} </div> : null}
        {!show ? (
          <ProductAdd
            show={show}
            setShow={setShow}
            setButtonText={setButtonText}
          />
        ) : (
          <div className={"table-body"}>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Product Id</th>
                  <th>Name</th>
                  <th>Product Number</th>
                  <th>List Price</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product: IProduct) => (
                  <tr key={product.productId}>
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
