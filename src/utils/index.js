import { css } from "styled-components";

const cols = [
  8.33333,
  16.66667,
  25,
  33.33333,
  41.66667,
  50,
  58.33333,
  66.66667,
  75,
  83.33333,
  91.66667,
  100
];

export const getColWidth = (props) => {
  console.log(props);
  if (
    props.xs === 1 ||
    props.sm === 1 ||
    props.md === 1 ||
    props.lg === 1 ||
    props.xl === 1
  ) {
    return css`
      width: ${cols[0] + "%"};
    `;
  }
  if (
    props.xs === 2 ||
    props.sm === 2 ||
    props.md === 2 ||
    props.lg === 2 ||
    props.xl === 2
  ) {
    return css`
      width: ${cols[1] + "%"};
    `;
  }
  if (
    props.xs === 3 ||
    props.sm === 3 ||
    props.md === 3 ||
    props.lg === 3 ||
    props.xl === 3
  ) {
    return css`
      width: ${cols[2] + "%"};
    `;
  }
  if (
    props.xs === 4 ||
    props.sm === 4 ||
    props.md === 4 ||
    props.lg === 4 ||
    props.xl === 4
  ) {
    return css`
      width: ${cols[3] + "%"};
    `;
  }
  if (
    props.xs === 5 ||
    props.sm === 5 ||
    props.md === 5 ||
    props.lg === 5 ||
    props.xl === 5
  ) {
    return css`
      width: ${cols[4] + "%"};
    `;
  }
  if (
    props.xs === 6 ||
    props.sm === 6 ||
    props.md === 6 ||
    props.lg === 6 ||
    props.xl === 6
  ) {
    return css`
      width: ${cols[5] + "%"};
    `;
  }
  if (
    props.xs === 7 ||
    props.sm === 7 ||
    props.md === 7 ||
    props.lg === 7 ||
    props.xl === 7
  ) {
    return css`
      width: ${cols[6] + "%"};
    `;
  }
  if (
    props.xs === 8 ||
    props.sm === 8 ||
    props.md === 8 ||
    props.lg === 8 ||
    props.xl === 8
  ) {
    return css`
      width: ${cols[7] + "%"};
    `;
  }
  if (
    props.xs === 9 ||
    props.sm === 9 ||
    props.md === 9 ||
    props.lg === 9 ||
    props.xl === 9
  ) {
    return css`
      width: ${cols[8] + "%"};
    `;
  }
  if (
    props.xs === 10 ||
    props.sm === 10 ||
    props.md === 10 ||
    props.lg === 10 ||
    props.xl === 10
  ) {
    return css`
      width: ${cols[9] + "%"};
    `;
  }
  if (
    props.xs === 11 ||
    props.sm === 11 ||
    props.md === 11 ||
    props.lg === 11 ||
    props.xl === 11
  ) {
    return css`
      width: ${cols[10] + "%"};
    `;
  }
  if (
    props.xs === 12 ||
    props.sm === 12 ||
    props.md === 12 ||
    props.lg === 12 ||
    props.xl === 12
  ) {
    return css`
      width: ${cols[11] + "%"};
    `;
  }
};
