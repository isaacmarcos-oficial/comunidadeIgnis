import { Box, Flex, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import MembersList from "./membersList";

export default function Community() {
  return(
    <Flex direction="column" align="center" justify="center">
      <title>Comunidade Ignis | A Comunidade</title>
      <Header />
      
      <Flex my="2rem" direction="column" mt="8rem" w={{ base:"90%", lg:"1320px"}}>

        <Flex direction="column" align="center" justify="center">
          <Heading>
            Nosso Fundador
          </Heading>

          <Flex direction={{ base:"column", lg:"row" }} mt="3rem" w={{ base:"100%", lg:"80%"}} align="center" justify="center">
            <Image h="15rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb={{ base:"1.25rem", lg:"none" }} />
            <Box ml={{ base:"none", lg: "2rem"}}  >
              <Heading textAlign={{ base:"center", lg: "left"}} >
                Celito Garcia
              </Heading>
              <Text align={{ base:"center", lg:"justify" }} >
                Celito Garcia é leigo católico, pregador, casado com a Micheli Garcia. Pai do Bruno Augusto e do Caio Tomás. Missionário e membro fundador da Comunidade Católica Missionária IGNIS. É também Freire de Armas na Militia Santae Mariae onde atua na Academia Internacional de Estudos Litúrgicos São Gregório Magno. Pertence a Diocese de Votuporanga – SP.
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Flex mt="5rem" py="3rem" borderRadius="10" bgColor="gray.900" color="white" direction="column" align="center" justify="center">
          <Heading fontWeight="bold" mb="1.5rem">
            Nossos Cofundadores
          </Heading>

          <Flex w={{ md:"100%", lg:"50rem"}} align="center" justify="space-around" >
            <Wrap w="100%" align="center" justify="space-around" spacing="3rem" >
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://i0.wp.com/comunidadeignis.com.br/wp-content/uploads/2021/02/Robson-de-Maria.jpg?w=539&ssl=1" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading fontSize="1.5rem">
                      Robson de Maria
                    </Heading>
                    <Text align="center" fontSize="1rem" color="gray.400">
                      Pregador Missionário
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://i0.wp.com/comunidadeignis.com.br/wp-content/uploads/2021/02/Paulo-Junior.jpg?fit=200%2C200&ssl=1" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading fontSize="1.5rem">
                      Paulo Júnior
                    </Heading>
                    <Text align="center" fontSize="1rem" color="gray.400">
                      Pregador Missionário
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://i0.wp.com/comunidadeignis.com.br/wp-content/uploads/2021/02/Denilson-Moretti.jpg?w=958&ssl=1" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading fontSize="1.5rem">
                      Denilson Moretti
                    </Heading>
                    <Text align="center" fontSize="1rem" color="gray.400">
                      Pregador Missionário
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>

        <Flex mt="2rem" borderRadius="10" direction="column" align="center" justify="center">
          <Heading fontWeight="bold" mb="1.5rem">
            Nossos Membros
          </Heading>

          <Flex w={{ md:"100%", lg:"50rem"}} align="center" justify="center" >
            <Wrap align="center" justify="space-around" spacing="3rem" >
              
              <MembersList title="Anderson Dias" subtitle="Membro Consagrado" image="https://comunidadeignis.com.br/wp-content/uploads/elementor/thumbs/Anderson-Dias-p9e75dtgaqn6jezwxqcdhjqj4vvx373ipbxrk8job4.jpg" />

              <MembersList title="Boniex Marangoni" subtitle="Membro Consagrado" image="https://comunidadeignis.com.br/wp-content/uploads/elementor/thumbs/Boniex-Marangoni-p9e75dtgaqn6jezwxqcdhjqj4vvx373ipbxrk8job4.png" />

              <MembersList title="Carolina Helena" subtitle="Membro Consagrado" image="https://comunidadeignis.com.br/wp-content/uploads/elementor/thumbs/Carolina-Helena-p9e6kllx6m6xtt6qaqxccsjma6bqw4l6ign9jzd1w0.jpg" />
                
              <MembersList title="Cláudia Viana" subtitle="Membro Consagrado" image="https://comunidadeignis.com.br/wp-content/uploads/2021/02/Claudia-Viana.jpg.webp" />
              
              <MembersList title="Isaac Marcos" subtitle="Membro Consagrado" image="https://comunidadeignis.com.br/wp-content/uploads/2021/02/Isaac-Marcos.jpg.webp" />
              
              <MembersList title="Micheli Garcia" subtitle="Membro Consagrado" image="https://comunidadeignis.com.br/wp-content/uploads/2021/02/Micheli-Garcia.jpg.webp" />

            </Wrap>
          </Flex>
        </Flex>
      </Flex>
      
      <Footer />
    </Flex>
  )
}