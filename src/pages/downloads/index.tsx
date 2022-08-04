import { Flex, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

export default function Baluartes() {
  return(
    <Flex direction="column" align="center" justify="center">
      <title>Comunidade Ignis | A Comunidade</title>
      <Header />
      
      <Flex my="2rem" direction="column" mt="8rem" w={{ base:"90%", lg:"82.5rem"}}>
        <Flex direction="column"  bgColor="#000" color="#FFC632" h={{ base:"10rem", lg:"18.75rem"}} w="100%" mb={{ base:"none", lg:"2rem"}} align="center" justify="center" borderRadius="10">
          <Heading fontSize={{ base:"32px", lg:"48px" }}>
            Downloads
          </Heading>
        </Flex>

        <Flex my={{ base:"none", lg:"3rem"}} borderRadius="10" direction="column" align="center" justify="center">
          <Flex align="center" justify="center">
            <Wrap align="center" justify="center" spacing={{ base:"0.75rem", md:"2rem", lg:"4rem"}} >
              <WrapItem >
                <Flex mb="-3rem" boxSize={{ base:"22rem", lg:"15rem"}} direction="column" align="center" justify="center">
                  <Image objectFit="cover" src="https://bit.ly/auxiliumchristianorum" borderRadius="10" mb="2" />
                  <Flex>
                    <Heading as={Text} fontSize="16px" align="center" >
                      Nossa Senhora Auxiliadora dos Cristãos
                    </Heading>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem >
                <Flex mb="-48px" boxSize={{ base:"352px", lg:"240px"}} direction="column" align="center" justify="center">
                  <Image objectFit="cover" src="https://bit.ly/auxiliumchristianorum" borderRadius="10" mb="2" />
                  <Flex>
                    <Heading as={Text} fontSize="16px" align="center" >
                      Nossa Senhora Auxiliadora dos Cristãos
                    </Heading>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem >
                <Flex mb="-48px" boxSize={{ base:"352px", lg:"240px"}} direction="column" align="center" justify="center">
                  <Image objectFit="cover" src="https://bit.ly/auxiliumchristianorum" borderRadius="10" mb="2" />
                  <Flex>
                    <Heading as={Text} fontSize="16px" align="center" >
                      Nossa Senhora Auxiliadora dos Cristãos
                    </Heading>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem >
                <Flex mb="-48px" boxSize={{ base:"352px", lg:"240px"}} direction="column" align="center" justify="center">
                  <Image objectFit="cover" src="https://bit.ly/auxiliumchristianorum" borderRadius="10" mb="2" />
                  <Flex>
                    <Heading as={Text} fontSize="16px" align="center" >
                      Nossa Senhora Auxiliadora dos Cristãos
                    </Heading>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem >
                <Flex mb="-48px" boxSize={{ base:"352px", lg:"240px"}} direction="column" align="center" justify="center">
                  <Image objectFit="cover" src="https://bit.ly/auxiliumchristianorum" borderRadius="10" mb="2" />
                  <Flex>
                    <Heading as={Text} fontSize="16px" align="center" >
                      Nossa Senhora Auxiliadora dos Cristãos
                    </Heading>
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem >
                <Flex mb="-48px" boxSize={{ base:"352px", lg:"240px"}} direction="column" align="center" justify="center">
                  <Image objectFit="cover" src="https://bit.ly/auxiliumchristianorum" borderRadius="10" mb="2" />
                  <Flex>
                    <Heading as={Text} fontSize="16px" align="center" >
                      Nossa Senhora Auxiliadora dos Cristãos
                    </Heading>
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