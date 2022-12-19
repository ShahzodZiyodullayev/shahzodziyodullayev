import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import Routes from "../../routes";

import "./App.css";
import NavigationScroll from "../../layouts/NavigationScroll";

// defaultTheme
import themes from "../../themes";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes()}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
