import styled from "styled-components";
import { textColor } from "../../theme/theme";

const TextInput = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid ${textColor};
  padding: 10px 0;
  margin-bottom: 10px;
  width: 100%;
  color: ${textColor};

  :active,
  :focus {
    outline: none;
  }
`;

export default TextInput;
