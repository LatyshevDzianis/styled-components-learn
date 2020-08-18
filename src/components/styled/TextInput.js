import styled from "styled-components";

const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid #7f8c8d;
  padding: 10px 0;
  margin-left: 10px;
  margin-bottom: 10px;
  width: ${(props) => props.customWidth};

  :active,
  :focus {
    outline: none;
  }
`;

export default TextInput;
