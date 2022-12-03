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
    <Flex direction="column" align="center">
      <Flex maxW="1320px" w="100%" align="center" justify="center" >
        <Wrap borderRadius="10" justify={{ lg:"space-between", base:"center"}} w="100%"  >
          {posts.map(post => (
            <WrapItem key={post.slug}  >
              <Flex as={Link} align="center" href={`/blog/${post.slug}`} _hover={{ color: "#B78221" }} style={{ textDecoration:"none" }} mb={{ lg:"-3rem", base:"1rem" }} direction="column" w={{ base: "430px", md:"400px", lg: "20rem" }} borderRadius="10">
                <Image  borderTopRadius="10" objectFit="cover" w="100%" h={{ base:"200px", lg:"200px"}} src={post.banner.url}  mb="2" />
                <Flex h="35px">
                  <Heading as={Text} fontSize="14px"  px="1rem" align="center" >
                    {post.title}
                  </Heading>
                </Flex>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
      
    </Flex>
  )
}