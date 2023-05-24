import { Flex, Spacer } from "@chakra-ui/react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom"

const RootLayout = () => {
  return (
    <Flex direction="column" minH="100vh">
        <Navbar />
        <Outlet />
        <Spacer />
        <Footer />
    </Flex>
  )
}

export default RootLayout