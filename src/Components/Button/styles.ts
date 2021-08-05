import { useFela } from "react-fela";
import { ITheme } from "../../themes";

export const useStyles = () => {
  const { css } = useFela<ITheme>();
  return {
    button: css({
      color: "goldenrod",
      margin: "10px",
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: "goldenrod",
      textTransform: "uppercase",
    }),
  };
};
