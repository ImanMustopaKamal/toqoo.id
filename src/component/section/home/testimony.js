import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Box, Container, Typography, Button, Grid } from "@mui/material";

import Image from "../../../asset/images/testimony.png";
import Rating from "../../box/rating";

class Testimony extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt2">
        <div data-aos="zoom-in">
          <Container>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                marginBottom: { lg: "40px", md: "0px", xs: "0px" },
              }}
            >
              Testimoni <span className="text-primary">TOQOO</span>
            </Typography>
            <Box
              sx={{
                background: "url(" + Image + ")",
                height: { xs: "350px", md: "350px", lg: "350px" },
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Rating />
            </Box>
          </Container>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Testimony);
