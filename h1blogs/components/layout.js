"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import Topbar from "./Topbar";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";

// <link
//   rel="stylesheet"
//   href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
// />;

export default function Layout({ children, ...rest }) {
  return (
    <ChakraProvider>
      <Topbar />
      <Navbar />

      <main>{children}</main>

      <Footer />
    </ChakraProvider>
  );
}
