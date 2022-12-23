import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
} from "@mui/material";

class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt1" style={{ marginBottom: "100px" }}>
        <Container maxWidth={"lg"}>
          <Card
            className="card-fitur"
            sx={{
              background: "#333348",
              paddingLeft: { xs: "45px", md: "45px", lg: "45px" },
              paddingRight: { xs: "45px", md: "45px", lg: "45px" },
              paddingTop: { xs: "45px", md: "45px", lg: "80px" },
              paddingBottom: { xs: "45px", md: "45px", lg: "100px" },
              borderRadius: "20px",
            }}
          >
            <Stack direction="column" spacing={4} sx={{ width: { lg: "50%" } }}>
              <Typography variant="h2" sx={{ color: "#fff" }}>
                Lorem Ipsum <span className="text-primary">Bersama Kami</span>
              </Typography>
              <Typography variant="p" sx={{ color: "#fff" }}>
                Lorem Ipsum is simply dummy text of the printing and setting
                indus orem Ipsum has been the industrys.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  borderRadius: "8px",
                  width: "50%",
                }}
              >
                Coba Gratis
              </Button>
            </Stack>
          </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section1);
