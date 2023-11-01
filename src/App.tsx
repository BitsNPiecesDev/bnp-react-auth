import React from "react";
import Login from "./Login/Login";

function App() {
  return (
    <Login
      validators={{
        email: (email: string) => !!email,
        password: (password: string) => !!password,
      }}
    />
  );
}

export default App;
