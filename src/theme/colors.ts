import { Colors } from "./types";

export const baseColors = {
  failure: "#E11E3B",
  primary: "#00f4a6",
  primaryBright: "#00f4a6",
  primaryDark: "#00f4a6",
  secondary: "#316daf",
  success: "#00f4a6",
  warning: "#D600FF",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#93d2ff",
  backgroundDisabled: "#d5eaff",
  contrast: "#00194b",
  invertedContrast: "#d5eaff",
  input: "#bee9ff",
  tertiary: "#c7fff6",
  text: "#124996",
  textDisabled: "#7b98c8",
  textSubtle: "#256cb6",
  borderColor: "#d5eaff",
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
