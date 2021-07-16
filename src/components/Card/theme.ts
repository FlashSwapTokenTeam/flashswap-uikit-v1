import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: "rgb(0 0 0 / 4%) 0px 0px 8px",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: "rgb(0 0 0 / 4%) 0px 0px 8px",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};
