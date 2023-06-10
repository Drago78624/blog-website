import { Box, Grid, GridItem } from "@chakra-ui/react";
import Post from "./Post";
import type PostType from "../models/PostType";

type PostsProps = {
  posts: PostType[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <Box flex={9}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {posts.map((p) => {
          return (
            <GridItem key={p._id}>
              <Post id={p._id} title={p.title} description={p.body} createdAt={p.createdAt} tags={p.tags} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Posts;
