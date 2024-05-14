import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xm: 400,
      smd: 575,
      mmd: 720,
      xsm: 768,
      md: 964,
      xmd: 1100,
      xxsm: 1200,
      xxl: 1536,
    },
  },
  palette: {
    yellow: "#F1A501",
  },
  typography: {
    fontFamily: ["Volkhov", "Open Sans", "'Poppins', sans-serif"],
  },

  components: {
    "*": {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif", // Use the inherited font family
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Prevent text transformation
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: 1140,
          padding: "0px 21px",
        },
      },
    },
  },
});

export default theme;
