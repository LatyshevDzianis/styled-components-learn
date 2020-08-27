import styled from "styled-components";
import { textColor } from "../../theme/theme";

const Select = styled.select`
  border: none;
  border-bottom: 1px solid ${textColor};
  padding: 10px 0;
  margin-bottom: 10px;
  background: transparent;
  width: 100%;

  :active,
  :focus {
    outline: none;
  }
`;

export default Select;
