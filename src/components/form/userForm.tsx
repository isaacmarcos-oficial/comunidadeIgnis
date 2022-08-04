import { Flex, Heading, Text, FormControl, FormLabel, Input, Checkbox, Link, Button, InputRightElement, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiMail, FiLock, FiLogIn, FiEye, FiEyeOff } from 'react-icons/fi'

import React from "react";

export function UserForm() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Flex
      flexDirection="column"
      w="500px"
      bgColor="#24221F"
      borderRadius="10"
      justify="center"
      px={[ "10", "10" ]}
      py={[ "10", "10" ]}
    >
    <Flex align="center">
      <FiLogIn color="#FFC632" size="24px"/>
    <Heading color="#D4CCB6" fontSize="24px" ml="2" mt="1">  Faça seu login</Heading>
    </Flex>
    <Text color="#AFB6C2" fontWeight="600" lineHeight="24px" mt="1" fontSize="16px">Entre com suas informações</Text>
          
    <FormControl mt="6" >
      <FormLabel  fontSize="16px" htmlFor="email" fontWeight="600" color="#AFB6C2">E-mail</FormLabel>
      
      <InputGroup mt="-1" >
        <InputLeftElement
          children={<FiMail
          color="#AFB6C2"
        />}/>
        <Input
          name="email"
          type="email"
          focusBorderColor="#FFC632"
          placeholder="Digite seu e-mail"
          color="#AFB6C2"
        />
      </InputGroup>
      
      <FormLabel mt="4" htmlFor="password" fontWeight="600" color="#AFB6C2">Senha</FormLabel>
      <InputGroup size='md' mt="-1" >
        <InputLeftElement pointerEvents='none'children={<FiLock color="#AFB6C2" />}/>
        <Input
          name="password"
          type={show ? 'text' : 'password'}
          focusBorderColor="#FFC632"
          color="#AFB6C2"
          pr='4.5rem'
          placeholder='Enter password'
          required
          
        />
        <InputRightElement width='4.5rem' onClick={handleClick} >
          <Button _focus={{ boxShadow: "none" }} type="submit" variant="link">
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
            <Checkbox colorScheme="yellow" color="#AFB6C2" iconColor="black">Lembre-me</Checkbox>
            <Link fontSize="14px" color="#FFC632" fontWeight="600" >Esqueci minha senha</Link>
          </Flex>
          <Button _focus={{ boxShadow: "none" }} bgColor="#FFC632" width="100%" _hover ={{ bg: '#c59315' }}
          >
            <a href="/" >
            Entrar
            </a>
          </Button>
          
          <Flex justifyContent="center" mt="6">
            <Link color="#FFC632">Não tem uma conta? <strong>Registre-se</strong></Link>
          </Flex>
        </FormControl>
      </Flex>
  )
}