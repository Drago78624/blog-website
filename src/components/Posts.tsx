import { Box, Grid, GridItem } from "@chakra-ui/react"
import Post from "./Post"

const Posts = () => {
  return (
    <Box flex={9}>
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={6}>
          <GridItem>
            <Post />
          </GridItem>
          <GridItem>
            <Post />
          </GridItem>
          <GridItem>
            <Post />
          </GridItem>
          <GridItem>
            <Post />
          </GridItem>
          <GridItem>
            <Post />
          </GridItem>
          <GridItem>
            <Post />
          </GridItem>
        </Grid>
    </Box>
  )
}

export default Posts