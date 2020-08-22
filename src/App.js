import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

import CheckoutForm from "./components/styled/CheckoutForm";
import Wrapper from "./components/styled/Wrapper";
import CheckoutFormTitle from "./components/styled/CheckoutFormTitle";
import IconsWrapper from "./components/styled/IconsWrapper";
import InfoWrapper from "./components/styled/InfoWrapper";
import CardDetailsTitle from "./components/styled/CardDetailsTitle";
import CardDetailsWrapper from "./components/styled/CardDetailsWrapper";
import CardDetailsInfoWrapper from "./components/styled/CardDetailsInfoWrapper";
import Separator from "./components/styled/Separator";
import Button from "./components/styled/Button";
import MyTextField from "./components/MyTextField";
import MiddleWrapper from "./components/styled/MiddleWrapper";
import MySelect from "./components/MySelect";
import MyRadio from "./components/MyRadio";
import StyledError from "./components/styled/StyledError";
import { backgroundColor } from "./theme/theme";
import ChangeThemeWrapper from "./components/styled/ChangeThemeWrapper";
import MyCheckBox from "./components/MyCheckBox";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${backgroundColor};
    color: black;
  }
`;

function App() {
  const [mode, setMode] = useState("light");

  const handleChangeTheme = () => {
    setMode((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  return (
    <>
      <ThemeProvider theme={{ mode: mode }}>
        <GlobalStyle />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            postCode: "",
            address: "",
            additionalInfo: "",
            debitCard: "",
            nameOnCard: "",
            cardNumber: "",
            cvv2: "",
            expirationMonth: "",
            expirationYear: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phone: Yup.string()
              .matches(
                /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                "Invalid phone number"
              )
              .required("Required"),
            country: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            postCode: Yup.string()
              .matches(/\d{6}/, "Invalid post code")
              .required("Required"),
            address: Yup.string().required("Required"),
            additionalInfo: Yup.string().required("Required"),
            debitCard: Yup.string().required("Required"),
            nameOnCard: Yup.string().required("Required"),
            cardNumber: Yup.string()
              .matches(/\d{16}/, "Invalid debit card number")
              .required("Required"),
            cvv2: Yup.string()
              .matches(/^[0-9]{3,4}$/, "Invalid CVV2")
              .required("Required"),
            expirationMonth: Yup.string().required("Required"),
            expirationYear: Yup.string()
              .min(4, "Invalid year")
              .max(4, "Invalid year")
              .required("Required"),
          })}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Wrapper>
              <CheckoutForm>
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
                  {/*<DebitCardSelect />*/}
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
              </CheckoutForm>
            </Wrapper>
          </Form>
        </Formik>
      </ThemeProvider>
    </>
  );
}

export default App;
