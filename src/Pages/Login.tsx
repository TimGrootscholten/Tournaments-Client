import React, { useState } from "react";
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from "@mui/material";

import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  };

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Gebruikersnaam"
              name="username"
              autoComplete="username"
              autoFocus
              variant="standard"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Wachtwoord"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Inloggen
            </Button>
            <Grid container>
              <Grid item xs>
                <p>
                  Wachtwoord vergeten?
                  <br /> Ga naar de beheerder en vraag daar een nieuwe aan.
                </p>
              </Grid>
            </Grid>
            <Grid item>
              <Link to="/registreren">{"Account aanmaken"}</Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
