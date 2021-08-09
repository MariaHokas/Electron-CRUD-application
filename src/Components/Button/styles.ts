import { useFela } from "react-fela";

export const useStyles = () => {
  const { css } = useFela();
  return {
    button: css({
      color: "goldenrod",
      margin: "10px",
      borderStyle: "none",
      borderWidth: "2px",
      borderColor: "goldenrod",
      textTransform: "uppercase",
    }),
  };
};
