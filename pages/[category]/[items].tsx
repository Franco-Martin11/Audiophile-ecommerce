import { HamburgerMenu } from "@/components/Navbar/components";
import { Heading } from "@chakra-ui/react";
import fetch from "node-fetch";
import React from "react";

export const getServerSideProps = async (context: {
  params:
    | PromiseLike<{ items: any; category: any }>
    | { items: any; category: any };
}) => {
  const { items, category } = await context.params;
  const data = await fetch(
    `https://audiophile-ecommerce-six.vercel.app/api/stock-item?id=${items}&category=${category}`
  );
  const res = await data.json();
  return { props: { res } };
};

const Items = (props: any): JSX.Element => {
  if (props.res.length === 0) return <Heading>Funciona</Heading>;
  return (
    <div>
      Index
      <HamburgerMenu />
      {JSON.stringify(props.res)}{" "}
    </div>
  );
};

export default Items;
