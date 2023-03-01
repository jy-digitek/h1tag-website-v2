import Link from "next/link";
import { useState } from "react";
import LoginForm from "../../components/loginForm";

const index = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default index;
