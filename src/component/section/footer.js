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
            <Grid>

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
