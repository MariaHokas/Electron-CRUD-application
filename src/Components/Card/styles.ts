import { useFela } from "react-fela";
import { ITheme } from "../../themes";

export const useStyles = () => {
  const { css } = useFela<ITheme>();
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
