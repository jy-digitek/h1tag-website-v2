import { NextResponse } from "next/server";

export const middleware = (req) => {
  let verify = window.localStorage.getItem("token");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    NextResponse.redirect("/admin");
  }
};
