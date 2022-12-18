import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import SliderPartner from "../../slider/partner";

import { Box, Container, Typography, Button, Grid } from "@mui/material";

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <div data-aos="fade-down" data-aos-duration="1000">
              <SliderPartner />
            </div>
          </Grid>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Partner);
