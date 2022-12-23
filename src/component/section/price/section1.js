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
  CardHeader,
  CardContent,
  MenuList,
  MenuItem,
  Divider,
} from "@mui/material";

class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt3" style={{ marginBottom: "80px" }}>
        <Container maxWidth="lg">
          <Card sx={{ background: "#333348" }}>
            <CardContent>
              <Typography variant="h2" sx={{ color: "#fff" }}>
                Harga <span className="text-primary">TOQOO</span>
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: "#fff", marginBottom: "20px" }}
              >
                Rp 500.000
              </Typography>
              <Grid container spacing={8}>
                <Grid item xs={12} md={12} lg={4}>
                  <MenuList>
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Dasbor & Laporan Penjualan
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 1
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 2
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 3
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 4
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 5
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                  <MenuList>
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 6
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 7
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 8
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        &#x2022; Lorem Ipsum 9
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                  <Stack direction={"column"} spacing={2}>
                    <Typography variant="p" sx={{ color: "#fff" }}>
                      Pembayaran mudah kamu bisa menggunakan :
                    </Typography>
                    <Typography variant="p" sx={{ color: "#fff" }}>
                      Transfer Bank
                    </Typography>
                    <Typography variant="p" sx={{ color: "#fff" }}>
                      Gopay
                    </Typography>
                    <Typography variant="p" sx={{ color: "#fff" }}>
                      OVO
                    </Typography>
                    <Typography variant="p" sx={{ color: "#fff" }}>
                      Kartu Kredit
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
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
