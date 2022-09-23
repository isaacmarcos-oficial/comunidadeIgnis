import { Flex, Heading, Text, Image, Button, Link } from "@chakra-ui/react";

import styles from './book.module.scss'

import { createClient } from "../../services/prismic";
import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import ReactHtmlParser from 'react-html-parser';

interface DownloadsProps {
  download: {
    slug: string;
    file: {
      url: string;
    };
    banner: {
      url: string;
    };
    title: string;
    content: string;
  }
}

export default function Book({download}: DownloadsProps) {
  return(
    <Flex direction="column" align="center" justify="center">
      <Flex direction="column" w="100%" h={{ base:"none", lg:"80vh"}} align="center" justify="center" bgColor="#1c1c1c">
        <Flex direction={{ base:"column", lg:"row" }} mt={{ base:"5rem", lg:"15rem"}} align="center" justify="center">
          <Flex align="center" justify="center">
            <Image src={download.banner.url} borderRadius="10" h={{ base:"18rem", lg:"40rem"}} objectFit="cover" boxShadow='2xl' />
          </Flex>

          <Flex w={{ base:"90%", lg:"35%"}} ml={{ base:"none", lg:"5rem"}} >
            <Flex className={styles.postContent} direction="column" my="2rem" align="center" justify="center" >
              <Heading fontFamily="Gentium" color="#c39439" align="center" as={Text} fontSize={{ base: "1.875rem", lg: "2.625rem" }} >
                {download.title}
                {/* Via Sacra  */}
              </Heading>
              
              <Text fontStyle="italic" color="#adadad" fontWeight="600" fontSize={{ base: "0.875rem", lg: "1rem" }}>
              escrita por Dom Antônio de Castro Mayer
              </Text>

              <Text mt="1.25rem" fontSize={{ base: "1rem", lg: "1.15rem" }} lineHeight={{ base: "1.625rem", lg: "2rem" }} color="#E8E7E8" >
                {/* {download.content} */}
                {ReactHtmlParser(download.content)}

                {/* A devoção da Via-Sacra consiste na oração que acompanhar o Nosso Senhor Jesus Cristo em sua paixão, desde o Tribunal de Pilatos até o Monte Calvário.
                  <br/><br/>
                Para uma devoção piedosa desta tradicional oração, a  Comunidade Católica Missionária Ignis apresenta a Via Sacra escrita por Dom Antônio de Castro Mayer.
                  <br/><br/>
                O download pode ser feito abaixo gratuitamente. Aproveite! */}
                
              </Text>

              <Link href={download.file.url} download target="_blank" >
                <Button  mt="2rem" bgColor="#FFC632" _focus={{ boxShadow: "none" }} _hover={{ bgColor: "#bd8e00" }}>
                    Baixar E-Book
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData, params }) => {
  const client = createClient({ previewData })
  const { slug } = params;

  const response = await client.getByUID('download', String(slug), {});

  const download = {
    slug,
    banner: {
      url: response.data.banner.url
    },
    file:{
      url: response.data.file.url,
    },
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
  }

  return {
     props: { download }, // Will be passed to the page component as props
     revalidate: 60 * 60, // 1 hour
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}