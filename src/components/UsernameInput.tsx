import { FC, FormEvent, useState } from "react";
import { Button } from "./common/Button";
import { Input } from "./common/Input";

type Props = {
  updateUsername: (name: string) => void;
};

export const UsernameInput: FC<Props> = ({ updateUsername }) => {
  const [value, setValue] = useState("");

  // Methods
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    updateUsername(value);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="container w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter Username to continue</label>
          <div className="flex w-full items-center space-x-2">
            <Input required={true} value={value} updateModelValue={setValue} />

            <Button type={"submit"} label={"Continue"} />
          </div>
        </form>
      </div>
    </div>
  );
};
