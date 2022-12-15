import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Ellipse3 from "../../../asset/images/Ellipse3.png";
import Main2 from "../../../asset/images/main2.png";
import Icon1 from "../../../asset/icon/icon1.png";
import Icon2 from "../../../asset/icon/icon2.png";
import Icon3 from "../../../asset/icon/icon3.png";
import Icon4 from "../../../asset/icon/icon4.png";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class Advantage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt3">
        <Box className="home_advantage"></Box>
        <Container maxWidth={false}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{ height: { xs: "137px", md: "100%" } }}
            >
              <Box className="home_img_advantage"></Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Card
                sx={{
                  minWidth: 275,
                  padding: { xs: "10px", md: "10px", lg: "69px" },
                  paddingTop: { xs: "159px", md: "159px", lg: "104px" },
                  textAlign: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    paddingTop: "35px",
                  }}
                >
                  <Typography color="secondary" variant="h2">
                    Fitur <span className="text-primary">TOQOO</span> yang
                    Membuat Beda
                  </Typography>
                  <Typography variant="h5" color="secondary">
                    Lorem Ipsum is simply dummy text of the printing and setting
                    <br />
                    {"indus orem Ipsum has been the industrys."}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={8}
                    justifyContent="center"
                    sx={{ overflowX: "auto" }}
                  >
                    <Stack direction="column" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          background: "url(" + Icon1 + ")",
                          width: "80px",
                          height: "80px",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></Box>
                      <Typography
                        variant="h5"
                        color="secondary"
                        sx={{ fontWeight: 800, color: "#32236F" }}
                      >
                        Manajemen Stok
                      </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          background: "url(" + Icon2 + ")",
                          width: "80px",
                          height: "80px",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></Box>
                      <Typography
                        variant="h5"
                        color="secondary"
                        sx={{ fontWeight: 800, color: "#32236F" }}
                      >
                        Manajemen Stok
                      </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          background: "url(" + Icon3 + ")",
                          width: "80px",
                          height: "80px",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></Box>
                      <Typography
                        variant="h5"
                        color="secondary"
                        sx={{ fontWeight: 800, color: "#32236F" }}
                      >
                        Manajemen Stok
                      </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          background: "url(" + Icon4 + ")",
                          width: "80px",
                          height: "80px",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></Box>
                      <Typography
                        variant="h5"
                        color="secondary"
                        sx={{ fontWeight: 800, color: "#32236F" }}
                      >
                        Manajemen Stok
                      </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          background: "url(" + Icon1 + ")",
                          width: "80px",
                          height: "80px",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></Box>
                      <Typography
                        variant="h5"
                        color="secondary"
                        sx={{ fontWeight: 800, color: "#32236F" }}
                      >
                        Manajemen Stok
                      </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          background: "url(" + Icon2 + ")",
                          width: "80px",
                          height: "80px",
                          backgroundPosition: "center",
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></Box>
                      <Typography
                        variant="h5"
                        color="secondary"
                        sx={{ fontWeight: 800, color: "#32236F" }}
                      >
                        Manajemen Stok
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    id="learn"
                    name="learn"
                    color="secondary"
                    sx={{ padding: 0 }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Pelajari
                  </Button>
                </CardActions>
              </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Advantage);
