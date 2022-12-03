import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Sidebar() {
  return (
    <Flex display={{ base:"none", lg:"flex" }} maxW="332px" w="100%" h="100vh" bgColor="white" justify="center" shadow="md" >
      <Box w="100%" h="200px" bgColor="white" textAlign="center" >
        <Heading color="gray.800" m="3" fontSize="1.437rem">
          QUEM SOMOS
        </Heading>
      
        <Flex w="100%" h="200px" bgColor="white" borderTop="2px solid" borderBottom="2px solid" borderColor="yellow.700" >
          <Image w="100%" objectFit="cover" src="/Comunidade Ignis.jpg"/>
        </Flex>
        <Heading color="gray.800" lineHeight="1.25rem" mx="1.5rem" mt="1rem" fontSize="1.437rem" mb="0.5rem">
          Comunidade Ignis
        </Heading>
        <Text color="gray.850" fontSize="0.85rem" lineHeight="1.25rem" mx="1.5rem">
          A Comunidade Católica Missionária IGNIS – Associação Maria Auxílio dos Cristãos – foi fundada no dia 7 de outubro de 2009, dia de Nossa Senhora do Rosário que deu a vitória aos católicos na Batalha de Lepanto.
        </Text>
      </Box>
    </Flex>
  )
}