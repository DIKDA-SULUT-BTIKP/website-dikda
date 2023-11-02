import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Hello World");
  };
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center p-10 bg-white rounded shadow-md"
        >
          <p className="mb-5 text-3xl text-gray-600 uppercase">Login</p>
          <input
            type="email"
            name="email"
            className="mb-2 w-72 input input-bordered"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="mb-6 input w-72 input-bordered"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full btn btn-primary" id="login" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
