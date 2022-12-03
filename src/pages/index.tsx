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

type Evangelii = {
  slug: string;
  title: string;
  subtitle: string;
  banner: {
    url: string;
  };
}

interface PostsProps {
  posts: Post[];
  evangeliis: Evangelii[]
}

export default function Home({ posts, evangeliis }: PostsProps) {
  return (
    <Flex display="column" align="center" justify="center">
      <title>Comunidade Ignis</title>
      
      <Header />
      <HomeHero />
      <Spirituality />
      <HomeBlog posts={posts} />
      <HomeBiblos evangeliis={evangeliis}/>
      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async ({  }) => {
  
  const client = createClient({  }) 

  const postResponse = await client.getAllByType('post', {
    limit: 4,
    orderings: {
      field: 'document.last_publication_date',
      direction: 'asc'
    },
  })

  const evangeliiResponse = await client.getAllByType('evangelii', {
    limit: 1,
    orderings: {
      field: 'document.last_publication_date',
      direction: 'asc'
    },
  })

  const posts = postResponse?.map((post: any) => {
    return {
      slug: post.uid,
      banner: {
        url: post.data.banner.url,
      },
      title: RichText.asText(post.data.title),
    } 
  });

  const evangeliis = evangeliiResponse?.map((evangelii: any) => {
    return {
      slug: evangelii.uid,
      banner: {
        url: evangelii.data.banner.url,
      },
      title: RichText.asText(evangelii.data.title),      
      subtitle: RichText.asText(evangelii.data.subtitle),      
    }
  });

  return {
     props: { posts, evangeliis }, // Will be passed to the page component as props
     revalidate: 60 * 60, // 1 hour
  }
}