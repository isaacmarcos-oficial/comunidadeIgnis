import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { DrawerMenu } from "../DrawerMenu";
import Search from "./Search";


export default function Header() {

  return(
    <Flex w="100%" h="70px" bgColor="#1D1D1B" justifyContent="center" alignItems="center" position="fixed" top="0" left="0" >
        
      <Flex h="70px" w="10%"align="center" justify="left" >
        <DrawerMenu />
      </Flex>

      <Flex h="70px" w={["70%", "60%", "60%", "60%", "50%"]} justify="center" align="center">
        <Link href="/">
          <Image h="50px" src="/Ser Ignis - Gold.png" />
        </Link>
      </Flex>
        
      <Flex h="70px" w="10%" align="center" justify="right" color='#AFB6C2' _hover={{ color: "#fff" }}>
        <Search />
      </Flex>

    </Flex>
  )
}