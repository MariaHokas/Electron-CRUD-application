import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import { useStyles } from "../style";

const NavBar: React.FC = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.App_planet}>
        <Button type="ghost">
          <Link to="/"> {"pages.home"}</Link>
        </Button>
        <Button type="ghost">
          <Link to="/Pages/Product2List">{"pages.Product2List"}</Link>
        </Button>
        <Button type="ghost">
          <Link to="/Planet/Planets">{"pages.planets"}</Link>
        </Button>
      </div>
    </>
  );
};

export default NavBar;
