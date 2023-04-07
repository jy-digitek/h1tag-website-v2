// import { NextResponse } from "next/server";

// export const middleware = (req) => {
//   let verify = window.localStorage.getItem("token");
//   const { isLogin, userToken } = useSelector((state) => state.auth);
//   let url = req.url;

//   if (!isLogin && url.includes("/dashboard/:path*")) {
//     NextResponse.redirect("/admin");
//   }
// };
