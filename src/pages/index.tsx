import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import HomeBlog from "../components/PageHome/HomeBlog";
import HomeBiblos from "../components/PageHome/HomeBiblos";
import Spirituality from "../components/PageHome/Spirituality";
import HomeHero from "../components/PageHome/HomeHero";
import { Footer } from "../components/Footer";

import { GetStaticProps } from "next";
import { createClient } from "../services/prismic";
import { RichText } from "prismic-dom"

export default function Home() {
  return (
    <Flex display="column" align="center" justify="center">
      <title>Comunidade Ignis</title>
      
      <Header />
      <HomeHero />
      <Spirituality />
      <HomeBlog posts={[]} />
      <HomeBiblos />
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
      title: RichText.asText(post.data.title),      
    }
  });

  return {
    props: { posts }, // Will be passed to the page component as props
    revalidate: 60 * 60, // 1 hour
  }
}