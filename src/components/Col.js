import styled, { css } from "styled-components/macro";
import { getColWidth } from "../utils";

export const Col = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  /* height: inherit; */
  float: left;
  background-color: lightgray;

  ${(props) => {
    const bpXS = props.theme.breakpoints[1];
    const bpSM = props.theme.breakpoints[2];
    const bpMD = props.theme.breakpoints[3];
    const bpLG = props.theme.breakpoints[4];
    const bpXL = props.theme.breakpoints[5];
    return css`
      @media only screen and (min-width: 0px) and (max-width: ${bpXS}) {
        ${(props) => {
          return getColWidth(props.xs);
        }}
      }
      @media only screen and (min-width: 575px) and (max-width: ${bpSM}) {
        ${(props) => {
          return getColWidth(props.sm);
        }}
      }
      @media only screen and (min-width: 767px) and (max-width: ${bpMD}) {
        ${(props) => {
          return getColWidth(props.md);
        }}
      }
      @media only screen and (min-width: 991px) and (max-width: ${bpLG}) {
        ${(props) => {
          return getColWidth(props.lg);
        }}
      }
      @media only screen and (min-width: 1201px) {
        ${(props) => {
          return getColWidth(props.xl);
        }}
      }
    `;
  }}
`;
