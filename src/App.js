import React from "react";
import { createGlobalStyle } from "styled-components";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

import CheckoutForm from "./components/styled/CheckoutForm";
import Wrapper from "./components/styled/Wrapper";
import CheckoutFormTitle from "./components/styled/CheckoutFormTitle";
import TextInput from "./components/styled/TextInput";
import IconsWrapper from "./components/styled/IconsWrapper";
import InfoWrapper from "./components/styled/InfoWrapper";
import CardDetailsTitle from "./components/styled/CardDetailsTitle";
import DebitCardSelect from "./components/DebitCardSelect";
import CardDetailsWrapper from "./components/styled/CardDetailsWrapper";
import CardDetailsInfoWrapper from "./components/styled/CardDetailsInfoWrapper";
import Separator from "./components/styled/Separator";
import Button from "./components/styled/Button";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #ecf0f1;
    color: black;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <CheckoutForm>
          <CheckoutFormTitle>Checkout form</CheckoutFormTitle>
          <InfoWrapper>
            <IconsWrapper>
              <AccountBoxIcon />
              <TextInput
                type="text"
                customWidth="100%"
                placeholder="First name"
              />
            </IconsWrapper>
            <IconsWrapper>
              <AccountBoxIcon />
              <TextInput
                customWidth="100%"
                type="text"
                placeholder="Last name"
              />
            </IconsWrapper>
            <IconsWrapper>
              <MailIcon />
              <TextInput customWidth="100%" type="text" placeholder="Email" />
            </IconsWrapper>
            <IconsWrapper>
              <PhoneIcon />
              <TextInput customWidth="100%" type="text" placeholder="Email" />
            </IconsWrapper>
          </InfoWrapper>

          <TextInput placeholder="Country" customWidth="35%" />
          <TextInput placeholder="City" customWidth="35%" />
          <TextInput placeholder="Post code" customWidth="25.7%" />

          <TextInput placeholder="Address" customWidth="98.5%" />
          <TextInput placeholder="Additional info" customWidth="98.5%" />

          <CardDetailsTitle>Card details</CardDetailsTitle>

          <CardDetailsWrapper>
            <DebitCardSelect />
            <CardDetailsInfoWrapper>
              <TextInput customWidth="97.5%" placeholder="Name on card" />
              <TextInput customWidth="60%" placeholder="Card number" />
              <TextInput customWidth="35%" placeholder="CVV2" />
              <TextInput
                as="select"
                customWidth="47.5%"
                placeholder="Card exp month"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </TextInput>
              <TextInput type="number" customWidth="47.5%" placeholder="Year" />
            </CardDetailsInfoWrapper>
          </CardDetailsWrapper>
          <Separator />
          <Button>SUBMIT REQUEST</Button>
        </CheckoutForm>
      </Wrapper>
    </>
  );
}

export default App;
