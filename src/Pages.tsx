import { Route, Switch } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Product2List from "./Pages/Product2List";
import "./App.global.css";

const Pages: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path={"/Pages/Product2List"} component={Product2List} />
        {/* <Route path={"/Counter/Counter"} component={Example} /> */}
      </Switch>
    </>
  );
};

export default Pages;
