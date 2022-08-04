import { Box, Button, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Link, Text } from "@chakra-ui/react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi"

export function Footer() {
  return(
    <Flex w="100%" h="250px" bgColor="#000" align="center" justify="center">
      <Flex w="1320px" align="center" justify="center">
        <Flex display={{ base:"none", lg:"flex" }} align="center" justify="center">
          <HStack spacing="20" mr="10rem">
            <Flex display="column"  color ="#AFB6C2" lineHeight="7">
                <Text fontWeight="600" color="#fff" fontSize="xl">MINHA CONTA</Text>
                <Text _hover={{ color: "#fff" }} >
                  <Link>
                    Entrar
                  </Link>
                </Text>
                <Text _hover={{ color: "#fff" }} >Meus dados</Text>
                <Text _hover={{ color: "#fff" }} >Meus cursos</Text>
                <Text _hover={{ color: "#fff" }} >Meus produtos</Text>
                <Text _hover={{ color: "#fff" }} >Minha assinatura</Text>
            </Flex>
            <Flex display="column"  color ="#AFB6C2" lineHeight="7">
                <Text color="#fff" fontWeight="600" fontSize="xl">SOBRE O SITE</Text>
                <Text _hover={{ color: "#fff" }} >HomePage</Text>
                <Text _hover={{ color: "#fff" }} >Baluates</Text>
                <Text _hover={{ color: "#fff" }} >Downloads</Text>
                <Text _hover={{ color: "#fff" }} >Blog</Text>
                <Text _hover={{ color: "#fff" }} >Contato</Text>
            </Flex>
            <Flex display="column" color ="#AFB6C2" lineHeight="7">
                <Text color="#fff" fontWeight="600" fontSize="xl">NOSSOS CURSOS</Text>
                <Text _hover={{ color: "#fff" }} >Apologética</Text>
                <Text _hover={{ color: "#fff" }} >Espiritualidade</Text>
                <Text _hover={{ color: "#fff" }} >Doutrina</Text>
                <Text _hover={{ color: "#fff" }} >Sagradas Escrituras</Text>
                <Text _hover={{ color: "#fff" }} >Atualidades</Text>
            </Flex>
          </HStack>
        </Flex>
        <Flex display="column" align="center" justify="center">
          <Text fontSize="2xl" textAlign="center" fontWeight="600" color="#AFB6C2">Assine nossa Newsletter</Text>
            <InputGroup>
              <InputLeftElement children={<HiMail color='#AFB6C2'/>} />
              <Input
                color= "#fff"
                type="email"
                placeholder="Digite seu email"
              />
              <InputRightElement as={Link} color="#FFC632" bg="none" fontSize="4rem" >
                <BsArrowRightSquareFill />
              </InputRightElement>
            </InputGroup>
          </Flex>
      </Flex>
    </Flex>
  )
}