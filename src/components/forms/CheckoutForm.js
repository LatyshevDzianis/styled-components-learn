import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import Wrapper from "../wrappers/Wrapper";
import CheckoutCard from "../styled/CheckoutCard";
import ChangeThemeWrapper from "../wrappers/ChangeThemeWrapper";
import CheckoutFormTitle from "../styled/CheckoutFormTitle";
import MyCheckBox from "../controls/MyCheckBox";
import InfoWrapper from "../wrappers/InfoWrapper";
import IconsWrapper from "../wrappers/IconsWrapper";
import MyTextField from "../controls/MyTextField";
import MiddleWrapper from "../wrappers/MiddleWrapper";
import CardDetailsTitle from "../styled/CardDetailsTitle";
import CardDetailsWrapper from "../wrappers/CardDetailsWrapper";
import MyRadio from "../controls/MyRadio";
import StyledError from "../styled/StyledError";
import CardDetailsInfoWrapper from "../wrappers/CardDetailsInfoWrapper";
import MySelect from "../controls/MySelect";
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
