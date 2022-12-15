import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Ellipse1 from "../../../asset/images/Ellipse1.png";
import Main from "../../../asset/images/main.png";

import { Box, Container, Typography, Button, Grid } from "@mui/material";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <Box className="home_banner"></Box>
        <Container maxWidth={"lg"}>
          <Grid container>
            <Grid item xs={12} md={12} lg={6}>
              <Box
                sx={{
                  paddingTop: { xs: "0px", md: "0px", lg: "205px" },
                  paddingBottom: { xs: "0px", md: "0px", lg: "205px" },
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                }}
              >
                <Typography variant="h1" color={"secondary"}>
                  Kembangkan Bisnis Anda{" "}
                  <span className="text-primary">Bersama Kami</span>
                </Typography>
                <Typography variant="p">
                  Lorem Ipsum is simply dummy text of the printing and setting
                  indus orem Ipsum has been the industrys.
                </Typography>
                <Box
                  sx={{
                    width: "-webkit-fill-available",
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "7px",
                    gap: { xs: "12px", md: "48px" },
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                      borderRadius: "8px",
                    }}
                  >
                    Mulai Sekarang
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                      borderRadius: "8px",
                    }}
                  >
                    Dapatkan Promo
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box className="home_img_main"></Box>
              {/* <Box
                sx={{
                  position: { xs: "relative", md: "relative", lg: "absolute" },
                  right: 0,
                  background: "url(" + Ellipse1 + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  height: "953px",
                  width: "924px",
                  zIndex: "-1",
                }}
              >
                <Box
                  sx={{
                    position: {
                      xs: "relative",
                      md: "relative",
                      lg: "absolute",
                    },
                    right: 0,
                    background: "url(" + Main + ")",
                    backgroundSize: "contain",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    height: "643px",
                    width: "591.09px",
                    zIndex: 1300,
                  }}
                ></Box>
              </Box> */}
            </Grid>
          </Grid>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
