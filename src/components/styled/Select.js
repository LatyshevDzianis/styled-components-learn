import styled from "styled-components";
import { textColor } from "../../theme/theme";

const Select = styled.select`
  border: none;
  border-bottom: 1px solid ${textColor};
  padding: 10px 0;
  margin-left: 10px;
  margin-bottom: 10px;
  background: transparent;
  width: ${(props) => props.customWidth};

  :active,
  :focus {
    outline: none;
  }
`;

export default Select;
