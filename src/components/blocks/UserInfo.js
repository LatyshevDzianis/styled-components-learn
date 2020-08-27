import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhoneIcon from "@material-ui/icons/Phone";

import ChangeThemeWrapper from "../wrappers/ChangeThemeWrapper";
import CheckoutFormTitle from "../styled/CheckoutFormTitle";
import MyCheckBox from "../controls/CheckBoxField";
import InfoWrapper from "../wrappers/InfoWrapper";
import IconsWrapper from "../wrappers/IconsWrapper";
import MyTextField from "../controls/TextField";
import MiddleWrapper from "../wrappers/MiddleWrapper";
import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PHONE,
  COUNTRY,
  CITY,
  POST_CODE,
  ADDRESS,
  ADDITIONAL_INFO,
} from "../../constants/fields";

const UserInfo = ({ handleChangeTheme }) => {
  return (
    <>
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
          <MyTextField name={FIRST_NAME} placeholder="First name" />
        </IconsWrapper>
        <IconsWrapper>
          <AccountBoxIcon />
          <MyTextField name={LAST_NAME} placeholder="Last name" />
        </IconsWrapper>
        <IconsWrapper>
          <MailIcon />
          <MyTextField name={EMAIL} placeholder="Email" />
        </IconsWrapper>
        <IconsWrapper>
          <PhoneIcon />
          <MyTextField name={PHONE} placeholder="Phone" />
        </IconsWrapper>
      </InfoWrapper>

      <MiddleWrapper>
        <MyTextField name={COUNTRY} placeholder="Country" gridArea="a" />
        <MyTextField name={CITY} placeholder="City" gridArea="b" />
        <MyTextField name={POST_CODE} placeholder="Post code" gridArea="c" />
        <MyTextField name={ADDRESS} placeholder="Address" gridArea="d" />
        <MyTextField
          name={ADDITIONAL_INFO}
          placeholder="Additional info"
          gridArea="e"
        />
      </MiddleWrapper>
    </>
  );
};

export default UserInfo;
