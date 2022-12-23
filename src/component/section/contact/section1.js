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
  TextField,
} from "@mui/material";

class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="mt3">
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={12} lg={6}>
              <Stack direction="column" spacing={2}>
                <Typography variant="h2" color="secondary">
                  Ngobrol dengan tim <span className="text-primary">TOQOO</span>
                </Typography>
                <Typography variant="p" color="secondary">
                  Tanya di sini aja Tim kami akan menjawab pertanyaan Anda
                  paling lama 24 Jam
                </Typography>
                <Typography variant="p" color="secondary">
                  Senin - Minggu:
                </Typography>
                <Typography variant="p" color="secondary">
                  9 Pagi - 8 Malam
                </Typography>
                <Typography variant="p" color="secondary">
                  Telepon kami atau tinggalkan pertanyaan di formulir. Kami akan
                  merespons Anda dalam 1 hari kerja.
                </Typography>
                <Typography variant="p" color="secondary">
                  124091580
                </Typography>
                <Typography variant="p" color="secondary">
                  support@toqoo.com
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Card>
                <CardContent>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, mt: 2, mb: 2, width: "96%" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Nama"
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      id="outlined-basic"
                      label="No-hp"
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Pertanyaan"
                      multiline
                      maxRows={3}
                      inputProps={{
                        style: {
                          height: "100px",
                        },
                      }}
                    />

                    <Button
                      variant="contained"
                      sx={{ width: "50% !important" }}
                    >
                      Kirim
                    </Button>
                  </Box>
                </CardContent>
              </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section1);
