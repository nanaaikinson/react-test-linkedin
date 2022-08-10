import { FC, FormEvent, useEffect, useState } from "react";
import { BroadcastChannel } from "broadcast-channel";
import { useChatStore } from "../../stores/chatStore";
import { IBroacastMessage, IMessage } from "../../types";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Chat } from "./Chat";
import { ConstantsEnum } from "../../types/enums";

export const Chats: FC = () => {
  // Data
  const channel = new BroadcastChannel(ConstantsEnum.ChatChannel);
  const [message, setMessage] = useState<string>("");
  const [tab, setTab] = useState<string>("");
  const [user, setUser] = useState<string | undefined>(undefined);
  const chatMessages = useChatStore((state) => state.messages);
  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user") ?? "";
    const tabId = sessionStorage.getItem("tabId") ?? "";

    setUser(sessionUser);
    setTab(tabId);

    // Listeb broadcast message
    channel.onmessage = (data: IBroacastMessage) => onBroadcastMessage(data);
  }, []);

  // Methods
  const submitMessage = (e: FormEvent) => {
    e.preventDefault();

    const data: IBroacastMessage = {
      tabId: tab,
      message,
      user: user as string,
    };

    channel.postMessage(data);
    setMessage("");
  };
  const onBroadcastMessage = (data: IBroacastMessage) => {
    addMessage(data.message, data.user);
  };

  return (
    <>
      <div className="row justify-center">
        <div className="col-12 sm:col-8 lg:col-7 xl:col-4">
          <div
            className="flex w-full h-screen border border-gray-50 !overflow-x-hidden"
            style={{ contain: "content" }}
          >
            <nav className="fixed top-0 w-full py-3 px-5 bg-primary text-white">
              <div className="capitalize font-semibold">{user}</div>
            </nav>

            <div className="px-5 pb-10 pt-14 space-y-8 h-full w-full overflow-y-auto">
              {chatMessages.map((record: IMessage) => (
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
