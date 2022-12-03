import { Flex, Input, InputGroup, InputLeftElement, InputRightElement, Link, Text } from "@chakra-ui/react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi"
import { FooterList } from "./FooterList";

export function Footer() {
  return(
    <Flex  w="100%" h="250px" mt="3rem" bgColor="blackAlpha.900" align="center" justify="center">
      
      <Flex maxW="1320px" w="100%"  align="center" justify={{ lg:"space-between", base: "center"}} px="3">
        <Flex w="100%" justify={{ lg:"space-around", base:"center"}} display={{ lg:"flex", base:"none" }}  >
          <Flex display="column" color="gray.300" lineHeight="7" >
            <Text fontWeight="600" color="white" fontSize="xl">MINHA CONTA</Text>
              <FooterList title="Entrar" linkrouter="/account" />
              <FooterList title="Meus dados" />
              <FooterList title="Meus cursos" />
              <FooterList title="Meus produtos" />
              <FooterList title="Minha assinatura" />
          </Flex>
          <Flex display="column"  color ="gray.300" lineHeight="7">
              <Text color="white" fontWeight="600" fontSize="xl">SOBRE O SITE</Text>
                <FooterList title="Início" linkrouter="/" />
                <FooterList title="Nossos Baluartes" linkrouter="/baluartes" />
                <FooterList title="Nossa Comunidade" linkrouter="/community" />
                <FooterList title="Downloads" linkrouter="/downloads" />
                <FooterList title="Blog" linkrouter="blog" />
                <FooterList title="Contato" linkrouter="/contact" />
          </Flex>
          <Flex display="column" color ="gray.300" lineHeight="7">
              <Text color="white" fontWeight="600" fontSize="xl">NOSSOS CURSOS</Text>
                <FooterList title="Apologética" />
                <FooterList title="Espiritualidade" />
                <FooterList title="Doutrina" />
                <FooterList title="Sagradas Escrituras" />
                <FooterList title="Atualidades" />
          </Flex>
        </Flex>

        <Flex w="400px" display="column" align="center" justify="center">
          <Text fontSize="2xl" textAlign="center" fontWeight="600" color="gray.300">Assine nossa Newsletter</Text>
          <InputGroup>
            <InputLeftElement children={<HiMail color='gray.300'/>} />
            <Input
              color= "white"
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