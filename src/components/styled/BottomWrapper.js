import styled from "styled-components";

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "a a"
    "b c"
    "d e";
  grid-column-gap: 10px;
`;

export default BottomWrapper;
