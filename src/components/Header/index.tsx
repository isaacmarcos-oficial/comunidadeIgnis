import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { DrawerMenu } from "../DrawerMenu";
import Search from "./Search";


export default function Header() {

  return(
    <Flex w="100%" h="55px" bgColor="#1D1D1B" justify="center" alignItems="center" position="fixed" top="0"  >
      <Flex w="100%" maxW="1320px" align="center" justify="space-between" p="16px" >
        <Flex h="17px" align="center" justify="left" >
          <DrawerMenu />
        </Flex>

        <Flex h="70px" w={["70%", "60%", "60%", "60%", "50%"]} justify="center" align="center">
          <Link href="/">
            <Image h="40px" src="/Ser Ignis - Gold.png" />
          </Link>
        </Flex>
          
        <Flex h="17px" align="center" justify="right" color='#AFB6C2' _hover={{ color: "#fff" }}>
          <Search />
        </Flex>
      </Flex>  

    </Flex>
  )
}