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

export const getColWidth = (value = 12) => {
  console.log(value);
  if (value === 1) {
    return css`
      width: ${cols[0] + "%"};
    `;
  }
  if (value === 2) {
    return css`
      width: ${cols[1] + "%"};
    `;
  }
  if (value === 3) {
    return css`
      width: ${cols[2] + "%"};
    `;
  }
  if (value === 4) {
    return css`
      width: ${cols[3] + "%"};
    `;
  }
  if (value === 5) {
    return css`
      width: ${cols[4] + "%"};
    `;
  }
  if (value === 6) {
    return css`
      width: ${cols[5] + "%"};
    `;
  }
  if (value === 7) {
    return css`
      width: ${cols[6] + "%"};
    `;
  }
  if (value === 8) {
    return css`
      width: ${cols[7] + "%"};
    `;
  }
  if (value === 9) {
    return css`
      width: ${cols[8] + "%"};
    `;
  }
  if (value === 10) {
    return css`
      width: ${cols[9] + "%"};
    `;
  }
  if (value === 11) {
    return css`
      width: ${cols[10] + "%"};
    `;
  }
  if (value === 12) {
    return css`
      width: 100%;
    `;
  }
};
