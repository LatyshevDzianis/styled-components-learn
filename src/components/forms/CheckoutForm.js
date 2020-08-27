import React from "react";
import * as Yup from "yup";
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
            <ChangeThemeWrapper>
              <CheckoutFormTitle>Checkout form</CheckoutFormTitle>
              <MyCheckBox
                name="theme"
                label="Dark theme"
                onChange={handleChangeTheme}
              />
            </ChangeThemeWrapper>
            <InfoWrapper>
              <IconsWrapper>
                <AccountBoxIcon />
                <MyTextField
                  name="firstName"
                  placeholder="First name"
                  customWidth="97%"
                />
              </IconsWrapper>
              <IconsWrapper>
                <AccountBoxIcon />
                <MyTextField
                  name="lastName"
                  placeholder="Last name"
                  customWidth="97%"
                />
              </IconsWrapper>
              <IconsWrapper>
                <MailIcon />
                <MyTextField
                  name="email"
                  placeholder="Email"
                  customWidth="97%"
                />
              </IconsWrapper>
              <IconsWrapper>
                <PhoneIcon />
                <MyTextField
                  name="phone"
                  placeholder="Phone"
                  customWidth="97%"
                />
              </IconsWrapper>
            </InfoWrapper>

            <MiddleWrapper>
              <MyTextField
                name="country"
                placeholder="Country"
                customWidth="98%"
                gridArea="a"
              />
              <MyTextField
                name="city"
                placeholder="City"
                customWidth="98%"
                gridArea="b"
              />
              <MyTextField
                name="postCode"
                placeholder="Post code"
                customWidth="98%"
                gridArea="c"
              />
              <MyTextField
                name="address"
                placeholder="Address"
                customWidth="99.5%"
                gridArea="d"
              />
              <MyTextField
                name="additionalInfo"
                placeholder="Additional info"
                customWidth="99.5%"
                gridArea="e"
              />
            </MiddleWrapper>

            <CardDetailsTitle>Card details</CardDetailsTitle>

            <CardDetailsWrapper>
              <div>
                <MyRadio name="debitCard" value="visa" label="Visa" />
                <MyRadio
                  name="debitCard"
                  value="masterCard"
                  label="MasterCard"
                />
                <MyRadio name="debitCard" value="paypal" label="Paypal" />
                <ErrorMessage name="debitCard" component={StyledError} />
              </div>
              <CardDetailsInfoWrapper>
                <MyTextField
                  name="nameOnCard"
                  placeholder="Name on card"
                  customWidth="99%"
                  gridArea="a"
                />
                <MyTextField
                  name="cardNumber"
                  placeholder="Card number"
                  customWidth="99%"
                  gridArea="b"
                />
                <MyTextField
                  name="cvv2"
                  placeholder="CVV2"
                  customWidth="97%"
                  gridArea="c"
                />
                <MySelect
                  name="expirationMonth"
                  customWidth="99%"
                  grid-area="d"
                >
                  <option value="">Card exp. month...</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </MySelect>
                <MyTextField
                  name="expirationYear"
                  type="number"
                  placeholder="Year"
                  customWidth="97%"
                  gridArea="e"
                />
              </CardDetailsInfoWrapper>
            </CardDetailsWrapper>
            <Separator />
            <Button type="submit">SUBMIT REQUEST</Button>
          </CheckoutCard>
        </Wrapper>
      </Form>
    </Formik>
  );
};

export default CheckoutForm;
