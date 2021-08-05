import { useFela } from "react-fela";
import { ITheme } from "../../themes";

export const useStyles = () => {
  const { css } = useFela<ITheme>();
  return {
    card: css({
      margin: "0",
      borderRadius: 8,
      borderStyle: "solid",
      borderWidth: "thick",
      borderColor: "#d4af37",
      //borderColor: theme.colors.MINT_5CA5B8,
      nested: {
        "& .ant-card-head-wrapper": {
          alignItems: "flex-start",
        },
        "& .ant-card-body": {
          padding: 0,
        },
      },
    }),
  };
};
