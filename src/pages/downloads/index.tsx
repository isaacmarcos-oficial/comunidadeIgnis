import { Flex, Heading, Text, Image, Wrap, WrapItem, Link } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

import { GetStaticProps } from "next";
import { createClient } from "../../services/prismic";
import { RichText,  } from "prismic-dom"

type Download = {
  slug: string;
  title: string;
  banner: {
    url: string;
  };
}

interface DownloadsProps {
  downloads: Download[];
}

export default function Download({ downloads }: DownloadsProps) {
  return(
    <Flex direction="column" align="center" justify="center">
      <title>Comunidade Ignis | Downloads</title>
      <Header />
      
      <Flex my="2rem" direction="column" mt={{ base:"5rem", lg:"8rem"}} w={{ base:"90%", lg:"82.5rem"}}>
        <Flex direction="column"  bgColor="gray.900" color="#FFC632" h={{ base:"10rem", lg:"18.75rem"}} w="100%" mb={{ base:"none", lg:"2rem"}} align="center" justify="center" borderRadius="10">
          <Heading fontSize={{ base:"32px", lg:"48px" }}>
            Downloads
          </Heading>
        </Flex>

        <Flex my={{ base:"2rem", lg:"3rem"}} borderRadius="10" direction="column" align="center" justify="center">
          <Flex align="center" >
            <Wrap align="center"  spacing="4rem" >
              {downloads.map(download => (
                <WrapItem key={download.slug} >
                  <Flex as={Link} href={`/downloads/${download.slug}`} _hover={{ color: "#B78221" }} style={{ textDecoration:"none" }} target="_blank" mb="-3rem" direction="column" align="center" justify="space-between"  >
                    <Image objectFit="cover" w={{ base: "500px", md:"40vw", lg: "255px" }} h={{ base:"200px", lg:"255px"}} src={download.banner.url} borderRadius="10" mb="2" />
                    <Flex>
                      <Heading as={Text} w="100%" fontSize="16px" align="center" >
                        {download.title}
                      </Heading>
                    </Flex>
                  </Flex>
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
      
      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const response = await client.getAllByType('download')

  const downloads = response?.map((download: any) => {
    return {
      slug: download.uid,
      banner: {
        url: download.data.banner.url,
      },
      title: RichText.asText(download.data.title),
    }
  });

  return {
     props: { downloads }, // Will be passed to the page component as props
     revalidate: 60 * 60, // 1 hour
  }
}