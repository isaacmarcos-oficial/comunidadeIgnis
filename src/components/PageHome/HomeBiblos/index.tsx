import { Box, Image, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";

type Evangelii = {
  slug: string;
  title: string;
  subtitle: string;
  banner: {
    url: string;
  };
}

interface EvangeliisProps {
  evangeliis: Evangelii[];
}

export default function HomeBiblos({ evangeliis }: EvangeliisProps ) {
  return(
    <Flex h={{ base:"500px", lg:"420px" }} w="100%" bgColor="#1D1D1B" mt="5rem" align="center" justify="center" borderTop="5px solid" borderColor="yellow.700">

      <Flex maxW="1320px" px={8}>
        {evangeliis.map(evangelii => (
          <Flex
          display={["column", "column", "flex"]}
          w='100%'
          align="center"
          justify="center"
          key={evangelii.slug}    
          >
            
            <Image
              src={evangelii.banner.url}
              w={["100%", "450px"]}
              h={["200px", "250px"]}
              mt={["none", "none"]}
              objectFit="cover"
              borderRadius="15"
              shadow="dark-lg"
            />
            
            <Box mt={["2", "none"]} ml={["none","none", 8]} lineHeight="2rem" textAlign={["center", "center", "left"]}>
              <Text color="yellow.700" fontSize="md" fontWeight="bold">
                MEDITAÇÕES DOMINICAIS
              </Text>
              <Heading color="white" fontFamily="Gentium">
                {evangelii.title}
              </Heading>
              <Text fontSize={["sm"]} color="#AFB6C2" fontFamily="Gentium" fontStyle="italic">
                {evangelii.subtitle}
              </Text>
              <Button as={Link} href={`/meditation/${evangelii.slug}`} mt="6" bgColor="yellow.700" _hover={{ bgColor: "yellow.700", color: "white", opacity: "85%" }}>
                Leia agora
              </Button>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}