import { useEffect, useState } from "react";
import { Chat } from "./components/Chat";
import { UsernameInput } from "./components/UsernameInput";

function App() {
  const [username, setUsername] = useState("");

  // Use Effect
  // Mounted
  useEffect(() => {
    console.log(username);
  }, [username]);

  // Methods
  const updateUsername = (name: string) => {
    setUsername(name);
  };

  return (
    // <>
    //   {username ? <Chart /> : <UsernameInput updateUsername={updateUsername} />}
    // </>

    <Chat />
  );
}

export default App;
