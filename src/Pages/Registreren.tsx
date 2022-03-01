import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { UserDto } from "../api/tournamentapiclient";
import { UserService } from "../services/user.service";

const Registreren = () => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordText, setErrorPasswordText] = useState("");
  const [errorUserName, setErrorUserName] = useState(false);
  const [errorUserNameText, setErrorUserNameText] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password1.length <= 8) {
      setErrorPassword(true);
      setErrorPasswordText("Er is een te kort wachtwoord ingevuld, minimaal 8 karakters.");
      return;
    } else if (password1 !== password2) {
      setErrorPassword(true);
      setErrorPasswordText("Wachtwoord komt niet overeen");
      return;
    } else if (username.length <= 2) {
      setErrorUserName(true);
      setErrorUserNameText("Er is een te kort gebruikersnaam ingevuld, minimaal 2 karakters.");
    } else {
      setErrorUserName(false);
      setErrorUserNameText("");
      setErrorPasswordText("");
      setErrorPassword(false);
    }
    // let user = new UserDto({
    //   username: username,
    //   password: password,
    // });
    // let userServices = new UserService();
    // userServices.getUser();
    // userServices.createUser(user);
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registreren
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Gebruikersnaam"
                  name="username"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  variant="standard"
                  value={username}
                  error={errorUserName}
                  helperText={errorUserNameText}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="standard"
                  fullWidth
                  name="password1"
                  label="Wachtwoord"
                  type="password"
                  id="password1"
                  autoComplete="new-password"
                  onChange={(e) => setPassword1(e.target.value)}
                  value={password1}
                  error={errorPassword}
                  helperText={errorPasswordText}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="standard"
                  fullWidth
                  name="password2"
                  label="Wachtwoord"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                  onChange={(e) => setPassword2(e.target.value)}
                  value={password2}
                  error={errorPassword}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Registreren
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Heb je al een account? Inloggen dan maar.</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Registreren;
