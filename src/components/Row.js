import styled from "styled-components/macro";

export const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  height: inherit;

  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;
