import React from "react";
import { Form, Formik } from "formik";

import Wrapper from "../wrappers/Wrapper";
import CheckoutCard from "../styled/CheckoutCard";
import Separator from "../styled/Separator";
import Button from "../styled/Button";
import { initialValues, validationSchema } from "./config";
import UserInfo from "../blocks/UserInfo";
import CardInfo from "../blocks/CardInfo";

const CheckoutForm = ({ handleChangeTheme }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Wrapper>
          <CheckoutCard>
            <UserInfo handleChangeTheme={handleChangeTheme} />
            <CardInfo />
            <Separator />
            <Button type="submit">SUBMIT REQUEST</Button>
          </CheckoutCard>
        </Wrapper>
      </Form>
    </Formik>
  );
};

export default CheckoutForm;
