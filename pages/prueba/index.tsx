/* eslint-disable react-hooks/rules-of-hooks */
import { useStorePrueba } from "@/store2/store";
import React from "react";

type Props = {};

const index = (props: Props) => {
  const dataPrueba = useStorePrueba((state: any) => state.count);
  const dataIncrese = useStorePrueba((state: any) => state.increment);
  return (
    <div>
      <h1>{dataPrueba}</h1>
      <button onClick={dataIncrese}>dataIncrese</button>
    </div>
  );
};

export default index;
