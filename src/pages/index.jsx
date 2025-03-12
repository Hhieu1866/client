import React from "react";
import { useNavigate } from "zmp-ui";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <button
        className="border border-black"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default HomePage;
