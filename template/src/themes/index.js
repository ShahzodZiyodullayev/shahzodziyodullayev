import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// project imports
import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./palette";
import themeTypography from "./typography";

export const theme = (customization) => {
  const themeOption = {
    colors,
    defaultText: "'Poppins', sans-serif",
    customization,
  };

  const themeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
