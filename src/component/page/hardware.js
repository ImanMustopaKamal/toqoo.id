import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box } from "@mui/material";

import Banner from "../box/banner";
import Section1 from "../section/hardware/section1";
import Section2 from "../section/fitur/section2";
import Section3 from "../section/fitur/section3";
import Section4 from "../section/fitur/section4";
import Section5 from "../section/fitur/section5";
import Section6 from "../section/fitur/section6";
import Section7 from "../section/fitur/section7";
import Device from "../section/home/device";
import Recomendation from "../section/hardware/recomendation";

class HardwarePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <Box className="content">
        <Banner title={["Hardware untuk Kebutuhan Bisnis Anda"]} />
        <Device />
        <Recomendation />
        <Section1 />
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HardwarePage);
