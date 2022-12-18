import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";

class Section6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt4">
        {/* <Box className="home_benefit"></Box> */}
        <Container maxWidth={"lg"}>
          <Grid container spacing={4} alignItems={"center"}>
            <Grid item xs={12} md={12} lg={6} data-aos="fade-right">
              <Stack direction="column" spacing={2}>
                <Typography variant="h2" color="secondary">
                  Toko Cabang
                </Typography>
                <Typography variant="p" color="secondary">
                  Lorem Ipsum is simply dummy text of the printing and setting
                  indus orem Ipsum has been the industrys.
                </Typography>
                <ul className="list-none-style">
                  <li>
                    <Stack direction="column" spacing={1}>
                      <Typography variant="h3" color="secondary">
                        Benefit A
                      </Typography>
                      <Typography variant="p" color="secondary">
                        Lorem Ipsum is simply dummy text of the printing and
                        setting indus orem Ipsum has been
                      </Typography>
                    </Stack>
                  </li>
                  <li>
                    <Stack direction="column" spacing={1}>
                      <Typography variant="h3" color="secondary">
                        Benefit B
                      </Typography>
                      <Typography variant="p" color="secondary">
                        Lorem Ipsum is simply dummy text of the printing and
                        setting indus orem Ipsum has been
                      </Typography>
                    </Stack>
                  </li>
                  <li>
                    <Stack direction="column" spacing={1}>
                      <Typography variant="h3" color="secondary">
                        Benefit C
                      </Typography>
                      <Typography variant="p" color="secondary">
                        Lorem Ipsum is simply dummy text of the printing and
                        setting indus orem Ipsum has been
                      </Typography>
                    </Stack>
                  </li>
                </ul>
              </Stack>
            </Grid>
            <Grid item xs={12} md={12} lg={6} data-aos="fade-left">
              <Box className="banner_right"></Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section6);
