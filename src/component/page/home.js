import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box } from "@mui/material";

import Banner from "../section/home/banner";
import Partner from "../section/home/partner";
import Benefit from "../section/home/benefit";
import Advantage from "../section/home/advantage";
import Testimony from "../section/home/testimony";
import Device from "../section/home/device";
import FAQ from "../section/home/faq";
import Price from "../section/home/price";
import Footer from "../section/footer";

class Home extends Component {
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
        <Partner />
        <Benefit />
        <Advantage />
        <Testimony />
        <Device />
        <FAQ />
        <Price />
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
