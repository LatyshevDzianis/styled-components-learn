import React from "react";
import { ErrorMessage } from "formik";

import CardDetailsTitle from "../styled/CardDetailsTitle";
import CardDetailsWrapper from "../wrappers/CardDetailsWrapper";
import MyRadio from "../controls/MyRadio";
import StyledError from "../styled/StyledError";
import CardDetailsInfoWrapper from "../wrappers/CardDetailsInfoWrapper";
import MyTextField from "../controls/MyTextField";
import MySelect from "../controls/MySelect";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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
            gridArea="a"
          />
          <MyTextField
            name="cardNumber"
            placeholder="Card number"
            gridArea="b"
          />
          <MyTextField name="cvv2" placeholder="CVV2" gridArea="c" />
          <MySelect name="expirationMonth" grid-area="d">
            <option value="">Card exp. month...</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </MySelect>
          <MyTextField
            name="expirationYear"
            type="number"
            placeholder="Year"
            gridArea="e"
          />
        </CardDetailsInfoWrapper>
      </CardDetailsWrapper>
    </>
  );
};

export default CardInfo;
