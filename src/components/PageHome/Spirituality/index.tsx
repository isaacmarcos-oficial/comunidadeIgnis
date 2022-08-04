import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { GiGothicCross } from 'react-icons/gi';

export default function Spirituality() {
  return (
    <Flex align="center" justify="center" h={["150px", "200px"]}>
      <SimpleGrid columns={4} spacing={[5, 5, 20, 28]} align="center" >
        <Box>
          <Icon as={GiGothicCross} fontSize={[35, 40, 50]} color="#BF8845"/>
          <Text lineHeight="30px" fontSize={[18, 20, 23]} color="#BF8845" fontWeight="600" >Amor</Text>
        </Box>

        <Box>
          <Icon as={GiGothicCross} fontSize={[35, 40, 50]} color="#BF8845"/>
          <Text lineHeight="30px" fontSize={[18, 20, 23]} color="#BF8845" fontWeight="600" >Adoração</Text>
        </Box>

        <Box>
          <Icon as={GiGothicCross} fontSize={[35, 40, 50]} color="#BF8845"/>
          <Text lineHeight="30px" fontSize={[18, 20, 23]} color="#BF8845" fontWeight="600" >Sacrifício</Text>
        </Box>
        
        <Box>
          <Icon as={GiGothicCross} fontSize={[35, 40, 50]} color="#BF8845"/>
          <Text lineHeight="30px" fontSize={[18, 20, 23]} color="#BF8845" fontWeight="600" >Missão</Text>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}