import React, { useState } from "react";
import { Button, TextField, Grid, Box, Typography, Container } from "@mui/material";

const ToernooiEdit = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container spacing={2}>
          <Typography component="h1" variant="h5" className="text-center w-100">
            Gegevens
          </Typography>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="toernooinaam"
              label="Toernooi naam"
              name="username"
              autoComplete="username"
              variant="standard"
            />
          </Grid>
          <Typography component="h1" variant="h5" className="text-center w-100">
            Punten
          </Typography>

          <Grid item xs={12}>
            <TextField
              required
              variant="standard"
              fullWidth
              name="punten win"
              label="Punten win"
              type="number"
              id="puntenwin"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="standard"
              fullWidth
              name="punten verlies"
              label="Punten verlies"
              type="number"
              id="puntenverlies"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="standard"
              fullWidth
              name="punten gelijk"
              label="Punten gelijk"
              type="number"
              id="puntengelijk"
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="outlined" color="success" sx={{ mt: 3, mb: 2 }}>
          Opslaan
        </Button>
      </Box>
    </Container>
  );
};

export default ToernooiEdit;
