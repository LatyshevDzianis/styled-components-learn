import React from "react";
import { useField } from "formik";

import StyledLabel from "../styled/StyledLabel";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <StyledLabel htmlFor={props.id || props.name}>
        <input type="radio" {...field} {...props} />
        {label}
      </StyledLabel>
    </div>
  );
};

export default MyRadio;
