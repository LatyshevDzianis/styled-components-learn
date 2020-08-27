import React from "react";

import CardDetailsTitle from "../styled/CardDetailsTitle";
import CardDetailsWrapper from "../wrappers/CardDetailsWrapper";
import CardDetailsInfoWrapper from "../wrappers/CardDetailsInfoWrapper";
import MyTextField from "../controls/TextField";
import MySelect from "../controls/SelectField";
import RadioGroup from "./RadioGroup";
import {
  NAME_ON_CARD,
  CARD_NUMBER,
  CVV2,
  EXPIRATION_MONTH,
  EXPIRATION_YEAR,
} from "../../constants/fields";

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
        <RadioGroup />
        <CardDetailsInfoWrapper>
          <MyTextField
            name={NAME_ON_CARD}
            placeholder="Name on card"
            gridArea="a"
          />
          <MyTextField
            name={CARD_NUMBER}
            placeholder="Card number"
            gridArea="b"
          />
          <MyTextField name={CVV2} placeholder="CVV2" gridArea="c" />
          <MySelect name={EXPIRATION_MONTH} grid-area="d">
            <option value="">Card exp. month...</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </MySelect>
          <MyTextField
            name={EXPIRATION_YEAR}
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
