import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
const GoBack = () => {
  const router = useRouter();
  return (
    <Button
      as={"a"}
      display={{ base: "block", lg: "none" }}
      position={"absolute"}
      top={"6px"}
      pr={4}
      py={4}
      variant={"link"}
      onClick={() => router.back()}
    >
      {" "}
      Go back
    </Button>
  );
};

export default GoBack;
