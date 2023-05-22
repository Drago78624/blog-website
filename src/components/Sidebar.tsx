import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import SidebarImg from "../assets/sidebar-img.png";
import {BsFacebook} from "react-icons/bs"
import {RiInstagramFill} from "react-icons/ri"
import {FaTwitterSquare} from "react-icons/fa"
import {BsPinterest} from "react-icons/bs"


const Sidebar = () => {
  return (
    <Box flex={2} mt={{base: 10, lg: 0}} mx={{base: "auto", lg: 0}} maxW="500px">
      <VStack spacing={4}>
        <Heading size="md" textAlign="center">ABOUT ME</Heading>
        <Box>
          <Image maxW={200} src={SidebarImg} mx="auto" />
          <Text mt={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            enim consequatur officia sint reiciendis qui delectus optio culpa
            error esse.
          </Text>
        </Box>
      </VStack>
      <Box mt={10}>
        <Heading size="md" textAlign="center">
          CATEGORIES
        </Heading>
        <Flex fontWeight="semibold" p={4} justifyContent="space-between" alignItems="center">
          <VStack align="left">
            <Text>Life</Text>
            <Text>Music</Text>
            <Text>Style</Text>
          </VStack>
          <VStack align="left">
            <Text>Tech</Text>
            <Text>Cinema</Text>
            <Text>Medicines</Text>
          </VStack>
        </Flex>
      </Box>
      <VStack spacing={4} mt={10}>
        <Heading size="md">FOLLOW US</Heading>
        <HStack spacing={6} fontSize={24}>
            <BsFacebook />
            <RiInstagramFill />
            <FaTwitterSquare />
            <BsPinterest />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
