import { useFela } from "react-fela";

export const useStyles = () => {
  const { css } = useFela();
  return {
    body: css({
      margin: 0,
      fontFamily: "sans-serif",
      background: "#152238",
      color: "#ddd",
      textAlign: "left",
      padding: "10px",
      boxSizing: "border-box",
      marginTop: "20px",
    }),
    h3: css({
      color: "#8d8741",
      fontSize: "1em",
      letterSpacing: "2px",
      textAlign: "center",
    }),
    table: css({
      margin: "auto",
      marginTop: "50px",
      border: "solid",
      boxShadow: "1px 2px white",
      marginBottom: "20px",
    }),
    th: css({
      textAlign: "left",
      border: "0.1px solid #fbeec1",
      padding: "5px",
    }),
    td: css({
      textAlign: "left",
      border: "0.1px solid #fbeec1",
      padding: "10px",
    }),
    App_planet: css({
      width: "960px",
      margin: "auto",
    }),
    card: css({
      padding: "8px 16px",
      background: "#1b1b1b",
      margin: "16px 0",
      borderRadius: 20,
      nested: {
        "& h1": {
          marginBottom: 0,
          marginRight: "24px",
        },
        "& p": {
          margin: "6px 0",
          color: "#999",
        },
      },
    }),
  };
};
