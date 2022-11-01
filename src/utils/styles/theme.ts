import { DefaultTheme } from "styled-components";

const colors = {
  white: "#fff",
  black: "000",
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

//${(props) => props.theme.color.white}
//${({theme}) => theme.color.white}
