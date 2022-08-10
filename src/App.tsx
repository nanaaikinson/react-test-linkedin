import { useEffect, useState } from "react";
import { Chats } from "./components/chat/Chats";
import { UsernameInput } from "./components/UsernameInput";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [user, setUser] = useState<string | undefined>(undefined);

  // Hooks
  useEffect(() => {
    const tabId = sessionStorage.getItem("tabId");
    const sessionUser = sessionStorage.getItem("user") ?? undefined;

    setUser(sessionUser);

    if (!tabId) {
      sessionStorage.setItem("tabId", `tab__${uuidv4()}`);
    }
  });

  // Methods
  const updateUsername = (name: string) => {
    sessionStorage.setItem("user", name);
    setUser(name);
  };

  return (
    <>{user ? <Chats /> : <UsernameInput updateUsername={updateUsername} />}</>
  );
}

export default App;
