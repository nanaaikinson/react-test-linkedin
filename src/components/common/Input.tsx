import { FC } from "react";
import classNames from "classnames";

type Props = {
  required: boolean;
  value: string;
  placeholder?: string;
  className?: string;
  updateModelValue: (str: string) => void;
};

export const Input: FC<Props> = ({
  required,
  value,
  placeholder,
  className,
  updateModelValue,
}) => {
  const inputClassNames = classNames("form-input", className);

  return (
    <input
      className={inputClassNames}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(e) => updateModelValue(e.target.value)}
    />
  );
};
