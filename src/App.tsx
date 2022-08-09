import { Chats } from "./components/chat/Chats";
import { UsernameInput } from "./components/UsernameInput";
import { useChatStore } from "./stores/chatStore";

function App() {
  const user = useChatStore((state) => state.user);
  const setUser = useChatStore((state) => state.setUser);

  // Methods
  const updateUsername = (name: string) => {
    setUser(name);
  };

  return (
    <>{user ? <Chats /> : <UsernameInput updateUsername={updateUsername} />}</>
  );
}

export default App;
