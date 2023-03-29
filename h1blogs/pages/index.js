//import Head from 'next/head';

import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";

export default function Index() {
  return (
    <>
      <Home />
    </>
  );
}
