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
        <Container>
          <Box className="header-content">
            <Box className="brand">
              <Typography variant="h3">My Header</Typography>
            </Box>
            <Stack direction="row" spacing={2} className="header-menu">
              <div>
                <Button
                  ref={(button) => (this.homeButton = button)}
                  id="homebutton"
                  onMouseOver={this.handleOpen}
                  onMouseLeave={this.handleClose}
                  name="homebutton"
                  sx={{ zIndex: 1301 }}
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
              </div>
              <div>
                <Button>Features</Button>
              </div>
              <div>
                <Button>How it works</Button>
              </div>
              <div>
                <Button
                  ref={(button) => (this.pageButton = button)}
                  id="pagebutton"
                  onMouseOver={this.handleOpen}
                  onMouseLeave={this.handleClose}
                  name="pagebutton"
                  sx={{ zIndex: 1301 }}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Pages
                </Button>
                <Menu
                  PaperProps={{
                    onMouseEnter: () => {
                      this.setState({ pagebutton: true });
                    },
                    onMouseLeave: () => {
                      this.setState({ pagebutton: false });
                    },
                  }}
                  id="pagemenu"
                  anchorEl={this.pageButton}
                  open={this.state.pagebutton}
                  onClose={() => {
                    this.setState({ pagebutton: false });
                  }}
                  MenuListProps={{
                    "aria-labelledby": "pagebutton",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      this.setState({ pagebutton: false });
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      this.setState({ pagebutton: false });
                    }}
                  >
                    My account
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      this.setState({ pagebutton: false });
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
