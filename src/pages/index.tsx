import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import HomeBlog from "../components/PageHome/HomeBlog";
import HomeBiblos from "../components/PageHome/HomeBiblos";
import Spirituality from "../components/PageHome/Spirituality";
import HomeHero from "../components/PageHome/HomeHero";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <Flex display="column" align="center" justify="center">
      <title>Comunidade Ignis</title>
      
      <Header />
      <HomeHero />
      <Spirituality />
      <HomeBlog />
      <HomeBiblos />
      <Footer />
    </Flex>
  )
}