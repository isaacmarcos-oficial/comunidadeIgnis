import { Heading, Text, Image, Wrap, WrapItem, Divider, Link, Flex } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

import { GetStaticProps } from "next";
import { createClient } from "../../services/prismic";
import { RichText,  } from "prismic-dom"

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
      
      <Flex my="32px" direction="column" mt="128px" w={{ base:"90%", lg:"82.5rem"}}>
        <Flex direction="column"  bgColor="#000" color="#FFC632" h={{ base:"10rem", lg:"18.75rem"}} w="100%" mb={{ base:"none", lg:"2rem"}} align="center" justify="center" borderRadius="10">
          <Heading fontSize={{ base:"32px", lg:"48px" }}>
            Blog
          </Heading>
        </Flex>

        <Flex my="3rem" direction={{ base:"column", lg:"row" }} >
          <Flex w={{ base:"100%", lg: "75%"}}  borderRadius="10" direction="column" align="center" justify="center">
            <Flex align="center" justify="center">
              <Wrap align="center" justify="center" >                
              <Divider orientation='horizontal' display={{ base:"none", lg:"flex" }} />
                {posts.map(post => (
                <WrapItem key={post.slug} py={{ base: "none", lg: "1rem" }} px={{ base: "none", lg: "0rem" }} gap="8" borderRadius="10" _hover={{ color: "#B78221"}} >
                  
                  <Flex as={Link} href={`/blog/${post.slug}`} direction={{ base: "column", lg: "row" }} w="100%" align="center">
                    <Flex w={{ base:"100%", lg:"35%"}} align="center" >
                      <Image w="100%" h={{ base:"15rem", lg: "12rem"}} objectFit="cover" src={post.banner.url} borderRadius="10" />
                    </Flex>
                    <Flex w={{ base:"100%", lg:"80%"}} borderRadius={{ base:"0.75rem", lg:"none"}} mt={{ base:"-10", lg:"0"}} ml={{ base:"none", lg:"30px"}} direction="column" bgColor={{ base:"#fff", lg:"gray.50"}} p={{ base:"5", lg:"0"}} >
                      <Text color="#B78221" fontWeight="600" mb="0.25rem" fontSize="0.875rem" >
                        {post.author} | {post.updatedAt}
                      </Text>
                      <Heading as={Text} fontSize={{ base:"1.375rem", lg:"1.5rem"}} mb={{ base:"0.25rem", lg:"0.5rem"}} >
                        {post.title}
                      </Heading>
                      <Text fontSize={{ base: "0.875rem", lg: "1rem" }} >
                        {post.excerpt}
                        </Text>
                    </Flex>                      
                  </Flex>
                </WrapItem>
                
                ))}
              </Wrap>
            </Flex>
          </Flex>

          <Flex direction="column" w={{ base:"100%", lg:"25%"}} px={{ base:"none", lg:"8"}} align="center" mt={{ base:"10", lg:"none"}} >
            <Heading color="#B78221" fontSize="1rem" mb="0.5rem" >
              APROFUNDE
            </Heading>
            <Image w="100%" h="200px" src="https://bit.ly/EFC_Ignis" objectFit="cover" />
          </Flex>
        </Flex>
        
      </Flex>
      
      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const response = await client.getAllByType('post')

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