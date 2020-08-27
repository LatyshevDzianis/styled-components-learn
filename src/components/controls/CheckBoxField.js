import React from "react";
import { useField } from "formik";
import StyledLabel from "../styled/StyledLabel";

const MyCheckBox = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <StyledLabel htmlFor={props.name || props.id}>{label}</StyledLabel>
      <input type="checkbox" {...field} {...props} />
    </div>
  );
};

export default MyCheckBox;
