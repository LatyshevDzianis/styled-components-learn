import React from "react";
import { ErrorMessage, Field } from "formik";

const DebitCardSelect = () => {
  return (
    <div>
      <p>
        <Field name="debit" type="radio" value="visa" />
        Visa
      </p>
      <p>
        <Field name="debit" type="radio" value="masterCard" />
        MasterCard
      </p>
      <p>
        <Field name="debit" type="radio" value="paypal" />
        Paypal
      </p>
    </div>
  );
};

export default DebitCardSelect;
