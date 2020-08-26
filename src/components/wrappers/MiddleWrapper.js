import styled from "styled-components";

const MiddleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "a b c"
    "d d d"
    "e e e";
  grid-column-gap: 10px;
`;

export default MiddleWrapper;
