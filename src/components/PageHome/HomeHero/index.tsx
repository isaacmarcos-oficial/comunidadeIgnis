import { Flex, Image } from "@chakra-ui/react";
import 'swiper/css';

export default function HomeHero() {
  return (
  <Flex
    px={["1rem", "2rem"]}
    align="center"
    justify="center"
    mt={["5rem", "5rem", "6rem"]}
  >
    <Image
      maxW="1320px"
      boxSize="100%"
      src="/Hero.png"
      borderRadius="10px"
    />      
  </Flex>
  )
}