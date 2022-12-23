import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box } from "@mui/material";

import Banner from "../box/banner";
import Testimony from "../section/home/testimony";

class TestimonyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <Box className="content">
        <Banner
          title={[
            "Testimoni Dari Pengguna",
            <span className="text-primary">TOQOO</span>,
          ]}
        />
        <Testimony />
        <br/>
        <br/>
        <br/>
        <br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TestimonyPage);
