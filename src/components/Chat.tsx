import { FC, FormEvent, useState } from "react";
import { Button } from "./common/Button";
import { Input } from "./common/Input";

export const Chat: FC = () => {
  // Data
  const [message, setMessage] = useState<string>("");

  // Methods
  const submitMessage = (e: FormEvent) => {
    e.preventDefault();

    console.log(message);
    setMessage("");
  };

  return (
    <>
      <div className="row justify-center">
        <div className="col-12 sm:col-8 lg:col-7 xl:col-4">
          <div
            className="flex w-full h-screen border border-gray-200"
            style={{ contain: "content" }}
          >
            <footer className="fixed bottom-0 w-full py-3 px-5 bg-gray-100">
              <form onSubmit={submitMessage}>
                <div className="flex items-center space-x-2">
                  <Input
                    required={false}
                    value={message}
                    placeholder={"Start typing"}
                    className="rounded-full"
                    updateModelValue={setMessage}
                  />
                  <Button
                    type={"submit"}
                    label={"Send"}
                    className="rounded-full"
                    disabled={message.length === 0}
                  />
                </div>
              </form>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
