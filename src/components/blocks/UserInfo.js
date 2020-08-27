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
          <MyTextField name="email" placeholder="Email" customWidth="97%" />
        </IconsWrapper>
        <IconsWrapper>
          <PhoneIcon />
          <MyTextField name="phone" placeholder="Phone" customWidth="97%" />
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
    </>
  );
};

export default UserInfo;
