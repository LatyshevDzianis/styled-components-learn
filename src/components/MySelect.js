import React from "react";
import { useField } from "formik";

import FieldsWrapper from "./styled/FieldsWrapper";
import Select from "./styled/Select";
import StyledError from "./styled/StyledError";

const MySelect = ({ customWidth, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FieldsWrapper
      gridArea={props.gridArea && props.gridArea}
      customWidth={customWidth}
    >
      <Select customWidth={customWidth} {...field} {...props} />
      <br />
      {meta.touched && meta.error && <StyledError>{meta.error}</StyledError>}
    </FieldsWrapper>
  );
};

export default MySelect;
