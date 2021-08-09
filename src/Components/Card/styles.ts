import { useFela } from "react-fela";

export const useStyles = () => {
  const { css } = useFela();
  return {
    card: css({
      backgroundColor: "#152238",
      margin: "0",
      borderRadius: 8,
      borderStyle: "solid",
      borderWidth: "thick",
      borderColor: "#d4af37",
      paddingBottom: "100px",
    }),
  };
};
