import { Flex, Show } from "@chakra-ui/react";
import React from "react";
import { UserForm } from "../../components/form/userForm";

export default function SignIn() {
  return(
    <Flex>

      <Show above="lg">
        <Flex
        w="50%"
        h="100vh"
        bgImage= "/Lepanto.jpg"
        bgColor="yellow.600"
        align="center"
        justify="center"
        >
        
        </Flex>
      </Show>

      <Flex
        w={["100%", "100%", "100", "50%"]}
        h="100vh"
        bgColor="gray.900"
        align="center"
        justify="center"
        px="8"
      >
        
        <UserForm />

      </Flex>
    </Flex>
  )
}