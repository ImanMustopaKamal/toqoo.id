import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from "react-slick";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
} from "@mui/material";

import Hardware1 from "../../../asset/images/hardware1.png";
import Hardware2 from "../../../asset/images/hardware2.png";
import Hardware3 from "../../../asset/images/hardware3.png";

class Recomendation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      speed: 1700,
      dots: true,
      arrows: false,
      customPaging: (i) => <Box></Box>,
    };
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   speed: 1700,
    //   dots: true,
    //   arrows: false,
    //   customPaging: (i) => <Box></Box>,
    // };
    return (
      <section className="mt2">
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Slider {...settings}>
                {/* <Box
                  sx={{
                    width: "240px",
                  }}
                >
                  <Stack direction="column" spacing={2}>
                    <Box
                      sx={{
                        background: "url(" + Hardware1 + ")",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    ></Box>
                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 800 }}
                    >
                      hehe
                    </Typography>
                    <Typography variant="p" color="secondary">
                      lorem
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        width: { xs: "80%", lg: "50%" },
                        fontSize: { xs: "12px" },
                      }}
                    >
                      beli sekarang
                    </Button>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    width: "240px",
                  }}
                >
                  <Stack direction="column" spacing={2}>
                    <Box
                      sx={{
                        background: "url(" + Hardware2 + ")",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    ></Box>
                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 800 }}
                    >
                      hehe
                    </Typography>
                    <Typography variant="p" color="secondary">
                      lorem
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        width: { xs: "80%", lg: "50%" },
                        fontSize: { xs: "12px" },
                      }}
                    >
                      beli sekarang
                    </Button>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    width: "240px",
                  }}
                >
                  <Stack direction="column" spacing={2}>
                    <Box
                      sx={{
                        background: "url(" + Hardware3 + ")",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    ></Box>
                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 800 }}
                    >
                      hehe
                    </Typography>
                    <Typography variant="p" color="secondary">
                      lorem
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        width: { xs: "80%", lg: "50%" },
                        fontSize: { xs: "12px" },
                      }}
                    >
                      beli sekarang
                    </Button>
                  </Stack>
                </Box> */}
                <Box style={{ width: 363 }}>
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{ width: "330px", pt: 1, pb: 1 }}
                  >
                    <Box
                      style={{
                        background: "url(" + Hardware1 + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "330px",
                        height: "330px",
                        borderRadius: "16px",
                      }}
                    ></Box>
                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 800 }}
                    >
                      hehe
                    </Typography>
                    <Typography variant="p" color="secondary">
                      lorem
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        width: { xs: "80%", lg: "50%" },
                        fontSize: { xs: "12px" },
                      }}
                    >
                      beli sekarang
                    </Button>
                  </Stack>
                </Box>
                <Box style={{ width: 363 }}>
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{ width: "330px", pt: 1, pb: 1 }}
                  >
                    <Box
                      style={{
                        background: "url(" + Hardware2 + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "330px",
                        height: "330px",
                        borderRadius: "16px",
                      }}
                    ></Box>
                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 800 }}
                    >
                      hehe
                    </Typography>
                    <Typography variant="p" color="secondary">
                      lorem
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        width: { xs: "80%", lg: "50%" },
                        fontSize: { xs: "12px" },
                      }}
                    >
                      beli sekarang
                    </Button>
                  </Stack>
                </Box>
                <Box style={{ width: 363 }}>
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{ width: "330px", pt: 1, pb: 1 }}
                  >
                    <Box
                      style={{
                        background: "url(" + Hardware3 + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "330px",
                        height: "330px",
                        borderRadius: "16px",
                      }}
                    ></Box>
                    <Typography
                      variant="h5"
                      color="secondary"
                      sx={{ fontWeight: 800 }}
                    >
                      hehe
                    </Typography>
                    <Typography variant="p" color="secondary">
                      lorem
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        width: { xs: "80%", lg: "50%" },
                        fontSize: { xs: "12px" },
                      }}
                    >
                      beli sekarang
                    </Button>
                  </Stack>
                </Box>
              </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Recomendation);
