import { redirect } from "@/constant/redirect";
import { Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <HStack
      spacing={2}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems="center"
      as={"nav"}
    >
      {redirect.map((element) => (
        <Link passHref key={element.id} href={element.path}>
          <Heading>{element.title}</Heading>
        </Link>
      ))}
    </HStack>
  );
};

export default Navigation;
