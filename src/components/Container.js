import styled, { css } from "styled-components";

export const Container = styled.div.attrs((props) => {
  console.log(props);
  return props.hasOwnProperty("fluid") ? { fluid: true } : "";
})`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  &:after,
  &:before {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
  ${(props) => {
    return (
      !props.fluid &&
      css`
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;
        &:after,
        &:before {
          content: " ";
          display: table;
        }
        &:after {
          clear: both;
        }
        @media (min-width: 768px) {
          width: 750px;
        }
        @media (min-width: 992px) {
          width: 970px;
        }
        @media (min-width: 1200px) {
          width: 1170px;
        }
      `
    );
  }}
  &.h-100 {
    height: 100%;
  }
`;

/*
(min-width: ${get(props.theme, "breakpoints[0]")})

*/
