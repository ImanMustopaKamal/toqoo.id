import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box } from "@mui/material";

import Banner from "../section/fitur/banner";
import Section1 from "../section/fitur/section1";
import Section2 from "../section/fitur/section2";
import Section3 from "../section/fitur/section3";
import Section4 from "../section/fitur/section4";
import Section5 from "../section/fitur/section5";
import Section6 from "../section/fitur/section6";
import Section7 from "../section/fitur/section7";

class FiturPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <Box className="content">
        <Banner />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
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

export default connect(mapStateToProps, mapDispatchToProps)(FiturPage);
