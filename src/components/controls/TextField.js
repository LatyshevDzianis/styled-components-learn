import React from "react";
import { useField } from "formik";
import TextInput from "../styled/TextInput";
import StyledError from "../styled/StyledError";
import FieldsWrapper from "../wrappers/FieldsWrapper";

const MyTextField = ({ customWidth, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FieldsWrapper gridArea={props.gridArea}>
      <TextInput error={meta.error} {...field} {...props} />
      <br />
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </FieldsWrapper>
  );
};

export default MyTextField;
