import Footer from "../../../components/footer";
import Topbar from "../../../components/Topbar";
import { ChakraProvider } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar.js";

export default function AdminLayout({ children }) {
  return (
    <ChakraProvider>
      <Topbar />
      <AdminNavbar />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  );
}
