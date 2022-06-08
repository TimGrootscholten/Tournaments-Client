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
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { UserDto } from "../api/tournamentapiclient";
import { UserService } from "../services/user.service";
import { IAuthResponse } from "../api/tournamentapiclient";
import { IUserData } from "../Types";

type Props = {
  clientId: string;
  setUserToken: React.Dispatch<React.SetStateAction<IAuthResponse | undefined>>;
  userToken: IAuthResponse | undefined;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
};

const Registreren: React.FunctionComponent<Props> = ({
  clientId,
  setUserToken,
  userToken,
  setUserData,
}) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPasswordText, setErrorPasswordText] = useState("");
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorFirstNameText, setErrorFirstNameText] = useState("");
  const [errorLastNameText, setErrorLastNameText] = useState("");
  const [errorUserName, setErrorUserName] = useState(false);
  const [errorUserNameText, setErrorUserNameText] = useState("");

  const navigate = useNavigate();
  const userServices = new UserService();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isWrongInput = false;
    setErrorFirstName(false);
    setErrorFirstNameText("");
    setErrorLastName(false);
    setErrorLastNameText("");
    setErrorPasswordText("");
    setErrorPassword(false);
    setErrorUserName(false);
    setErrorUserNameText("");
    if (password1.length < 8) {
      setErrorPassword(true);
      setErrorPasswordText("Er is een te kort wachtwoord ingevuld, minimaal 8 karakters.");
      isWrongInput = true;
    }
    if (password1 !== password2) {
      setErrorPassword(true);
      setErrorPasswordText("Wachtwoord komt niet overeen");
      isWrongInput = true;
    }
    if (firstName.length < 2) {
      setErrorFirstName(true);
      setErrorFirstNameText("Er is een te kort gebruikersnaam ingevuld, minimaal 2 karakters.");
      isWrongInput = true;
    }
    if (lastName.length < 2) {
      setErrorLastName(true);
      setErrorLastNameText("Er is een te kort gebruikersnaam ingevuld, minimaal 2 karakters.");
      isWrongInput = true;
    }
    if (username.length < 2) {
      setErrorUserName(true);
      setErrorUserNameText("Er is een te kort gebruikersnaam ingevuld, minimaal 2 karakters.");
      isWrongInput = true;
    }
    if (!isWrongInput) {
      let user = new UserDto({
        clientId: clientId,
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password1,
      });
      let apiAuthResponse: IAuthResponse = await userServices.createUser(user);

      setUserToken({
        ...userToken,
        accessToken: apiAuthResponse.accessToken,
        refreshToken: apiAuthResponse.refreshToken!,
      });
      let UserDataDecode: IUserData = jwt_decode(apiAuthResponse.accessToken);
      setUserData({
        isLogin: true,
        username: UserDataDecode.username,
        scopes: UserDataDecode.scopes,
        firstName: UserDataDecode.firstName,
      });
      navigate("/");
    }
  };

  const checkUniqueUserName = async () => {
    let uniqueUserNameResponse = await userServices.isUniqueUsername(username);
    if (!uniqueUserNameResponse) {
      setErrorUserName(true);
      setErrorUserNameText("Gebruikersnaam bestaat al.");
    } else {
      setErrorUserName(false);
      setErrorUserNameText("");
    }
  };

  return (
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
                onBlur={checkUniqueUserName}
                variant="standard"
                value={username}
                error={errorUserName}
                helperText={errorUserNameText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="voornaam"
                label="Voornaam"
                name="voornaam"
                autoComplete="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                variant="standard"
                value={firstName}
                error={errorFirstName}
                helperText={errorFirstNameText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="achternaam"
                label="Achternaam"
                name="achternaam"
                autoComplete="lastName"
                onChange={(e) => setLastName(e.target.value)}
                variant="standard"
                value={lastName}
                error={errorLastName}
                helperText={errorLastNameText}
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
  );
};

export default Registreren;
