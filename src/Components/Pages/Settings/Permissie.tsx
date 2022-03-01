import React from "react";
import { Button, TextField, Grid, Box, Typography, Container } from "@mui/material";

const Permissie = () => {
  return (
    <Container maxWidth="sm">
      <Box className="pt-4">
        <Typography component="h3" variant="h5" className="text-center">
          Zoek gebruiker
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
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

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Zoeken
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Permissie;
