import { Heading, Text, Image, Wrap, WrapItem, Link, Flex, Box, Button } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

import { GetStaticProps } from "next";
import { createClient } from "../../services/prismic";
import { RichText,  } from "prismic-dom"
import { Sidebar } from "../../components/Sidebar";

type Evangelii = {
  slug: string;
  title: string;
  subtitle: string;
  banner: {
    url: string;
  };
  excerpt: string;
  updatedAt: string;
}

interface EvangeliisProps {
  evangeliis: Evangelii[];
}

export default function Meditation({ evangeliis }: EvangeliisProps) {
  return (
    <Flex direction="column" align="center" justify="center">
      <title>Comunidade Ignis | A Comunidade</title>
      
      <Header />
      
      <Flex w={{ base:"90%", lg:"90%"}} maxW="82.5rem" direction={"column"} mt="128px" >

        <Flex  w={{ lg:"100%"}} justify="space-between" gap="2rem" >
          <Flex maxW="950px" w="100%" direction={{ lg:"row", base:"column"}} >
            <Flex >
              <Wrap spacing="1.5rem" >
                {evangeliis.map(evangelii => (
                <WrapItem key={evangelii.slug} _hover={{ color: "yellow.500" }} shadow="md"  >
                  
                  <Flex direction={{ base: "column", lg: "row" }} bgColor="white" style={{ textDecoration:"none" }} >
                      
                    <Box w={{ lg:"500px", base:"100%" }} h={{ lg:"250px", base:"200px" }} overflow="hidden" as={Link} href={`/blog/${evangelii.slug}`} >
                      <Image w="100%" h="100%" objectFit="cover" src={evangelii.banner.url} />
                    </Box>
                      
                    <Flex w={{ lg:"-moz-mix-content", base:"100%" }} direction="column" bgColor="white" p="5" align={{ base:"center", lg:"initial" }}  >

                      <Heading as={Link} href={`/blog/${evangelii.slug}`} style={{ textDecoration:"none" }} align={{ base:"center", lg:"left" }} fontSize={{ base:"1.125rem", lg:"1.375rem"}} letterSpacing="-0.4px"  color="gray.700" _hover={{ color: "yellow.700" }} >
                        {evangelii.title}
                      </Heading>

                      <Box
                        w="80px" 
                        border="1px"
                        color="yellow.700"
                        mb="1rem"
                        mt="0.25rem"
                      />                          

                      <Text
                          fontSize={{ base: "0.875rem", lg: "0.875rem" }} color="gray.500"
                          textAlign="justify"
                          display="table-cell"
                          textOverflow="ellipsis"
                          overflow="hidden"
                          maxHeight="5rem"
                        >
                        {evangelii.excerpt}...
                        </Text>
                        
                        <Button as={Link} href={`/meditation/${evangelii.slug}`} position="inherit" w={{ lg:"150px", base:"100%"}} h="27px" bgColor="yellow.700" color="white" my="0.5rem" borderRadius={{ lg:"100", base:"5" }} _hover={{ bgColor: "yellow.800", }} style={{ textDecoration:"none" }}   >
                          <Text fontSize={{ lg:"80%", base:"60%" }}  >
                            Continue lendo →
                          </Text>
                        </Button>
                        
                    </Flex>                      
                  </Flex>
                </WrapItem>
                
                ))}
              </Wrap>
            </Flex>
          </Flex>

          <Sidebar />
        </Flex>
      </Flex>
      
      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const response = await client.getAllByType('evangelii')

  const evangeliis = response?.map((evangelii: any) => {
    return {
      slug: evangelii.uid,
      banner: {
        url: evangelii.data.banner.url,
      },
      title: RichText.asText(evangelii.data.title),
      excerpt: evangelii.data.content.find(content => content.type == 'paragraph')?.text ?? '',
    }
  });

  return {
     props: { evangeliis }, // Will be passed to the page component as props
     revalidate: 60 * 60, // 1 hour
  }
}