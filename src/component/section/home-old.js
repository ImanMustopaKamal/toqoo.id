import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  Box,
  Typography,
  Container,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  Button,
  Backdrop,
} from "@mui/material";

import NotFound from "../../asset/404.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <Box>
        <Box
          id="backdrop"
          sx={{
            background: "url(" + NotFound + ")",
            height: 400,
            marginTop: "70px",
            // visibility: !this.props.open ? "hidden" : "visible",
            transition: "visibility .5s linear",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            zIndex: this.state.open
              ? (theme) => theme.zIndex.drawer
              : (theme) => theme.zIndex.drawer + 102,
            position: "relative",
          }}
        ></Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
