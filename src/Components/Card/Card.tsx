import { Card as CardComponent, CardProps } from "antd";
import cx from "classnames";
import { useStyles } from "./styles";

interface IProps extends CardProps {
  className?: string;
}

export function Card({ className, ...props }: IProps) {
  const { card } = useStyles();
  return <CardComponent className={cx(card, className)} {...props} />;
}
