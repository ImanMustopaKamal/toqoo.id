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
  Divider,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt1">
        <Box
          sx={{
            background: "#333348",
            width: "100vw",
            // padding: { xs: "60px 0px", md: "60px 0px", lg: "60px 60px" },
            paddingTop: "60px",
            // paddingLeft: { xs: "0px", md: "0px", lg: "60px" },
            // paddingRight: { xs: "0px", md: "0px", lg: "60px" },
            paddingBottom: "20px",
          }}
        >
          <Container maxWidth={"lg"}>
            <Grid container>
              <Grid item xs={12} md={12} lg={5}>
                <Stack direction={"column"} spacing={3}>
                  <Typography variant="h2" sx={{ color: "#fff" }}>
                    Harga mulai dari Rp 500.000/ Bulan
                  </Typography>
                  <Typography variant="p" sx={{ color: "#fff" }}>
                    Lorem Ipsum is simply dummy text of the printing and typese
                    tting
                  </Typography>
                  <Stack direction={"row"} spacing={4}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        fontSize: { xs: "16px", md: "20px" },
                        borderRadius: "8px",
                      }}
                    >
                      Mulai Sekarang
                    </Button>
                    <Button
                      id="learn"
                      name="learn"
                      color="primary"
                      sx={{ padding: 0, fontWeight: 800 }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Lihat Langgan lainnya
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={7}
                sx={{ height: { xs: "auto", md: "auto", lg: "343px" } }}
              >
                <Box
                  className="home_img_main"
                  sx={{ transform: { lg: "translate(13%, -51%)" } }}
                ></Box>
              </Grid>
            </Grid>
            <Divider />
          </Container>
        </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(Price);
