import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

import {
  Box,
  ThemeProvider,
  Typography,
  CssBaseline,
  Backdrop,
  Container,
} from "@mui/material";

import theme from "./component/theme";
import Header from "./component/section/header";
import Home from "./component/section/home";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const ctx = this;
    const doc = document.getElementById("backdrop");
    const top = doc.offsetTop;
    // const bottom = doc.offset
    const height = doc.offsetHeight;
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    window.onscroll = function () {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
      if (window.pageYOffset > top) {
        if (window.pageYOffset < top + height) {
          ctx.setState({ open: true });
        } else {
          ctx.setState({ open: false });
        }
      }
      if (window.pageYOffset < top) {
        ctx.setState({ open: false });
      }
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
                <Box className="content">
                  <Container>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <Home open={this.state.open} />
                    <h3>Lorem</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                    <p>Lorem</p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>{" "}
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>{" "}
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>{" "}
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, illum definitiones no quo,
                      maluisset concludaturque et eum, altera fabulas ut quo.
                      Atqui causae gloriatur ius te, id agam omnis evertitur
                      eum. Affert laboramus repudiandae nec et. Inciderint
                      efficiantur his ad. Eum no molestiae voluptatibus.
                    </p>
                  </Container>
                </Box>
              </Route>
              <Route exact path="/about">
                <Typography variant="h1">About</Typography>
              </Route>
            </Switch>
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
