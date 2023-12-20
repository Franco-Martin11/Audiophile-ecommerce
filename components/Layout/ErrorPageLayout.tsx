import React, { useEffect } from "react";
import PageLayout from "./PageLayout";
import { chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface PropsErrorPage {
  category?: string;
  description: string;
}

const ErrorPageLayout = ({ description, category }: PropsErrorPage) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <PageLayout
      title={`Error ${category && category} ${description} unexisted`}
    >
      <chakra.h2 color={"black"}>
        Error {`${category && category} ${description}`} unexisted
      </chakra.h2>
    </PageLayout>
  );
};

export default ErrorPageLayout;
