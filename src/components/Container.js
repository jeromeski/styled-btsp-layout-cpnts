import styled, { css } from "styled-components";
import { get } from "styled-system";

export const Container = styled.div.attrs((props) => {
  console.log(props);
  return { type: props.type || "fluid" };
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
      props.type === "normal" &&
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
        @media (min-width: ${get(props.theme, "breakpoints[0]")}) {
          width: 750px;
        }
        @media (min-width: ${get(props.theme, "breakpoints[1]")}) {
          width: 970px;
        }
        @media (min-width: ${get(props.theme, "breakpoints[2]")}) {
          width: 1170px;
        }
      `
    );
  }}
`;
