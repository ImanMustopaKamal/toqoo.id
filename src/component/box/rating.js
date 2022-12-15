import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from "react-slick";

import Icon1 from "../../asset/icon/icon1.png";

import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: [5, 5, 5],
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1700,
      arrows: false,
      customPaging: (i) => <Box sx={{ margin: "10px 0px" }}></Box>,
    };

    return (
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: "320px", md: "398px", lg: "398px" },
          maxHeight: { xs: "320px", md: "398px", lg: "398px" },
          transform: {
            xs: "translateY(28%)",
            md: "translateY(28%)",
            lg: "translateY(20%)",
          },
        }}
      >
        <Slider {...settings}>
          {this.state.rating.map((el, i) => (
            <Box key={i}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Stack direction="row" spacing={1}>
                  <StarIcon
                    sx={{
                      color: "#FFB800",
                      fontSize: { xs: "12px", md: "18px", lg: "20px" },
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "#FFB800",
                      fontSize: { xs: "12px", md: "18px", lg: "20px" },
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "#FFB800",
                      fontSize: { xs: "12px", md: "18px", lg: "20px" },
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "#FFB800",
                      fontSize: { xs: "12px", md: "18px", lg: "20px" },
                    }}
                  />
                  <StarIcon
                    sx={{
                      color: "#FFB800",
                      fontSize: { xs: "12px", md: "18px", lg: "20px" },
                    }}
                  />
                </Stack>
                <Typography
                  variant="p"
                  sx={{
                    textAlign: "center",
                    maxWidth: { xs: "220px", md: "398px", lg: "398px" },
                  }}
                >
                  “ Lorem Ipsum is simply dummy text of the printing and typese
                  tting us orem Ipsum has been lorem beenthe standar dummy. ”
                </Typography>
                <Box
                  sx={{
                    background: "url(" + Icon1 + ")",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    marginTop: { xs: "10px", md: "20px", lg: "20px" },
                    width: { xs: "30px", md: "60px", lg: "60px" },
                    height: { xs: "30px", md: "60px", lg: "60px" },
                  }}
                ></Box>
                <Typography variant="p" sx={{ fontWeight: "800" }}>
                  simply dummy
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
