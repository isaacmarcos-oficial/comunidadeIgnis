import { Button, Flex, FormControl, Text, FormLabel, Heading, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Textarea, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FiUser, FiMail, FiArrowRightCircle } from "react-icons/fi";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

export default function Contact() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Header />
      
      <Flex
        direction={{ base:"column", lg:"row" }}
        w={{ base: "90%", lg: "100%" }}
        maxW="1320px"
        mt="5rem"
        align="center"
        justify="center"
        py={{ base:"none", lg:"8rem" }}
        px="2"
        gap={{ lg:"16", base:"4"}}
      >
        
        <Flex display="column">
          <Heading fontSize={{ lg:"3rem", base:"2.5rem"}}>
            Fale conosco
          </Heading>

          <List spacing={3} color="gray.500" ml={{ lg:"4"}} textAlign={{ base:"center", lg:"initial" }}>
            <ListItem>
              <ListIcon as={FiArrowRightCircle} color='gray.500' />
                Convite para Missão
            </ListItem>
            <ListItem>
              <ListIcon as={FiArrowRightCircle} color='gray.500' />
                Testemunho
            </ListItem>
            <ListItem>
              <ListIcon as={FiArrowRightCircle} color='gray.500' />
                Sugestões
            </ListItem>
            <ListItem>
              <ListIcon as={FiArrowRightCircle} color='gray.500' />
                Problemas técnicos
            </ListItem>
            
          </List>

          
        </Flex>

        <Flex
          flexDirection="column"
          w={{ lg:"500px", base:"100%" }}
          bgColor="gray.800"
          borderRadius="10"
          justify="center"
          px="10"
          py="10"
        >
        

        <FormControl >
            <FormLabel fontSize="16px" htmlFor="email" fontWeight="600" color="gray.300">
              Nome
            </FormLabel>

          <InputGroup mt="-1" >
            <InputLeftElement
              children={<Icon as={FiUser}
              color="gray.400"
            />}/>
            <Input
              name="name"
              type="text"
              focusBorderColor="yellow.500"
              placeholder="Digite seu nome"
              color="gray.200"
            />
          </InputGroup>

          <FormLabel mt="4" fontSize="16px" htmlFor="email" fontWeight="600" color="gray.300">
              E-mail
            </FormLabel>

          <InputGroup mt="-1" >
            <InputLeftElement
              children={<Icon as={FiMail}
              color="gray.400"
            />}/>
            <Input
              name="email"
              type="email"
              focusBorderColor="yellow.500"
              placeholder="Digite seu e-mail"
              color="gray.200"
            />
          </InputGroup>  
            
          <FormLabel mt="4" fontWeight="600" color="gray.300">Mensagem</FormLabel>
          <InputGroup size='md' mt="-1" >
              
            <Textarea
              name="messeger"
              focusBorderColor="yellow.500"
              color="gray.200"
              placeholder="Escreva sua mensagem"
              required

            />
            <InputRightElement width='4.5rem' >
              <Button _focus={{ boxShadow: "none" }} type="submit" color="gray.400" variant="link">
              </Button>
            </InputRightElement>

          </InputGroup >
              
              <Button mt="4" _focus={{ boxShadow: "none" }} bgColor="yellow.500" width="100%" _hover ={{ bg: 'yellow.700' }}
              >
                <a href="/" >
                Enviar
                </a>
              </Button>

              
            </FormControl>
          </Flex>

        </Flex>

      <Footer />
    </Flex>
  )
}