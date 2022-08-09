import { FC } from "react";
import classNames from "classnames";

type Props = {
  type: "submit" | "reset" | "button";
  label: string;
  disabled?: boolean;
  className?: string;
};

export const Button: FC<Props> = ({ label, type, disabled, className }) => {
  const buttonClassNames = classNames("btn btn-primary", className);

  return (
    <button className={buttonClassNames} type={type} disabled={disabled}>
      {label}
    </button>
  );
};
