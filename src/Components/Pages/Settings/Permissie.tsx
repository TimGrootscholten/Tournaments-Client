import React, { useState } from "react";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Permissie = () => {
  const [canSave, setCanSave] = useState(false);

  const columns: GridColDef[] = [{ field: "RoleName", headerName: "Permissiegroep", width: 300 }];
  const rows = [
    { id: 1, RoleName: "role speler" },
    { id: 2, RoleName: "role gebruiker" },
    { id: 3, RoleName: "role admin" },
    { id: 4, RoleName: "role admin" },
    { id: 5, RoleName: "role admin" },
    { id: 6, RoleName: "role admin" },
    { id: 7, RoleName: "role admin" },
    { id: 8, RoleName: "role admin" },
    { id: 9, RoleName: "role admin" },
  ];

  const handleSubmitGebruikerZoeken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCanSave(true);
  };

  const handleSubmitGebruikerPermissie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Box className="pt-4">
        <Typography component="h3" variant="h5" className="text-center">
          Zoek gebruiker
        </Typography>
        <Box component="form" onSubmit={handleSubmitGebruikerZoeken} noValidate sx={{ mt: 1 }}>
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
        <Box component="form" onSubmit={handleSubmitGebruikerPermissie} style={{ height: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!canSave}
            color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            opslaan
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Permissie;
