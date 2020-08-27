import React from "react";

import MyRadio from "../controls/RadioField";
import { ErrorMessage } from "formik";
import StyledError from "../styled/StyledError";
import { DEBIT_CARD } from "../../constants/fields";

const RadioGroup = () => {
  return (
    <div>
      <MyRadio name={DEBIT_CARD} value="visa" label="Visa" />
      <MyRadio name={DEBIT_CARD} value="masterCard" label="MasterCard" />
      <MyRadio name={DEBIT_CARD} value="paypal" label="Paypal" />
      <ErrorMessage name={DEBIT_CARD} component={StyledError} />
    </div>
  );
};

export default RadioGroup;
