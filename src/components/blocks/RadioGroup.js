import React from "react";

import MyRadio from "../controls/MyRadio";
import { ErrorMessage } from "formik";
import StyledError from "../styled/StyledError";

const RadioGroup = () => {
  return (
    <div>
      <MyRadio name="debitCard" value="visa" label="Visa" />
      <MyRadio name="debitCard" value="masterCard" label="MasterCard" />
      <MyRadio name="debitCard" value="paypal" label="Paypal" />
      <ErrorMessage name="debitCard" component={StyledError} />
    </div>
  );
};

export default RadioGroup;
