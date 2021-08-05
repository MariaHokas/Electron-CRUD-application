import React from "react";
import { Button as ButtonComponent } from "antd";
import { ButtonProps } from "antd/lib/button";
import cx from "classnames";
import { useStyles } from "./styles";

interface IProps extends ButtonProps {
  className?: string;
}

const Button: React.FC<IProps> = ({
  children,
  type,
  className,
  danger,
  ...buttonProps
}) => {
  const { button } = useStyles();
  return (
    <ButtonComponent
      className={cx(button, className)}
      type={type}
      {...buttonProps}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
