/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    mode: theme?.customization?.navType,
    primary: {
      main: theme.colors?.blue?.A700,
    },
    text: {
      main: "#0E0E2C",
    },
    white: {
      main: " #FFFFFF",
    },
    grey: {
      light: "#F5F6F7",
      main: theme?.colors?.grey[700],
    },
    dark: {
      main: theme?.colors?.grey[600],
    },
    background: {
      paper: theme.paper,
      default: theme.backgroundDefault,
    },
  };
}
