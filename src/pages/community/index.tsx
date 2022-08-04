import { Box, Flex, Heading, Text, Image, Grid, GridItem, Wrap, WrapItem } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

export default function Community() {
  return(
    <Flex direction="column" align="center" justify="center">
      <title>Comunidade Ignis | A Comunidade</title>
      <Header />
      
      <Flex my="2rem" direction="column" mt="8rem" w={{ base:"90%", lg:"1320px"}}>
        <Flex direction="column"  bgColor="#000" color="#FFC632" h={{ base:"10rem", lg:"18.75rem"}} w="100%" mb="2rem" align="center" justify="center" borderRadius="10">
          <Heading fontSize={{ base:"32px", lg:"48px" }}>
            A COMUNIDADE
          </Heading>
        </Flex>

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

        <Flex mt="5rem" py="3rem" borderRadius="10" bgColor="#000" color="#fff" direction="column" align="center" justify="center">
          <Heading fontWeight="bold" mb="1.5rem">
            Nossos Cofundadores
          </Heading>

          <Flex w="80%" align="center" justify="center" >
            <Wrap gap="10rem" align="center" justify="center" spacing="3rem" >
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
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

          <Flex w="80%" align="center" justify="center" >
            <Wrap gap="10rem" align="center" justify="center" spacing="3rem" >
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex direction="column" align="center" justify="center">
                  <Image h="10rem" src="https://bit.ly/CELITO_GARCIA" borderRadius="10" mb="2" />
                  <Flex direction="column" align="center" justify="center">
                    <Heading>
                      Celito Garcia
                    </Heading>
                    <Text align="center">
                      Fundador
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
      
      <Footer />
    </Flex>
  )
}