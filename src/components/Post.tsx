import { Badge, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import TestPostImg from "../assets/test-post-img.png";
import { Link } from "react-router-dom";

type PostType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  tags: string[];
};

const Post = (props: PostType) => {
  return (
    <Card as={Link} to={`/post/${props.id}`}>
      <CardBody>
        <Image
          src={TestPostImg}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <HStack>
            {props.tags.map((t) => {
              return <Badge key={t} colorScheme="red">{t}</Badge>;
            })}
          </HStack>
          <Heading size="md">{props.title}</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum itaque
            omnis facilis animi ipsam nulla voluptatibus eveniet, quas
            reiciendis dignissimos vitae aperiam, id earum velit? Est beatae id
            at, consequuntur sit debitis dolorum eos, porro aliquam natus a
            eveniet perferendis!
          </Text>
          <Text color="blue.600">{props.createdAt}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Post;
