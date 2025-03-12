import React, { useState } from "react";
import { Page, Box } from "zmp-ui";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("ok");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        console.log("Successfully login");
      }
    } catch (error) {
      if (error.res && error.res.data.success) {
        setError(error.res.data.error);
      } else {
        setError("Server error");
      }
    }
  };

  return (
    <Page>
      <div className="bg-[#b91732] size-full flex flex-col">
        <div className="p-9 bg-[#b91732] text-white font-bold text-3xl flex flex-col gap-2">
          <p>Hello</p>
          <p>Sign in!</p>
        </div>

        {/* form */}
        <form
          action=""
          className="p-9 bg-white flex-1 rounded-t-[30px] "
          onSubmit={handleSubmit}
        >
          {/* Email Input */}
          <Box mt={8}>
            <label
              htmlFor="email"
              className="text-base font-medium text-[#b91732]"
            >
              Gmail
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="mt-2 pb-1 w-full border-b border-gray-300 text-gray-500 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          {/* Password Input */}
          <Box mt={6} className="relative">
            <label
              htmlFor="password"
              className="text-base font-medium text-[#b91732]"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="mt-2 pb-1 w-full border-b border-gray-300 text-gray-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 bottom-2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </Box>

          {/* forgot pass */}
          <Box flex justifyContent="space-between" mt={4}>
            <Box flex className="gap-2">
              <input type="checkbox" className="accent-[#b91732] text-base" />
              <p className="text-base font-medium">Remember me</p>
            </Box>
            <p className="text-base font-medium">Forgot password?</p>
          </Box>

          <div className="flex flex-col items-center justify-center mt-12 ">
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="bg-[#b91732] text-lg font-bold w-full py-4 text-white rounded-full 
            shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-3">
            <p>Don't have account?</p>
            <button type="submit" className="font-bold">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default Login;
