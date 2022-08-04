import { Box, Image, Flex, Heading, Text, Button } from "@chakra-ui/react";

export default function() {
  return(
    <Flex h={["500px", "550px", "420px"]} w="100%" bgColor="#1D1D1B" mt={["6rem", "3rem", "-22rem", "-22rem", "18rem"]} align="center" justify="center" borderTop="5px solid" borderColor="#BF8845">

      <Flex maxW="1320px" px={8}>
        <Flex
        display={["column", "column", "flex"]}
        w='100%'
        px="auto"
        align="center"
        justify="center"
        >
          <Image
          src="/Lepanto.jpg"
          w={["100%", "450px"]}
          h={["200px", "250px"]}
          mt={["none", "none"]}
          objectFit="cover"
          borderRadius="15"
          shadow="dark-lg"
          />
          
          <Box mt={["2", "none"]} ml={["none","none", 8]} lineHeight="2rem" textAlign={["center", "center", "left"]}>
            <Text color="#BF8845" fontSize="md" fontWeight="bold">
              MEDITAÇÕES DOMINICAIS
            </Text>
            <Heading color="#fff" fontFamily="Gentium">
              Anunciação do Senhor
            </Heading>
            <Text fontSize={["sm"]} color="#AFB6C2" fontFamily="Gentium" fontStyle="italic">
              "Eis que conceberás e darás à luz um filho."
            </Text>
            <Button mt="6" bgColor="#BF8845" _hover={{ bgColor: "#BF8845", color: "#fff", opacity: "85%" }}>
              Leia agora
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}