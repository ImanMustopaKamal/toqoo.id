import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, NavLink, withRouter } from "react-router-dom";

import {
  Box,
  Typography,
  Container,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <Box
          sx={{
            background: "#333348",
            width: "100vw",
            paddingTop: "60px",
            paddingBottom: "20px",
          }}
        >
          <Container maxWidth={"lg"}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={5}>
                <Stack direction={"column"} spacing={3}>
                  <Typography variant="h2" color="primary">
                    TOQOO
                  </Typography>
                  <Typography variant="h4" sx={{ color: "#fff" }}>
                    Tentang <span className="text-primary">TOQOO</span>
                  </Typography>
                  <Typography variant="p" sx={{ color: "#fff" }}>
                    Lorem ipsum dolor sit amet consectetur. Tristique molestie
                    nisl felis facilisis lorem tortor consectetur porta risus.
                    Phasellus rhoncus nibh cursus nunc praesent. Mattis tellus
                    sollicitudin vitae a aenean netus sed mauris. Facilisis erat
                    nisi quis est in tristique varius nibh in.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Box
                      sx={{
                        width: "37px",
                        height: "37px",
                        border: "1px solid #FFFFFF",
                        borderRadius: "50px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        width: "37px",
                        height: "37px",
                        border: "1px solid #FFFFFF",
                        borderRadius: "50px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        width: "37px",
                        height: "37px",
                        border: "1px solid #FFFFFF",
                        borderRadius: "50px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        width: "37px",
                        height: "37px",
                        border: "1px solid #FFFFFF",
                        borderRadius: "50px",
                      }}
                    ></Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={12} lg={3}>
                <Stack direction={"column"} spacing={3}>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#fff",
                      marginTop: { lg: "85px", md: "20px", xs: "20px" },
                    }}
                  >
                    support@example.com
                  </Typography>
                  <Typography variant="p" sx={{ color: "#fff" }}>
                    +1-900-123 4567
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={12} lg={2}>
                <Stack direction={"column"} spacing={3}>
                  <Typography variant="h4" color="primary">
                    Link
                  </Typography>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink}
                    to={"/"}
                  >
                    Home
                  </Button>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink}
                    to={"/fitur"}
                  >
                    Fitur
                  </Button>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink}
                    to={"/benefit"}
                  >
                    Benefit
                  </Button>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink}
                    to={"/testimony"}
                  >
                    Testimoni
                  </Button>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink} to={"/contact"}
                  >
                    Kontak Kami
                  </Button>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink} to={"/try"}
                  >
                    Coba Gratis
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={12} lg={2}>
                <Stack direction={"column"} spacing={3}>
                  <Typography variant="h4" color="primary">
                    Help & Suport
                  </Typography>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink} to={"/faq"}
                  >
                    FAQ
                  </Button>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink} to={"/termcondition"}
                  >
                    Term & Condition
                  </Button>
                  <Button
                    sx={{
                      color: "#FFF",
                      textAlign: "left",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                    component={NavLink} to={"/privacypolicy"}
                  >
                    Privacy Policy
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingTop: "60px", justifyContent: "space-between" }}
            >
              <Grid item xs={12} md={12} lg={6}>
                <Typography variant="h5" sx={{ color: "#FFF" }}>
                  © Copyrights 2022. TOQOO
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={6} sx={{ display: "contents" }}>
                <Stack direction="row" spacing={2}>
                  <Box
                    sx={{
                      width: "37px",
                      height: "37px",
                      border: "1px solid #FFFFFF",
                      borderRadius: "50px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "37px",
                      height: "37px",
                      border: "1px solid #FFFFFF",
                      borderRadius: "50px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "37px",
                      height: "37px",
                      border: "1px solid #FFFFFF",
                      borderRadius: "50px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: "37px",
                      height: "37px",
                      border: "1px solid #FFFFFF",
                      borderRadius: "50px",
                    }}
                  ></Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
