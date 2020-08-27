import styled from "styled-components";

const FieldsWrapper = styled.div`
  line-height: 1px;
  width: 100%;
  grid-area: ${(props) => (props.gridArea ? props.gridArea : "unset")};
  margin-bottom: 10px;
`;

export default FieldsWrapper;
