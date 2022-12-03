import { Text, Link, Flex } from '@chakra-ui/react'

interface FooterListProps {
  title: string;
  linkrouter?: string;
}

export function FooterList({ title, linkrouter }: FooterListProps) {
  return (
    <Flex>
      <Text as={Link} href={linkrouter} _hover={{ color: "white" }} style={{ textDecoration:"none" }}>
        {title}
      </Text>
    </Flex>
  )
}