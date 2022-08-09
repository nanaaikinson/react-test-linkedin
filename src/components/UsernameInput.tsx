export function UsernameInput() {
  return (
    <div className="flex w-screen h-screen justify-center items-start">
      <div className="container w-full max-w-2xl">
        <label htmlFor="username">Enter Username</label>
        <input type="text" className="form-input" />
      </div>
    </div>
  );
}
