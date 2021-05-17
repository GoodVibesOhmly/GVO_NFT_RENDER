export const ThemeOptions = {
  // Overall height and width for media
  previewCard: {
    width: 330,
    height: 330,
    background: "transparent",
  },

  // Text overview
  textBlockPadding: "10px 15px",
  borderStyle: "2px solid #e6e6e6",
  linkColor: "#000",

  // Font settings
  bodyFont: {
    fontFamily: "Inter",
    fontWeight: 400,
  },

  titleFont: {
    fontFamily: "Inter",
    fontWeight: 500,
  },

  headerFont: {
    fontFamily: "Inter",
    fontWeight: 500,
  },

  mediaContentFont: {
    fontFamily: "Times New Roman",
  },

  buttonColor: {
    primaryBackground: "#333",
    primaryText: "#fff",
    background: "#eee",
    text: "#000",
  },

  defaultBorderRadius: 4,

  // Font size base for full view page
  fontSizeFull: 16,

  lineSpacing: 24,
};

export type ThemeOptionsType = typeof ThemeOptions;
