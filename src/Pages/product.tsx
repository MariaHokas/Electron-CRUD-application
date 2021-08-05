import React from "react";
import { useStyles } from "../style";

interface PlanetProps {
  planet: {
    productName?: string;
    categoryName?: string;
    productDescription?: string;
    id?: number;
  };
}

const Planet: React.FC<PlanetProps> = ({ planet }) => {
  const styles = useStyles();
  return (
    <div className={styles.card}>
      <h3 className={styles.h3}>{planet.productName}</h3>
      <p>{planet.categoryName}</p>
      <p>{planet.productDescription}</p>
      <p>{planet.id}</p>
    </div>
  );
};

export default Planet;
