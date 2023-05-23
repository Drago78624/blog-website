import { useRef } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import TestUserImg from "../assets/test-user-img.png";
import { ImSearch } from "react-icons/im";
import { HiOutlineMenu } from "react-icons/hi";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement>(null);
  const isLoggedIn = false;

  return (
    <Box shadow="xl" p={2}>
      <Container maxW="1400px">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Heading as={Link} to="/" size="lg">
              React Blog
            </Heading>
          </Box>
          <HStack
            display={{ base: "none", md: "flex" }}
            spacing={5}
            fontSize="lg"
          >
            <Box>
              <Text as={Link} to="/">
                Home
              </Text>
            </Box>
            <Box>
              <Text as={Link} to="/">
                About
              </Text>
            </Box>
            <Box>
              <Text as={Link} to="/">
                Contact
              </Text>
            </Box>
            {isLoggedIn && (
              <Box>
                <Text as={Link} to="/write">
                  Write
                </Text>
              </Box>
            )}
            {isLoggedIn && (
              <Box>
                <Text as={Link} to="/">
                  Logout
                </Text>
              </Box>
            )}
          </HStack>
          <HStack spacing={5}>
            {isLoggedIn && (
              <Box as={Link} to="/settings">
                <Image src={TestUserImg} width={12} borderRadius="100%" />
              </Box>
            )}
            {!isLoggedIn && (
              <HStack>
                <Button as={Link} to="/login" >Login</Button>
                <Button as={Link} to="/register" colorScheme="green">Register</Button>
              </HStack>
            )}
            <Box>
              <ImSearch fontSize={18} />
            </Box>
            <Box
              display={{ base: "inline-block", md: "none" }}
              color="black"
              ref={btnRef}
              onClick={onOpen}
            >
              <HiOutlineMenu fontSize={25} />
            </Box>
            <NavDrawer onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
