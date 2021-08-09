import { Route, Switch } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import { Product2List } from "./Pages/ProductList/Product2List";
import "./App.global.css";
import { ProductAdd } from "./Pages/ProductAdd";
import { ProductEdit } from "./Pages/EditProduct";

const Pages: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path={"/Product2List"} component={Product2List} />
        <Route path={"/ProductAdd"} component={ProductAdd} />
        <Route path={"/EditProduct"} component={ProductEdit} />
      </Switch>
    </>
  );
};

export default Pages;
