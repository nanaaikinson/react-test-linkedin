import { FC } from "react";

type Props = {
  required: boolean;
  value: string;
  updateModelValue: (str: string) => void;
};

export const Input: FC<Props> = ({ required, value, updateModelValue }) => {
  return (
    <input
      className="form-input"
      value={value}
      required={required}
      onChange={(e) => updateModelValue(e.target.value)}
    />
  );
};
