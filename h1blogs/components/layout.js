import Navbar from "./Navbar"
import Footer from "./footer"
import Topbar from "./Topbar"
import ContactForm from "./contactform"
import { Container } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <ChakraProvider>

      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      
      </ChakraProvider>
  )
}