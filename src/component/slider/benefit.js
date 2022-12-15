import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from "react-slick";

import Benefit1 from "../../asset/images/Benefit1.png";
import Benefit2 from "../../asset/images/Benefit2.png";

import { Box } from "@mui/material";

class Benefit extends Component {
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
      dots: false,
      arrows: false,
      customPaging: (i) => <Box></Box>,
    };

    return (
      <Slider {...settings}>
        <Box sx={{ width: { md: 280, xs: 230 } }}>
          <Box
            className="slider_benefit_img"
            sx={{
              background: "url(" + Benefit1 + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: { md: "266px", xs: "206px" },
              height: { md: "249px", xs: "189px" },
            }}
          ></Box>
        </Box>
        <Box sx={{ width: { md: 280, xs: 230 } }}>
          <Box
            className="slider_benefit_img"
            sx={{
              background: "url(" + Benefit2 + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: { md: "266px", xs: "206px" },
              height: { md: "249px", xs: "189px" },
            }}
          ></Box>
        </Box>
      </Slider>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Benefit);
