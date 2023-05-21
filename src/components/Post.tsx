import { Badge, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import TestPostImg from "../assets/test-post-img.png"

const Post = () => {
  return (
    <Card >
      <CardBody>
        <Image
          src={TestPostImg}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
        <HStack>
            <Badge colorScheme="red">Music</Badge>
            <Badge colorScheme="green">Life</Badge>
        </HStack>
          <Heading size="md">Post Title</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600">
            1 hour ago
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Post;
