import { Flex, Heading, Text, Image, Wrap, WrapItem, Box } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

import styles from './post.module.scss'
import Comments from "../../components/Comments";

import { createClient } from "../../services/prismic";
import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import ReactHtmlParser from 'react-html-parser';

interface PostsProps {
  post: {
    slug: string;
    banner: {
      url: string;
    };
    title: string;
    content: string;
    author: string;
    releaseDate: string;
  }
}

export default function Post({post}: PostsProps) {
  return(
    <Flex direction="column" align="center" justify="center">
      <Header />
      <title>Comunidade Ignis | {post.title} </title>

      <Flex direction="column" mt="4rem" >
        <Flex mb="3rem" direction="column" >
          <Flex>
            <Wrap >
              <WrapItem >
                <Flex direction="column" align="center" justify="center">
                  <Flex w="100vw" h={{ base:"20rem", lg:"31.75rem"}} justify="center" align="center" mb="45px" bgColor="black">
                    {/* <Flex w="1320px" h="31.75rem" position="absolute" bgGradient="linear(to bottom,rgba(255,255,255,0) 0,rgba(128,128,128,0) 40%,#000 100%)" />
                    <Flex w="1320px" h="31.4rem" position="absolute" bgGradient="linear(to left,rgba(255,255,255,0) 0,rgba(128,128,128,0) 40%,#000 100%)" />
                    <Flex w="1320px" h="31.4rem" position="absolute" bgGradient="linear(to right,rgba(255,255,255,0) 0,rgba(128,128,128,0) 40%,#000 100%)" /> */}
                    
                    <Flex className={styles.container} maxW="1320px" w="100%" h={{ base:"20rem", lg:"31.75rem"}} objectFit="cover" bgImage={post.banner.url} />

                    {/* <Image className={styles.container} w="1320px" h={{ base:"20rem", lg:"31.75rem"}} objectFit="cover" src={post.banner.url} /> */}

                    <Flex position="absolute" direction="column" margin="40px" align={{ base:"center", lg:"none" }} >
                      <Heading
                        color="#fff" fontFamily="Gentium" fontSize={{ base: "1.25rem", lg: "1.625rem" }}>
                        {post.title}
                      </Heading>
                      <Text mt="0.75rem" fontStyle="italic" color="#adadad" fontWeight="600" fontSize={{ base:"0.875rem", lg:"1rem" }}>
                        {post.author} | {post.releaseDate}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex direction="column" w={{ base: "80%", lg: "780px" }}  >
                    <Text fontSize={{ base: "1rem", lg: "1.125rem" }} lineHeight={{ base: "1.75rem", lg: "2rem" }} className={styles.postContent}
                    >
                      {ReactHtmlParser(post.content)}
                    </Text>
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>

        {/* <Comments /> */}
      </Flex>

      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData, params }) => {
  const client = createClient({ previewData })
  const { slug } = params;

  const response = await client.getByUID('post', String(slug), {});

  const post = {
    slug,
    banner: {
      url: response.data.banner.url
    },
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    author: RichText.asText(response.data.author),
    releaseDate: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
       day: '2-digit',
       month: 'short',
       year: 'numeric',
    })
  }

  return {
     props: { post }, // Will be passed to the page component as props
     revalidate: 60 * 60, // 1 hour
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}