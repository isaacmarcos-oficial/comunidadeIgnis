import { Flex, Heading, Text, FormControl, FormLabel, Input, Checkbox, Link, Button, InputRightElement, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FiMail, FiLock, FiLogIn, FiEye, FiEyeOff } from 'react-icons/fi'

import React from "react";

export function UserForm() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Flex
      flexDirection="column"
      w="500px"
      bgColor="gray.800"
      borderRadius="10"
      justify="center"
      px={[ "10", "10" ]}
      py={[ "10", "10" ]}
    >
    <Flex align="center">
      <Icon as={FiLogIn} color="yellow.500" boxSize="24px"/>
    <Heading color="gray.100" fontSize="24px" ml="2" mt="1">  Faça seu login</Heading>
    </Flex>
    <Text color="gray.300" fontWeight="600" lineHeight="24px" mt="1" fontSize="16px">Entre com suas informações</Text>
          
    <FormControl mt="6" >
      <FormLabel  fontSize="16px" htmlFor="email" fontWeight="600" color="gray.300">E-mail</FormLabel>
      
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
      
      <FormLabel mt="4" htmlFor="password" fontWeight="600" color="gray.300">Senha</FormLabel>
      <InputGroup size='md' mt="-1" >
          <InputLeftElement
            children={<Icon as={FiLock}
            color="gray.400" />}
          />
        <Input
          name="password"
          type={show ? 'text' : 'password'}
          focusBorderColor="yellow.500"
          color="gray.200"
          placeholder='Enter password'
          required
          
        />
        <InputRightElement width='4.5rem' onClick={handleClick} >
          <Button _focus={{ boxShadow: "none" }} type="submit" color="gray.400" variant="link">
            {show ? <FiEyeOff size="20px" /> :  <FiEye size="20px"/> }
          </Button>
        </InputRightElement>

      </InputGroup >
          <Flex
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          lineHeight="50px"
          >
          <Checkbox colorScheme="yellow" color="gray.300" iconColor="black" >
            Lembre-me
          </Checkbox>
            <Link fontSize="14px" color="yellow.500" fontWeight="600" _hover={{ color:"yellow.600" }} >Esqueci minha senha</Link>
          </Flex>
          <Button _focus={{ boxShadow: "none" }} bgColor="yellow.500" width="100%" _hover ={{ bg: 'yellow.700' }}
          >
            <a href="/" >
            Entrar
            </a>
          </Button>
          
          <Flex justifyContent="center" mt="6">
            <Link color="yellow.500" _hover={{ color:"yellow.600" }} >Não tem uma conta? <strong>Registre-se</strong></Link>
          </Flex>
        </FormControl>
      </Flex>
  )
}