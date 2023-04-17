import { PageLayout } from "@/components";
import CheckoutForm from "@/components/CheckoutRefactor";
import React from "react";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <PageLayout title="Checkout" bgColor="bg">
      <CheckoutForm />;
    </PageLayout>
  );
};

export default Checkout;
