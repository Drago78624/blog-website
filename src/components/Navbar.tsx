import {useRef} from "react"
import {Box, Container, Flex, HStack, Heading, Image, Text, useDisclosure} from "@chakra-ui/react"
import TestUserImg from "../assets/test-user-img.png"
import {ImSearch} from "react-icons/im"
import {HiOutlineMenu} from "react-icons/hi"
import NavDrawer from "./NavDrawer"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLDivElement>(null)

  return (
    <Box shadow="xl" p={2}>
        <Container maxW="1400px">
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Heading size="lg">React Blog</Heading>
              </Box>
              <HStack display={{base: "none", md: "flex"}} spacing={5} fontSize="lg">
                <Box>
                  <Text>Home</Text>
                </Box>
                <Box>
                  <Text>About</Text>
                </Box>
                <Box>
                  <Text>Contact</Text>
                </Box>
                <Box>
                  <Text>Write</Text>
                </Box>
                <Box>
                  <Text>Logout</Text>
                </Box>
              </HStack>
              <HStack spacing={5}>
                <Box>
                  <Image src={TestUserImg} width={12} borderRadius="100%" />
                </Box>
                <Box>
                  <ImSearch fontSize={18} />
                </Box>
                <Box display={{base: "inline-block", md: "none"}} color="black" ref={btnRef} onClick={onOpen}>
                  <HiOutlineMenu fontSize={25} />
                </Box>
                <NavDrawer onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
              </HStack>
            </Flex>
        </Container>
    </Box>
  )
}

export default Navbar