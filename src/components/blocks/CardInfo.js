import React from "react";
import { ErrorMessage } from "formik";

import CardDetailsTitle from "../styled/CardDetailsTitle";
import CardDetailsWrapper from "../wrappers/CardDetailsWrapper";
import MyRadio from "../controls/MyRadio";
import StyledError from "../styled/StyledError";
import CardDetailsInfoWrapper from "../wrappers/CardDetailsInfoWrapper";
import MyTextField from "../controls/MyTextField";
import MySelect from "../controls/MySelect";

const CardInfo = () => {
  return (
    <>
      <CardDetailsTitle>Card details</CardDetailsTitle>

      <CardDetailsWrapper>
        <div>
          <MyRadio name="debitCard" value="visa" label="Visa" />
          <MyRadio name="debitCard" value="masterCard" label="MasterCard" />
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
          <MySelect name="expirationMonth" customWidth="99%" grid-area="d">
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
    </>
  );
};

export default CardInfo;
