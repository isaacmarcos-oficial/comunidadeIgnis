import { Flex, Heading, Text, Image, Button } from "@chakra-ui/react";

export default function Book() {
  return(
    <Flex direction="column" align="center" justify="center">
      <Flex direction="column" w="100%" h={{ base:"none", lg:"80vh"}} align="center" justify="center" bgColor="#1c1c1c">
        <Flex direction={{ base:"column", lg:"row" }} mt={{ base:"5rem", lg:"15rem"}} align="center" justify="center">
          <Flex align="center" justify="center">
            <Image src="/0005.png" h={{ base:"18rem", lg:"40rem"}} objectFit="cover" boxShadow='2xl' />
          </Flex>

          <Flex w={{ base:"90%", lg:"35%"}} ml={{ base:"none", lg:"5rem"}} >
            <Flex direction="column" my="2rem" align="center" justify="center" >
              <Heading fontFamily="Gentium" color="#c39439" align="center" as={Text} fontSize={{ base: "1.875rem", lg: "2.625rem" }} >
                Via Sacra escrita por Dom Antônio de Castro Mayer
              </Heading>
              
              <Text mt="0.75rem" fontStyle="italic" color="#adadad" fontWeight="600" fontSize={{ base: "0.875rem", lg: "1rem" }}>
                Dom Antônio de Castro Mayer
              </Text>

              <Text textAlign={{ base:"center", lg:"none" }} mt="1.25rem" fontSize={{ base: "1rem", lg: "1.15rem" }} lineHeight={{ base: "1.625rem", lg: "2rem" }} color="#E8E7E8" >
                A devoção da Via-Sacra consiste na oração que acompanhar o Nosso Senhor Jesus Cristo em sua paixão, desde o Tribunal de Pilatos até o Monte Calvário.
                  <br/><br/>
                Para uma devoção piedosa desta tradicional oração, a  Comunidade Católica Missionária Ignis apresenta a Via Sacra escrita por Dom Antônio de Castro Mayer.
                  <br/><br/>
                O download pode ser feito abaixo gratuitamente. Aproveite!
                
              </Text>

              <Button mt="2rem" bgColor="#FFC632" _focus={{ boxShadow: "none" }} _hover={{ bgColor: "#bd8e00" }}>
                Baixar E-Book
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}