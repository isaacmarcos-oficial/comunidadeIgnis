import { Flex, Heading, Image, Text, WrapItem } from "@chakra-ui/react";

interface MembersListProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function MembersList({image, title, subtitle}: MembersListProps) {
  return (
    <WrapItem>
      <Flex direction="column" align="center" justify="center">
          
        <Image h="10rem" objectFit="cover" src={image} borderRadius="10" mb="2" alt="" border="0.5rem solid" borderColor="gray.50" shadow="md" />
        <Flex direction="column" align="center" justify="center">
          <Heading fontSize={{ lg:"1.5rem", md:"1.25rem"}}>
            {title}
          </Heading>
          <Text align="center" fontSize="1rem" color="gray.500" >
            {subtitle}
          </Text>
        </Flex>
      </Flex>
    </WrapItem>
  )
}