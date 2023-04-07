import { HamburgerMenu } from "@/components/Navbar/components";
import { Heading } from "@chakra-ui/react";
import React from "react";

export const getServerSideProps = async (context: {
  params: PromiseLike<{ id: any }> | { id: any };
}) => {
  const { items, category } = await context.params;
  const data = await fetch(
    `http://localhost:3000/api/stock-item?id=${items}&category=${category}`
  );
  const res = await data.json();
  console.log(res);
  return { props: { res } };
};

const Items = ({ res }): JSX.Element => {
  if (res.length === 0) return <Heading>Funciona</Heading>;
  return (
    <div>
      Index
      <HamburgerMenu />
      {JSON.stringify(res)}{" "}
    </div>
  );
};

export default Items;
