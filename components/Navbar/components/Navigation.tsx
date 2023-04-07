import { redirect } from "@/constant/redirect";
import { Heading, HStack } from "@chakra-ui/react";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <HStack spacing={2} alignItems="center">
      {redirect.map((element) => (
        <a key={element.id} href={element.path}>
          <Heading>{element.title}</Heading>
        </a>
      ))}
    </HStack>
  );
};

export default Navigation;
