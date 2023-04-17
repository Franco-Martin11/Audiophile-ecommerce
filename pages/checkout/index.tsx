import { GoBack, PageLayout } from "@/components";
import FormFields from "@/components/Checkout/components/FormFields";
import React from "react";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <PageLayout title="Checkout" bgColor="bg">
      <FormFields />;
    </PageLayout>
  );
};

export default Checkout;
