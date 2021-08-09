import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";

export const NavBar: React.FC = () => {
  return (
    <>
      <nav className="nav-button-row">
        <Button type="ghost" className="nav-button">
          <Link to="/"> {"pages.home"}</Link>
        </Button>
        <Button type="ghost" className="nav-button">
          <Link to="/Product2List">{"pages.Product2List"}</Link>
        </Button>
      </nav>
    </>
  );
};
