import { useEffect, useState } from "react";
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
    <>
      {username ? <>App</> : <UsernameInput updateUsername={updateUsername} />}
    </>
  );
}

export default App;
