import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box, Container, Typography } from "@mui/material";

import Banner from "../section/benefit/banner";
import Section1 from "../section/benefit/section1";
import Section2 from "../section/benefit/section2";
import Section3 from "../section/benefit/section3";
import Section4 from "../section/benefit/section4";
import Section5 from "../section/benefit/section5";
import Section7 from "../section/fitur/section7";

class BenefitPage extends Component {
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
        <section className="mt4" data-aos="zoom-out-down">
          <Container>
            <Typography
              variant="h1"
              sx={{ color: "#80838A", textAlign: "center" }}
            >
              Satu manajemen stok untuk ratusan hingga ribuan Unit Penyimpanan
              Stok
            </Typography>
          </Container>
        </section>
        <Section1 title="Didesain khusus untuk bisnis bangunan atau sejenisnya" />
        <Section2 title="Langsung Mulai Tanpa Ribet" />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section2 title="Bisa dimonitor dimana saja dan Kapan Saja" />
        <Section1 title="Laporan Realtime & Lengkap" />
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

export default connect(mapStateToProps, mapDispatchToProps)(BenefitPage);
