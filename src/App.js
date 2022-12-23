import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import {
  Box,
  ThemeProvider,
  Typography,
  CssBaseline,
  Backdrop,
  Container,
  Stack,
} from "@mui/material";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import theme from "./component/theme";
import Header from "./component/section/header";
import Footer from "./component/section/footer";
import Home from "./component/page/home";
import Fitur from "./component/page/fitur";
import Hardware from "./component/page/hardware";
import Price from "./component/page/price";
import Benefit from "./component/page/benefit";
import Testimony from "./component/page/testimony";
import Faq from "./component/page/faq";
import Contact from "./component/page/contact";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      top: false,
    };
  }

  componentDidMount() {
    AOS.init();
    const ctx = this;
    // const doc = document.getElementById("backdrop");
    // const top = doc.offsetTop;
    // const bottom = doc.offset
    // const height = doc.offsetHeight;
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    window.onscroll = function () {
      if (window.pageYOffset > 550) {
        ctx.setState({ top: true });
      } else {
        ctx.setState({ top: false });
      }
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
      // if (window.pageYOffset > top) {
      //   if (window.pageYOffset < top + height) {
      //     ctx.setState({ open: true });
      //   } else {
      //     ctx.setState({ open: false });
      //   }
      // }
      // if (window.pageYOffset < top) {
      //   ctx.setState({ open: false });
      // }
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box>
          <CssBaseline />
          <Router basename="/">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/fitur">
                <Fitur />
              </Route>
              <Route exact path="/benefit">
                <Benefit />
              </Route>
              <Route exact path="/hardware">
                <Hardware />
              </Route>
              <Route exact path="/price">
                <Price />
              </Route>
              <Route exact path="/testimony">
                <Testimony />
              </Route>
              <Route exact path="/faq">
                <Faq />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
            <Footer top={this.state.top} />
          </Router>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 101 }}
            open={this.state.open}
            onClick={() => {
              this.setState({ open: false });
            }}
          ></Backdrop>
        </Box>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
