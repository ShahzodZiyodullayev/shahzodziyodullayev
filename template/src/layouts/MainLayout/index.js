import { CssBaseline, Box } from "@mui/material";

import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainLayout = () => {
  return (
    <Box height="100vh">
      <CssBaseline />
      <Header />
      <Box
        sx={{
          display: "flex",
          bgcolor: "#fff",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
