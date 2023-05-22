import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Text,
  } from '@chakra-ui/react'

  type NavDrawerProps = {
    onOpen: () => void
    onClose: () => void
    isOpen: boolean
  }

const NavDrawer = (props: NavDrawerProps) => {
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement='right'
        onClose={props.onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Pages</DrawerHeader>

          <DrawerBody>
          <VStack fontSize={24} spacing={6} mt={10}>
              <Text >
                Home
              </Text>
              <Text >
                About
              </Text>
              <Text >
                Contact
              </Text>
              <Text >
                Write
              </Text>
              <Text >
                Logout
              </Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavDrawer