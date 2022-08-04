import { Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Link, useDisclosure, Image, Divider, DrawerBody, Button } from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi'
import React from "react"
import AdressList from "./AdressList"

export function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  return (
    <>
      <Flex color="#AFB6C2" _hover={{ color: "#fff" }}>
        <Link ref={btnRef} onClick={onOpen}>
          <GiHamburgerMenu size="25" />
        </Link>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay/>
        <DrawerContent bgColor="#1D1D1B" >
          <DrawerCloseButton
            color="#AFB6C2"
            _hover={{ color: "#fff" }}
            _focus={{ boxShadow: "none" }}
          />

          <DrawerHeader color="#AFB6C2">
            <Flex justify="center" align="center">
              <Image mt="6" h="65px" src="/Ser Ignis - Gold.png" />
            </Flex>
          </DrawerHeader>
          
          <Divider mt="4" opacity="10%"/>

          <DrawerBody>

            <Flex flexDirection="column">
              <AdressList title="Início" adress="/" />
              <AdressList title="A Comunidade" adress="/community" />
              <AdressList title="Baluartes" adress="/baluartes" />
              <AdressList title="Downloads" adress="/downloads" />
              <AdressList title="Blog" adress="/blog" />
              <AdressList title="Contato" adress="/" />
            </Flex>

            <Flex flexDirection="column" gap="4" mt="6">
              
              <Button _focus={{ boxShadow: "none" }} _hover={{ bgColor: "#e6b526" }}> <a href="./account">Escola de Formação</a> </Button>
              <Button _focus={{ boxShadow: "none" }} _hover={{ bgColor: "#e6b526" }}>Edições Ignis</Button>
            </Flex>

          </DrawerBody>
          
        </DrawerContent>
      </Drawer>
    </>
  )
}