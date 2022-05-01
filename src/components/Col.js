import styled from "styled-components/macro";
import { getColWidth } from "../utils";

// export const Col = styled.div`
//   position: relative;
//   min-height: 1px;
//   padding-left: 15px;
//   padding-right: 15px;
//   height: inherit;
//   float: left;
//   ${(props) => {
//     return getColWidth(props);
//   }}
// `;

export const Col = ({ children, xs, md }) => {
  return <div>{children}</div>;
};
