import { Divider, Flex, Link, Text } from "@chakra-ui/react";

interface MembersListProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function MembersList({image, title, subtitle}: MembersListProps) {
  return (
    <Flex display="column" color="#AFB6C2" _hover={{ color: "#fff" }} lineHeight="3rem">
        <Text fontSize="1.2rem" fontWeight="600" mt="2">
          {title}
        </Text>
      <Divider opacity="10%" />

    </Flex>
  )
}