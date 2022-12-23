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
  Drawer,
  Card,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      pagebutton: false,
      homebutton: false,
      mobileHeader: false,
    };
  }

  handleClose = (e) => {
    this.setState({ [e.currentTarget.name]: false });
  };

  handleOpen = (e) => {
    this.setState({ [e.currentTarget.name]: true });
  };

  mobileHeader = () => {
    this.setState({ mobileHeader: !this.state.mobileHeader });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ mobileHeader: false }, () => {
        window.scrollTo({
          top: 0,
          // behavior: "smooth",
        });
      });
    }
  }

  render() {
    return (
      <header className="header" id="header">
        <Container maxWidth={"lg"}>
          <Box className="header-content">
            <Box className="brand">
              <Button color="secondary" component={NavLink} to={"/"}>
                <Typography variant="h3" color="secondary.light">
                  Logo
                </Typography>
              </Button>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              className="header-menu"
            >
              {/* <div>
                <Button
                  ref={(button) => (this.homeButton = button)}
                  id="homebutton"
                  onMouseOver={this.handleOpen}
                  onMouseLeave={this.handleClose}
                  name="homebutton"
                  sx={{ zIndex: 1301 }}
                  color="secondary.light"
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Home
                </Button>
                <Menu
                  PaperProps={{
                    onMouseEnter: () => {
                      this.setState({ homebutton: true });
                    },
                    onMouseLeave: () => {
                      this.setState({ homebutton: false });
                    },
                  }}
                  id="homemenu"
                  anchorEl={this.homeButton}
                  open={this.state.homebutton}
                  onClose={this.handleClose}
                  MenuListProps={{
                    "aria-labelledby": "homebutton",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      this.setState({ homebutton: false });
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      this.setState({ homebutton: false });
                    }}
                  >
                    My account
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      this.setState({ homebutton: false });
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div> */}
              <Button color="secondary" component={NavLink} to={"/fitur"}>
                Fitur
              </Button>
              <Button color="secondary" component={NavLink} to={"/benefit"}>
                Benefit
              </Button>
              <Button color="secondary" component={NavLink} to={"/hardware"}>
                Hardware
              </Button>
              <Button color="secondary" component={NavLink} to={"/price"}>
                Harga
              </Button>
              <Button color="secondary" component={NavLink} to={"/testimony"}>
                Testimoni
              </Button>
              <Button color="secondary" component={NavLink} to={"/faq"}>
                FAQ
              </Button>
              <Button color="secondary" component={NavLink} to={"/contact"}>
                Kontak
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  window.open(process.env.REACT_APP_APPURL, "_blank");
                }}
              >
                Coba Gratis
              </Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "25px", padding: "8px 40px" }}
                onClick={() => {
                  window.open(process.env.REACT_APP_APPURL, "_blank");
                }}
              >
                Login
              </Button>
            </Stack>
            <IconButton
              className="header-menu-mobile"
              aria-label="delete"
              size="large"
              onClick={this.mobileHeader}
            >
              {this.state.mobileHeader !== true ? (
                <MenuIcon fontSize="inherit" />
              ) : (
                <CloseIcon fontSize="inherit" />
              )}
            </IconButton>
          </Box>
        </Container>
        <Drawer
          anchor={"top"}
          open={this.state.mobileHeader}
          onClose={() => {
            this.setState({
              mobileHeader: false,
            });
          }}
        >
          <Container maxWidth={"lg"}>
            {/* <Card> */}
            <Stack
              direction="column"
              alignItems="flex-start"
              spacing={2}
              sx={{ width: "100vw" }}
            >
              <Button color="secondary" component={NavLink} to={"/fitur"}>
                Fitur
              </Button>
              <Button color="secondary" component={NavLink} to={"/benefit"}>
                Benefit
              </Button>
              <Button color="secondary" component={NavLink} to={"/hardware"}>
                Hardware
              </Button>
              <Button color="secondary" component={NavLink} to={"/price"}>
                Harga
              </Button>
              <Button color="secondary" component={NavLink} to={"/testimony"}>
                Testimoni
              </Button>
              <Button color="secondary" component={NavLink} to={"/faq"}>
                FAQ
              </Button>
              <Button color="secondary" component={NavLink} to={"/contact"}>
                Kontak
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  window.open(process.env.REACT_APP_APPURL, "_blank");
                }}
              >
                Coba Gratis
              </Button>
            </Stack>
            {/* </Card> */}
          </Container>
        </Drawer>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

// export default withStyles(styles, { withTheme: true })(
//   (connect(mapStateToProps)(Header))
// )
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
