import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Search } from "@mui/icons-material";

import { UserService } from "../../services/user.service";
import { IUserInfoDto } from "../../api/tournamentapiclient";

const Permissie = () => {
  const [canSave, setCanSave] = useState(false);
  const [wachtwoordAlert, setWachtwoordAlert] = useState(false);

  const userServices = new UserService();

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

  const handleSubmitGebruikerZoeken = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let apiGetUsersResoibse: IUserInfoDto[] = await userServices.getUsers();
    console.log(apiGetUsersResoibse);
    setCanSave(true);
  };

  const handleSubmitGebruikerPermissie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="md" component="main">
      <Box
        className="box-Permissie"
        sx={{
          marginTop: 8,
        }}
      >
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
            variant="standard"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Zoeken <Search />
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
      <Box>
        <Button
          onClick={() => setWachtwoordAlert(true)}
          fullWidth
          variant="contained"
          color="warning"
          sx={{ mt: 3, mb: 2 }}
        >
          wachtwoord resetten
        </Button>
      </Box>
      <Dialog open={wachtwoordAlert} keepMounted onClose={() => setWachtwoordAlert(false)}>
        <DialogTitle>Weet u het zeker?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Het wachtwoord wordt veranderd naar "".
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setWachtwoordAlert(false)} color="error">
            Annuleren
          </Button>
          <Button onClick={() => setWachtwoordAlert(false)} color="success">
            Resetten
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Permissie;
