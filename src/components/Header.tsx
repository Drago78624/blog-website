import { Box, Heading, Image } from "@chakra-ui/react"
import HeroImg from "../assets/hero.jpg"

const Header = () => {
  return (
    <Box position="relative">
        <Heading size="2xl" textAlign="center" position="absolute" left="50%" top="50%" transform="translateX(-50%) translateY(-50%)" color="white">React Blog Website</Heading>
        <Image width="100%" maxH="600px" objectFit="cover" src={HeroImg} />
    </Box>
  )
}

export default Header