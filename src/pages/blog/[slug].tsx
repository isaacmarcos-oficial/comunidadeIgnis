import { Flex, Heading, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

import styles from './post.module.scss'

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

      <Flex direction="column" >
        <Flex mb="48px" direction="column" >
          <Flex>
            <Wrap >
              <WrapItem >
                <Flex direction="column" align="center" justify="center">
                  <Flex  direction="column" w="100vw" h={{ base: "320px", lg: "450px" }} justify="center" align="center" bgColor="#000" zIndex="hide">
                    <Image className={styles.container} bgPosition="0% 15%" bgImage={post.banner.url} maxW="1350px" w="100%" h="100%" bgSize="cover"
                      // opacity="0.1"
                    />
                  </Flex>
                  <Flex direction="column" w={{ base: "90%", lg: "48.75rem" }}  >
                      <Flex direction="column" align="center" justify="center">
                        <Heading
                          color="gray.850" mt="36px" fontFamily="Gentium" fontSize={{ base: "1.5rem", lg: "2.25rem" }} textAlign="center">
                          {post.title}
                        </Heading>
                        <Text mt=".5rem" fontStyle="italic" color="gray.300" fontWeight="600" fontSize=".875rem" mb="6" >
                        {post.author} | {post.releaseDate}
                        </Text >
                      </Flex>
                    <Text className={styles.postContent} color="gray.800" fontSize={{ base: "16px", lg: "18px" }} lineHeight={{ base: "28px", lg: "32px" }}  letterSpacing=".1008px"
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