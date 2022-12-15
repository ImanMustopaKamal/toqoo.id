import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Ellipse2 from "../../../asset/images/Ellipse2.png";
import ImageSection1 from "../../../asset/images/ImageSection1.png";
import SliderBenefit from "../../slider/benefit";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class Benefit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt2">
        <Box className="home_benefit"></Box>
        <Container maxWidth={"lg"}>
          <Grid container spacing={4} alignItems={"center"}>
            <Grid item xs={12} md={12} lg={6}>
              <Box className="home_img_benefit"></Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Box
                sx={{
                  display: "block",
                  gap: "20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h2"
                  color={"secondary"}
                  sx={{ marginBottom: "20px" }}
                >
                  Benefit dari <span className="text-primary">TOQOO</span>
                </Typography>
                <Typography
                  variant="h5"
                  color={"secondary"}
                  sx={{ marginBottom: "20px" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and setting
                  indus orem Ipsum has been the industrys.
                </Typography>
                <SliderBenefit />
                <Button
                  id="learn"
                  name="learn"
                  color="secondary"
                  sx={{ padding: 0, marginTop: "20px" }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Pelajari
                </Button>
              </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(Benefit);
