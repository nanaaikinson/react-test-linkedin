import { FC, FormEvent, useState } from "react";
import { Avatar } from "./common/Avatar";
import { Button } from "./common/Button";
import { Input } from "./common/Input";

export const Chat: FC = () => {
  // Data
  const [message, setMessage] = useState<string>("");
  const messages = [
    { id: 1, me: true, text: "JA" },
    { id: 2, me: true, text: "JA" },
    { id: 3, me: false, text: "NO" },
    { id: 4, me: true, text: "JA" },
    { id: 5, me: false, text: "EB" },
    { id: 6, me: false, text: "EB" },
    { id: 7, me: false, text: "EB" },
    { id: 8, me: false, text: "EB" },
    { id: 9, me: false, text: "EB" },
    { id: 10, me: false, text: "EB" },
    { id: 11, me: false, text: "EB" },
  ];

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
            <div className="px-5 py-10 space-y-8 h-full w-full overflow-y-auto">
              {messages.map((record, index) => (
                <div
                  className={
                    record.me
                      ? "flex flex-row-reverse space-x-2 space-x-reverse"
                      : "flex flex-row space-x-2"
                  }
                  key={index}
                >
                  <Avatar text={record.text} />
                  <div className="bg-gray-200 rounded-lg p-4 mt-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet, magni?
                  </div>
                </div>
              ))}
            </div>

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
