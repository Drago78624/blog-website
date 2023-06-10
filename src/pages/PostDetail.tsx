import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import CustomContainer from "../components/CustomContainer";
import Sidebar from "../components/Sidebar";
import TestPostImg from "../assets/test-post-img.png";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostType from "../models/PostType";
import axios from "axios"

const PostDetail = () => {
  const params = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v1/blogs/${params.postId}`
      );
      setPost(response.data.blog);
    };
    fetchSinglePost();
  }, []);

  return (
    <CustomContainer>
      <Box flex={9}>
        <Stack>
          <Image src={TestPostImg} />
          <Flex>
            <Heading size="lg">{post?.title}</Heading>
            <Spacer />
            <HStack spacing={4}>
              <Box color="green">
                <AiFillEdit fontSize={26} />
              </Box>
              <Box color="red">
                <MdDelete fontSize={26} />
              </Box>
            </HStack>
          </Flex>
          <Flex>
            <Text>{post?.author?.fname}</Text>
            <Spacer />
            <Text color="blue.600">{post?.createdAt}</Text>
          </Flex>
          <Box>
            <Text
              fontSize="xl"
              _firstLetter={{ ml: 5, fontSize: "3xl", fontWeight: "bold" }}
            >
              {post?.body}
            </Text>
          </Box>
        </Stack>
      </Box>
      <Sidebar />
    </CustomContainer>
  );
};

export default PostDetail;
