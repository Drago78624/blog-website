import {
  Box,
  Button,
  Container,
  Image,
  Input,
  InputGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import TestWritePostImg from "../assets/test-writepost-img.jpg";
import { IoCloudUploadSharp } from "react-icons/io5";

const WritePost = () => {
  return (
    <Container maxW={1400}>
      <Image objectFit="cover" width="full" maxH={500} src={TestWritePostImg} />
      <Box my={4}>
        <IoCloudUploadSharp fontSize={28} />
      </Box>
      <form>
        <Stack spacing={5}>
          <InputGroup>
            <Input borderColor="gray.400" placeholder="Post Title" />
          </InputGroup>
          <InputGroup>
            <Textarea borderColor="gray.400" minH={250} placeholder="Post Description" />
          </InputGroup>
          <Button size="md" colorScheme="green">Publish</Button>
        </Stack>
      </form>
    </Container>
  );
};

export default WritePost;
