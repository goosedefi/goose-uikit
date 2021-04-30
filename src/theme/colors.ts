import { Colors } from "./types";

export const baseColors = {
  failure: "#E11E3B",
  primary: "#ffffff",
  primaryBright: "#ffffff",
  primaryDark: "#ffffff",
  secondary: "#316daf",
  success: "#ffffff",
  warning: "#ff0000",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#749ece",
  backgroundDisabled: "#d5eaff",
  contrast: "#00194b",
  invertedContrast: "#d5eaff",
  input: "#5da0d4",
  tertiary: "#003276",
  text: "#124996",
  textDisabled: "#3e66a8",
  textSubtle: "#0c4e93",
  borderColor: "#105498",
  card: "#d5eaff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #3dada3 0%, #44beee 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#00f4a6",
  background: "#00184D",
  backgroundDisabled: "#35353f",
  contrast: "#FFFFFF",
  invertedContrast: "#000844",
  input: "#316daf",
  primaryDark: "#316daf",
  tertiary: "#000044",
  text: "#44beee",
  textDisabled: "#44617a",
  textSubtle: "#99bde0",
  borderColor: "#316daf",
  card: "#00102b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #316daf 0%, #1e7cd1 100%)",
  },
};
