import { FC } from "react";

type Props = {
  type: "submit" | "reset" | "button";
  label: string;
};

export const Button: FC<Props> = ({ label, type }) => {
  return (
    <button className="btn btn-primary" type={type}>
      {label}
    </button>
  );
};
