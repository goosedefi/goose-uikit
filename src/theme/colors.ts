import { Colors } from "./types";

export const baseColors = {
  failure: "#E11E3B",
  primary: "#aa8929",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#316daf",
  success: "#60fcdd",
  warning: "#D600FF",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#316daf",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e6971",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #60fcdd 0%, #44beee 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#60fcdd",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#1e6971",
  primaryDark: "#1e6971",
  tertiary: "#353547",
  text: "#44beee",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#1e6971",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1e6971 0%, #316daf 100%)",
  },
};
