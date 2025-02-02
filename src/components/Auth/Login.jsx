import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
            setEmail("");
            setPassword("");
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
            className="outline-none border-2 border-emerald-600 rounded-full text-xl py-3 px-5"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
            className="outline-none border-2 border-emerald-600 rounded-full text-xl mt-3 py-3 px-5"
            type="password"
            placeholder="Enter password"
          />
          <button className=" w-50 border-none bg-emerald-600 rounded-full text-xl mt-5 py-1 px-5">
            {" "}
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
