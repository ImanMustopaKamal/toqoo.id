import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Manrope"`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    p: {
      fontSize: "14px",
      fontFamily: ["Manrope"].join(","),
      "@media (max-width:600px)": {
        fontSize: "14px",
        fontFamily: ["Manrope"].join(","),
      },
    },
    h5: {
      fontSize: "16px",
      fontFamily: ["Manrope"].join(","),
      "@media (max-width:600px)": {
        fontSize: "14px",
        fontFamily: ["Manrope"].join(","),
      },
    },
    h4: {
      fontSize: "20px",
      fontFamily: ["Manrope"].join(","),
      "@media (max-width:600px)": {
        fontSize: "16px",
        fontFamily: ["Manrope"].join(","),
      },
    },
    h3: {
      fontSize: "24px",
      fontFamily: ["Manrope"].join(","),
      "@media (max-width:600px)": {
        fontSize: "20px",
        fontFamily: ["Manrope"].join(","),
      },
    },
    h2: {
      fontSize: "32px",
      fontFamily: ["Manrope"].join(","),
      "@media (max-width:600px)": {
        fontSize: "24px",
        fontFamily: ["Manrope"].join(","),
      },
    },
    h1: {
      fontSize: "42px",
      fontFamily: ["Manrope"].join(","),
      "@media (max-width:600px)": {
        fontSize: "32px",
        fontFamily: ["Manrope"].join(","),
      },
    },
  },
  components: {
    MuiButton: {
      root: {
        fontFamily: ["Manrope"].join(","),
      },
    },
    MuiButtonBase: {
      root: {
        fontFamily: ["Manrope"].join(","),
      },
    },
  },
});

export default theme;
