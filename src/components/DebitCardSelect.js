import React from "react";

const DebitCardSelect = () => {
  return (
    <div>
      <p>
        <input type="radio" name="debit" />
        Visa
      </p>
      <p>
        <input type="radio" name="debit" />
        MasterCard
      </p>
      <p>
        <input type="radio" name="debit" />
        Paypal
      </p>
    </div>
  );
};

export default DebitCardSelect;
