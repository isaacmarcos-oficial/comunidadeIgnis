import { Heading, Text, Image, Wrap, WrapItem, Link, Flex } from "@chakra-ui/react";

type Post = {
  slug: string;
  title: string;
  banner: {
    url: string;
  };
}

interface PostsProps {
  posts: Post[];
}

export default function Blog({ posts }: PostsProps) {
  return(
    <Flex direction="column" align="center" justify="center">      
      <Flex my="2rem" direction="column" mt={{ base:"5rem", lg:"8rem"}} w={{ base:"90%", lg:"82.5rem"}}>

        <Flex my={{ base:"2rem", lg:"3rem"}} borderRadius="10" direction="column" align="center" justify="center">
          <Flex align="center" >
            <Wrap align="center"  spacing="4rem" >
              {posts.map(post => (
                <WrapItem key={post.slug} >
                  <Flex as={Link} href={`/blog/${post.slug}`} _hover={{ color: "#B78221" }} target="_blank" mb="-3rem" direction="column" align="center" justify="start">
                    <Image objectFit="cover" w={{ base: "500px", lg: "255px" }} h={{ base:"200px", lg:"255px"}} src={post.banner.url} borderRadius="10" mb="2" />
                    <Flex>
                      <Heading as={Text} w="200px" fontSize="16px" align="center" >
                        {post.title}
                        Título
                      </Heading>
                    </Flex>
                  </Flex>
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
      
    </Flex>
  )
}