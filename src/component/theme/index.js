import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#52CEC2",
      dark: "#45B6AB",
    },
    secondary: {
      main: "#333348",
      light: "#3E3F66",
      dark: "#E52A34",
    },
  },
  typography: {
    fontFamily: `"Manrope"`,
    // fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    p: {
      fontSize: "16px",
      fontFamily: ["Manrope"].join(","),
      lineHeight: "22px",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "16px",
        fontFamily: ["Manrope"].join(","),
        lineHeight: "22px",
        fontWeight: 400,
      },
    },
    h5: {
      fontSize: "18px",
      fontFamily: ["Manrope"].join(","),
      lineHeight: "22px",
      "@media (max-width:600px)": {
        fontSize: "16px",
        fontFamily: ["Manrope"].join(","),
        lineHeight: "22px",
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
      fontWeight: 800,
      fontFamily: ["Manrope"].join(","),
      "@media (max-width:600px)": {
        fontSize: "20px",
        fontWeight: 800,
        fontFamily: ["Manrope"].join(","),
      },
    },
    h2: {
      fontSize: "38px",
      fontWeight: 800,
      lineHeight: "60px",
      fontFamily: ["Manrope"].join(","),
      "@media (max-width:600px)": {
        fontSize: "32px",
        fontWeight: 800,
        lineHeight: "60px",
        fontFamily: ["Manrope"].join(","),
      },
    },
    h1: {
      fontSize: "45px",
      fontFamily: ["Manrope"].join(","),
      fontWeight: 800,
      lineHeight: "60px",
      "@media (max-width:600px)": {
        fontSize: "30px",
        fontFamily: ["Manrope"].join(","),
        fontWeight: 800,
        lineHeight: "60px",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#fff",
          fontSize: "16px",
          textTransform: "capitalize",
        },
        outlined: {
          fontSize: "16px",
          textTransform: "capitalize",
        },
        text: {
          fontSize: "16px",
          textTransform: "capitalize",
          "&:hover": {
            color: "#52CEC2",
            background: "unset",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.8)",
          border: "1px solid #FFFFFF",
          boxShadow: "0px 4px 30px #EDE9FE",
          borderRadius: "30px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          // marginBottom: "20px",
          boxShadow: "none",
          borderRadius: "12px",
          "&:before": {
            background: "unset",
          },

        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          // marginBottom: "20px",
          background: "#EDEFF1",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          background: "#EDEFF1",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#fff",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          top: "82px",
          background: "rgba(255, 255, 255, 0.706)",
          height: "fit-content",
          // transition: "transform 225ms cubic-bezier(1, -0.16, 0, 0.99) 1s",
          // transition:
          //   "transform 225ms cubic-bezier(0, 0, 0.2, 1) 1000ms !important",
          // zIndex: "1530",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "20px 30px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "20px 30px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "rgb(239 241 245)",
          borderRadius: "8px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          background: "#EFF1F5",
          borderRadius: "8px",
        },
        root: {
          background: "#EFF1F5",
          borderRadius: "8px",
        },
      },
    },
  },
});

export default theme;
