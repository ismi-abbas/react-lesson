import React from "react";
import { PageContext } from "./Layout";
import { AuthContext } from "./AuthContext";

export default function App() {
  const { page: currentPage } = React.useContext(PageContext);

  return (
    <div className="h-[70%] border flex items-center w-full max-w-screen-md justify-center font-bold text-3xl">
      {currentPage === "home" && <HomePage />}
      {currentPage === "info" && <>Info</>}
      {currentPage === "about" && <>About</>}
      {currentPage === "login" && <LoginPage />}
    </div>
  );
}

function HomePage() {
  const { isLogin } = React.useContext(AuthContext);

  return (
    <div className="h-[70%] border flex items-center w-full max-w-screen-md justify-center font-bold text-3xl">
      User is {isLogin ? "logged in" : "not logged in"}
    </div>
  );
}

function LoginPage() {
  const { user, setUser, setIsLogin } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState("");

  function handleLogin() {
    console.log("asdasd")
    setUser({
      username,
      userId: 1,
    });

    setIsLogin(true);
  }
  return (
    <div className="h-[70%] border flex items-center w-full max-w-screen-md justify-center font-bold text-3xl flex-col gap-2">
      Login
      <div className="flex flex-col gap-2">
        {JSON.stringify(user)}
        <input
          type="username"
          className="border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" className="border" />

        <button
          onClick={() => {
            handleLogin();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
