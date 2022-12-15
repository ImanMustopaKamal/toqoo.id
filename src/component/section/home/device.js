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
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import App from "../../../asset/images/app.png";
import List from "../../../asset/images/ListBarang.png";
import Icon5 from "../../../asset/icon/icon5.png";

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt1">
        <Container>
          <Grid container>
            <Grid item xs={12} md={12} lg={11}>
              <Card
                sx={{
                  background: "#333348",
                  paddingLeft: { xs: "45px", md: "45px", lg: "45px" },
                  paddingRight: { xs: "45px", md: "45px", lg: "45px" },
                  paddingTop: { xs: "45px", md: "45px", lg: "80px" },
                  paddingBottom: { xs: "45px", md: "45px", lg: "100px" },
                  borderRadius: "20px",
                }}
              >
                <Typography variant="h2" sx={{ color: "#fff" }}>
                  Perangkat Dasar <span className="text-primary">TOQOO</span>
                </Typography>
                <Typography variant="p" sx={{ color: "#fff" }}>
                  Lorem Ipsum is simply dummy text of the printing and typese
                  tting
                </Typography>
                <ul style={{ color: "#fff", lineHeight: "37px" }}>
                  <li>CPU: Current generation Intel i5 or better.</li>
                  <li>
                    GPU: A dedicated GPU, like an NVIDIA GeForce, for example.
                  </li>
                  <li>RAM: At least 4 GB.</li>
                  <li>Storage: At least 250 GB of SSD storage.</li>
                  <li>Screen size: At least a 13-inch display.</li>
                </ul>
                <Button
                  id="learn"
                  name="learn"
                  color="primary"
                  sx={{ padding: 0 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Pelajari
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={1}>
              <Box
                sx={{
                  background: "url(" + App + ")",
                  backgroundSize: "contain",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  width: "546.3px",
                  height: "100%",
                  position: "absolute",
                  right: 0,
                  transform: "translate(-10%, -20%)",
                  display: { xs: "none", md: "none", lg: "block" },
                }}
              ></Box>
              <Box
                sx={{
                  flexDirection: "row",
                  gap: "20px",
                  position: "absolute",
                  right: 0,
                  transform: "translate(-10%, 275%)",
                  display: { xs: "none", md: "none", lg: "flex" },
                }}
              >
                <Box id="picture2"></Box>
                <Box id="picture1"></Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(Device);
