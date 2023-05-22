import { Box, Flex, HStack, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import CustomContainer from "../components/CustomContainer";
import Sidebar from "../components/Sidebar";
import TestPostImg from "../assets/test-post-img.png";
import {AiFillEdit} from "react-icons/ai"
import {MdDelete} from "react-icons/md"

const PostDetail = () => {
  return (
    <CustomContainer>
      <Box flex={9}>
        <Stack>
          <Image src={TestPostImg} />
          <Flex>
            <Heading size="lg">Post Title</Heading>
            <Spacer />
            <HStack spacing={4} >
              <Box color="green">
                <AiFillEdit fontSize={26} />
              </Box>
              <Box color="red">
                <MdDelete fontSize={26} />
              </Box>
            </HStack>
          </Flex>
          <Flex>
            <Text>Kashif Jhangra</Text>
            <Spacer />
            <Text color="blue.600">1 hour ago</Text>
          </Flex>
          <Box>
            <Text fontSize="xl" _firstLetter={{ml: 5, fontSize: "3xl", fontWeight: "bold"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit dolores excepturi dolore voluptatum sed similique, molestias sapiente alias ducimus quos facilis id porro expedita nisi praesentium? Voluptatibus eveniet, qui labore consectetur cumque dolorum sunt consequuntur pariatur fugiat exercitationem ab id ratione sequi corporis neque, perspiciatis autem dolore, perferendis aspernatur?</Text>
          </Box>
        </Stack>
      </Box>
      <Sidebar />
    </CustomContainer>
  );
};

export default PostDetail;
