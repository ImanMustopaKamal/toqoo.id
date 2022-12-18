import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
            <Grid item xs={12} md={12} lg={6} data-aos="fade-right">
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
                  Benefit Menggunakan TOQOO
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
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                      borderRadius: "8px",
                    }}
                  >
                    Coba Gratis
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6} data-aos="fade-left">
              <Box className="benefit_img_main"></Box>
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
