import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import CustomContainer from "../components/CustomContainer";
import Sidebar from "../components/Sidebar";
import TestUserImg from "../assets/test-user-img.png";
import { GrUpdate } from "react-icons/gr";

const UserSettings = () => {
  return (
    <CustomContainer>
      <Box flex={9}>
        <Stack>
          <HStack>
            <Image width={20} borderRadius="full" src={TestUserImg} />
            <GrUpdate fontSize={20} />
          </HStack>
          <form>
            <Stack>
              <Box>
                <Text mb="8px">Username</Text>
                <Input borderColor="gray.400" />
              </Box>
              <Box>
                <Text mb="8px">Email</Text>
                <Input borderColor="gray.400" />
              </Box>
              <Box>
                <Text mb="8px">Password</Text>
                <Input borderColor="gray.400" />
              </Box>
              <Box>
                <Button colorScheme="green">Update</Button>
              </Box>
            </Stack>
          </form>
        </Stack>
      </Box>
      <Sidebar />
    </CustomContainer>
  );
};

export default UserSettings;
