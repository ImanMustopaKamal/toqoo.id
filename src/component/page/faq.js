import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box } from "@mui/material";

import Banner from "../box/banner";
import FAQ from "../section/home/faq";

class FAQPage extends Component {
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
            "Lorem Ipsum FAQ",
            <span className="text-primary">TOQOO</span>,
          ]}
        />
        <FAQ />
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

export default connect(mapStateToProps, mapDispatchToProps)(FAQPage);
