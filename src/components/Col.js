import styled, { css } from "styled-components";

export const Col = styled.div.attrs((props) => ({
  className: props.className
}))`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
`;
