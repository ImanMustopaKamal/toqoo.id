import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt2">
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12} data-aos="fade-right">
              <Typography variant="h2" sx={{ textAlign: "center" }}>
                <span className="text-primary">FAQ</span> - Frequently Asked
                Questions
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Lorem Ipsum is simply dummy text of the printing and typese
                tting
              </Typography>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", marginBottom: "34px" }}
              >
                indus orem Ipsum has beenthe standard dummy.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} lg={12} data-aos="fade-up">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry lorem Ipsum has. been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five cen turies but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={12} lg={12} data-aos="fade-up">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry lorem Ipsum has. been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five cen turies but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                </AccordionDetails>
              </Accordion>
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

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
