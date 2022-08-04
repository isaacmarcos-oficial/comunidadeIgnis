import { Divider, Flex, Link, Text } from "@chakra-ui/react";

interface AdressListProps {
  title: string;
  adress: string;
}

export default function AdressList({title, adress}: AdressListProps) {
  return (
    <Flex display="column" color="#AFB6C2" _hover={{ color: "#fff" }} lineHeight="3rem">
      <Link  href={adress} >
        <Text fontSize="1.2rem" fontWeight="600" mt="2">
          {title}
        </Text>
      </Link>

      <Divider opacity="10%" />

    </Flex>
  )
}