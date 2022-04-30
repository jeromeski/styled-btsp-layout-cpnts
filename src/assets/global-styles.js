import { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import css from "@styled-system/css";

export const GlobalStyles = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0
    },
    html: {
      height: "100%",
      width: "100%"
    },
    body: {
      margin: 0,
      height: "inherit",
      width: "inherit",
      fontFamily: "body",
      fontWeight: "regular",
      fontSize: "base",
      lineHeight: "1.5",
      backgroundColor: "white",
      transition: get(theme, "customs.transition")
    },
    h1: {
      fontFamily: "heading",
      fontSize: "5xl",
      margin: 0
    },
    h2: {
      fontFamily: "heading",
      fontSize: "3xl",
      margin: 0
    },
    h3: {
      fontFamily: "heading",
      fontSize: "2xl",
      margin: 0
    },
    h4: {
      fontFamily: "heading",
      fontSize: "xl",
      margin: 0
    },
    h5: {
      fontFamily: "heading",
      fontSize: "md",
      margin: 0
    },
    h6: {
      fontFamily: "heading",
      fontSize: "base",
      margin: 0
    },
    "p,span,button,li,div": {
      fontFamily: "body",
      margin: 0
    },
    a: {
      fontFamily: "body",
      textDecoration: "none"
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    },
    ...theme.globals
  })
);
