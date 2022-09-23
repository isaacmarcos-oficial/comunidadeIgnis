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

      <Flex direction="column" mt="4.375rem" >
        <Flex mb="3rem" direction="column" >
          <Flex>
            <Wrap >
              <WrapItem >
                <Flex direction="column" align="center" justify="center">
                  <Flex className={styles.container} direction="column" w="100vw" h={{ base: "20rem", lg: "28.125rem" }} justify="center" align="center" bgColor="#000" zIndex="hide">
                    <Image bgImage={post.banner.url} w="100%" h="100%" bgSize="cover" opacity="0.1"/>
                  </Flex>
                  <Flex direction="column" w={{ base: "90%", lg: "780px" }}  >
                      <Flex direction="column" align="center" justify="center">
                        <Heading
                          color="#000" mt="2.25rem" fontFamily="Gentium" fontSize={{ base: "24px", lg: "36px" }} textAlign="center">
                          {post.title}
                        </Heading>
                        <Text mt="8px" fontStyle="italic" color="#adadad" fontWeight="600" fontSize="14px" mb="6" >
                        {post.author} | {post.releaseDate}
                        </Text >
                      </Flex>
                    <Text className={styles.postContent} fontSize={{ base: "1rem", lg: "1.125rem" }} lineHeight={{ base: "1.75rem", lg: "2rem" }}  letterSpacing="0.0063rem"
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