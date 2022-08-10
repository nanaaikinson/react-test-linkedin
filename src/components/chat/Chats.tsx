import { FC, FormEvent, useState } from "react";
import { useChatStore } from "../../stores/chatStore";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Chat } from "./Chat";

export const Chats: FC = () => {
  // Data
  const [message, setMessage] = useState<string>("");
  const user = useChatStore((state) => state.user);
  const messages = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);

  // Methods
  const submitMessage = (e: FormEvent) => {
    e.preventDefault();

    addMessage(message);
    setMessage("");
  };

  return (
    <>
      <div className="row justify-center">
        <div className="col-12 sm:col-8 lg:col-7 xl:col-4">
          <div
            className="flex w-full h-screen border border-gray-50"
            style={{ contain: "content" }}
          >
            <nav className="fixed top-0 w-full py-3 px-5 bg-primary text-white">
              <div className="capitalize font-semibold">{user}</div>
            </nav>

            <div className="px-5 pb-10 pt-14 space-y-8 h-full w-full overflow-y-auto">
              {messages.map((record) => (
                <Chat record={record} key={record.id} />
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
