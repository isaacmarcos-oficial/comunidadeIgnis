import { Flex, Input, InputGroup, Link, Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'

export default function Search() {

  return(
    <Popover>
      <PopoverTrigger>
        <Link>
          <BsSearch size="25" />
        </Link>
      </PopoverTrigger>
      <PopoverContent mt="3" w="100vw" _focus={{ boxShadow: "none" }} _after={{ border:"none" }} border="none" >
        <PopoverBody  bg="teal.500" border="none" bgColor="#1D1D1B">
          <Flex >
            <InputGroup alignContent="center" justifyContent="center" >
              <Input
                _focus={{ boxShadow: "none" }}
                width={["90vw", "80vw", "70vw", "50vw"]}
                type="text"
                placeholder="Digite sua pesquisa"
                color="white"
                borderColor='#AFB6C2'
                borderRadius="full"
              />
            </InputGroup>

          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}