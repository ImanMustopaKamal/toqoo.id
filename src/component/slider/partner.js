import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Slider from "react-slick";

import Image from "../../asset/images/IMAGE.png";

import { Box } from "@mui/material";

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
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

    return (
      <Slider {...settings}>
        <Box style={{ width: 250 }}>
          <Box
            style={{
              background: "url(" + Image + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "160px",
              height: "80px",
              borderRadius: "16px",
            }}
          ></Box>
        </Box>
        <Box style={{ width: 250 }}>
          <Box
            style={{
              background: "url(" + Image + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "160px",
              height: "80px",
              borderRadius: "16px",
            }}
          ></Box>
        </Box>
        <Box style={{ width: 250 }}>
          <Box
            style={{
              background: "url(" + Image + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "160px",
              height: "80px",
              borderRadius: "16px",
            }}
          ></Box>
        </Box>
        <Box style={{ width: 250 }}>
          <Box
            style={{
              background: "url(" + Image + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "160px",
              height: "80px",
              borderRadius: "16px",
            }}
          ></Box>
        </Box>
        <Box style={{ width: 250 }}>
          <Box
            style={{
              background: "url(" + Image + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "160px",
              height: "80px",
              borderRadius: "16px",
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

export default connect(mapStateToProps, mapDispatchToProps)(Partner);
