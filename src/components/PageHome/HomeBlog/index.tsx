import { Flex, Grid, Image, GridItem, Heading, Text } from "@chakra-ui/react";

export default function HomeBlog() {
  return (
    <Flex
      px={["16px", "32px"]}
      align="center"
      justify="center"
    >
      <Flex
      maxW="82.5rem" boxSize="100%" >
        <Grid
          w="100%"
          h={{ base:'28.125rem', md:'50rem', lg:'12.5rem'}}
          templateRows={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(2, 1fr)']}
          templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
          gap={4}
        >
          <GridItem rowSpan={[1, 1, 1, 1, 2]} colSpan={[1, 1, 1, 1, 2]} bg='black' borderRadius={10}>
            <Flex w="100%" h={["85%", "85%", "88%", "90%", "80%"]} borderRadius={10} bgColor="orange">
              <Image w="100%" src="https://bit.ly/AtoConsagracao"  borderRadius={10} objectFit='cover'
              />
            </Flex>
            <Heading fontSize={["xs", "sm"]} px={4} textAlign={["center", 'center', 'center', 'center', 'left']} color="#AFB6C2">
              Texto do “Ato de Consagração ao Imaculado Coração de Maria” 
            </Heading>

          </GridItem>
          <GridItem colSpan={1} bg='black' borderRadius={10}>
            <Image
              w="100%" h={["85%", "85%", "88%", "90%", "80%"]}
              borderRadius={10}
              src="/Blog/Banner2.jpg"
              objectFit='cover'
            >
            </Image>
            <Heading fontSize={["xs", "sm"]} px={4} textAlign={["center", 'center', 'center', 'center', 'left']} color="#AFB6C2">
              Texto do “Ato de Consagração ao Imaculado Coração de Maria” 
            </Heading>
          </GridItem>
          
          <GridItem colSpan={1} bg='black' borderRadius={10}>
            <Image
              w="100%" h={["85%", "85%", "88%",  "90%", "80%"]}
              borderRadius={10}
              src="/Blog/Banner3.jpg"
              objectFit='cover'
            >
            </Image>
            <Heading fontSize={["xs", "sm"]} px={4} textAlign={["center", 'center', 'center', 'center', 'left']} color="#AFB6C2">
              Texto do “Ato de Consagração ao Imaculado Coração de Maria” 
            </Heading>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  )
}