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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      pagebutton: false,
      homebutton: false,
    };
  }

  handleClose = (e) => {
    this.setState({ [e.currentTarget.name]: false });
  };

  handleOpen = (e) => {
    this.setState({ [e.currentTarget.name]: true });
  };

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
              <Button color="secondary">Benefit</Button>
              <Button color="secondary">Hardware</Button>
              <Button color="secondary">Harga</Button>
              <Button color="secondary">Testimoni</Button>
              <Button color="secondary">FAQ</Button>
              <Button color="secondary">Kontak</Button>
              <Button color="secondary">Coba Gratis</Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "25px", padding: "8px 40px" }}
              >
                Login
              </Button>
            </Stack>
            <IconButton
              className="header-menu-mobile"
              aria-label="delete"
              size="large"
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
