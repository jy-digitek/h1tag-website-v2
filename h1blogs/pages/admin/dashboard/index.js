import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import AdminLayout from "../Components/AdminLayout";

const index = () => {
  const router = useRouter();
  const { isLogin, userToken } = useSelector((state) => state.auth);
  console.log("2", isLogin);

  return (
    <AdminLayout>
      <h1>Welcome to Admin Page</h1>
    </AdminLayout>
  );
};

export default index;
