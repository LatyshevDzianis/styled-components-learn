import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhoneIcon from "@material-ui/icons/Phone";

import ChangeThemeWrapper from "../wrappers/ChangeThemeWrapper";
import CheckoutFormTitle from "../styled/CheckoutFormTitle";
import MyCheckBox from "../controls/MyCheckBox";
import InfoWrapper from "../wrappers/InfoWrapper";
import IconsWrapper from "../wrappers/IconsWrapper";
import MyTextField from "../controls/MyTextField";
import MiddleWrapper from "../wrappers/MiddleWrapper";

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
          <MyTextField name="firstName" placeholder="First name" />
        </IconsWrapper>
        <IconsWrapper>
          <AccountBoxIcon />
          <MyTextField name="lastName" placeholder="Last name" />
        </IconsWrapper>
        <IconsWrapper>
          <MailIcon />
          <MyTextField name="email" placeholder="Email" />
        </IconsWrapper>
        <IconsWrapper>
          <PhoneIcon />
          <MyTextField name="phone" placeholder="Phone" />
        </IconsWrapper>
      </InfoWrapper>

      <MiddleWrapper>
        <MyTextField name="country" placeholder="Country" gridArea="a" />
        <MyTextField name="city" placeholder="City" gridArea="b" />
        <MyTextField name="postCode" placeholder="Post code" gridArea="c" />
        <MyTextField name="address" placeholder="Address" gridArea="d" />
        <MyTextField
          name="additionalInfo"
          placeholder="Additional info"
          gridArea="e"
        />
      </MiddleWrapper>
    </>
  );
};

export default UserInfo;
