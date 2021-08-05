import { useQuery } from "react-query";
import { useStyles } from "../style";
import { fetchProducts } from "../Service/service";

interface IProduct {
  productName?: string;
  categoryName?: string;
  productDescription?: string;
  id?: number;
  products: [];
}

const ProductList: React.FC = () => {
  const styles = useStyles();
  const { isLoading, isError, data, error } = useQuery(
    "products",
    fetchProducts
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <>
      <div className={styles.body}>
        <table className={styles.table}>
          <thead className={styles.th}>
            <tr className={styles.th}>
              <th />
              <th>Name</th>
              <th>Product Number</th>
            </tr>
          </thead>
          <tbody className={styles.App_planet}>
            {data.map((product: IProduct, index: any) => (
              <tr className={styles.td} key={index}>
                <td></td>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.categoryName}</td>
                <td>{product.productDescription}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
