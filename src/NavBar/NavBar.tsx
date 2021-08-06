import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import { useStyles } from "../style";

export const NavBar: React.FC = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.App_planet}>
        <Button type="ghost">
          <Link to="/"> {"pages.home"}</Link>
        </Button>
        <Button type="ghost">
          <Link to="/Product2List">{"pages.Product2List"}</Link>
        </Button>
      </div>
    </>
  );
};
