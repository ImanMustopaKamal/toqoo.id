import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";

class Section3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt4">
        <Box className="home_benefit"></Box>
        <Container maxWidth={"lg"}>
          <Grid container spacing={4} alignItems={"center"}>
            <Grid item xs={12} md={12} lg={6} data-aos="fade-right">
              <Box className="home_img_benefit"></Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6} data-aos="fade-left">
              <Stack direction="column" spacing={2}>
                <Typography variant="h2" color="secondary">
                  Manajemen Pelanggan
                </Typography>
                <Typography variant="p" color="secondary">
                  Lorem Ipsum is simply dummy text of the printing and setting
                  indus orem Ipsum has been the industrys.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section3);
