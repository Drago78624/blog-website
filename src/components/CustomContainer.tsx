import { Box, Container } from "@chakra-ui/react";

type CustomContainerProps = {
  children: React.ReactNode;
};

const CustomContainer = ({ children }: CustomContainerProps) => {
  return (
    <Container maxW={1400} mt={6}>
      <Box display={{ base: "block", lg: "flex" }} gap={20}>
        {children}
      </Box>
    </Container>
  );
};

export default CustomContainer;
