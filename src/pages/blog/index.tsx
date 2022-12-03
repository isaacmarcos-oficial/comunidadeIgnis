import { Heading, Text, Image, Wrap, WrapItem, Link, Flex, Box, Button, Icon } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

import { GoPerson, GoCalendar } from "react-icons/go"
import { GetStaticProps } from "next";
import { createClient } from "../../services/prismic";
import { RichText,  } from "prismic-dom"
import { Sidebar } from "../../components/Sidebar";

type Post = {
  slug: string;
  title: string;
  banner: {
    url: string;
  };
  author: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Blog({ posts }: PostsProps) {
  return (
    <Flex direction="column" align="center" justify="center">
      <title>Comunidade Ignis | A Comunidade</title>
      
      <Header />
      
      <Flex w={{ base:"90%", lg:"90%"}} maxW="1320px" direction={"column"} mt="8rem" >

        <Flex  w={{ lg:"100%"}} justify="space-between" gap="32px" >
          <Flex maxW="59.375rem" w="100%" direction={{ lg:"row", base:"column"}} >
            <Flex >
              <Wrap spacing="24px" >
                {posts.map(post => (
                <WrapItem key={post.slug} _hover={{ color: "yellow.500" }} shadow="md"  >
                  
                  <Flex direction={{ base: "column", lg: "row" }} bgColor="white" style={{ textDecoration:"none" }} >
                      
                    <Box w={{ lg:"31.25rem", base:"100%" }} h={{ lg:"15.625rem", base:"12.5rem" }} overflow="hidden" as={Link} href={`/blog/${post.slug}`} >
                      <Image w="100%" h="100%" objectFit="cover" src={post.banner.url} />
                    </Box>
                      
                    <Flex w={{ lg:"-moz-mix-content", base:"100%" }} direction="column" bgColor="white" p="5" align={{ base:"center", lg:"initial" }}  >
                      <Text mt={4} color="yellow.700" fontWeight="600" fontSize="13px" display={{ lg:"flex", base:"none" }} >
                        <Icon as={GoPerson} mr="1" />  {post.author} | <Icon as={GoCalendar} ml="1" mr="1" /> {post.updatedAt}
                      </Text>
                      <Heading as={Link} href={`/blog/${post.slug}`} style={{ textDecoration:"none" }} align={{ base:"center", lg:"left" }} fontSize={{ base:"18px", lg:"22px"}} letterSpacing="-0.025rem"  color="gray.700" _hover={{ color: "yellow.700" }} >
                        {post.title}
                      </Heading>

                      <Box
                        w="5rem" 
                        border="0.0625rem solid"
                        borderColor="yellow.700"
                        mb="16px"
                        mt="4px"
                      />                          

                      <Text
                          fontSize={{ base: "14px", lg: "14px" }}
                          color="gray.500"
                          textAlign="justify"
                          display="table-cell"
                          textOverflow="ellipsis"
                          overflow="hidden"
                          maxHeight="8ch"
                          
                        >
                        {post.excerpt}...
                        </Text>
                        
                        <Button as={Link} href={`/blog/${post.slug}`} position="inherit" w={{ lg:"9.375rem", base:"100%"}} h="1.6875rem" bgColor="yellow.700" color="white" mt="8px" borderRadius={{ lg:"100", base:"5" }} _hover={{ bgColor: "yellow.800" }} style={{ textDecoration:"none" }}  >
                          <Text fontSize={{ lg:"80%", base:"60%" }} >
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

export const getStaticProps: GetStaticProps = async ({  }) => {
  
  const client = createClient({  }) 

  const response = await client.getAllByType('post', {
    pageSize: 2,
    orderings: {
      field: 'document.last_publication_date',
      direction: 'asc'
    },
  }) 

  const posts = response?.map((post: any) => {
    return {
      slug: post.uid,
      banner: {
        url: post.data.banner.url,
      },
      author: RichText.asText(post.data.author),
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type == 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
         day: '2-digit',
         month: 'short',
         year: 'numeric',
      })
      
    } 
  });

  return {
     props: { posts }, // Will be passed to the page component as props
     revalidate: 60 * 60, // 1 hour
  }
}