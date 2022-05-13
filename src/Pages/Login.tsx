import React, { useState } from "react";
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from "@mui/material";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { AuthenticateRequestDto, IAuthResponse } from "../api/tournamentapiclient";
import { UserService } from "../services/user.service";
import { IUserData } from "../Types";
import { openDB, DBSchema } from "idb";

type Props = {
  clientId: string;
  setUserToken: React.Dispatch<React.SetStateAction<IAuthResponse | undefined>>;
  userToken: IAuthResponse | undefined;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
};

interface MyDB extends DBSchema {
  Tournaments: {
    key: string;
    value: number;
  };
}

const Login: React.FunctionComponent<Props> = ({
  clientId,
  setUserToken,
  userToken,
  setUserData,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    let login = new AuthenticateRequestDto({
      clientId: clientId,
      username: username,
      password: password,
    });
    let userServices = new UserService();

    let apiAuthResponse: IAuthResponse = await userServices.authenticate(login);

    setUserToken({
      ...userToken,
      accesToken: apiAuthResponse.accesToken,
      refreshToken: apiAuthResponse.refreshToken!,
    });
    let UserDataDecode: IUserData = jwt_decode(apiAuthResponse.accesToken);
    setUserData({
      isLogin: true,
      username: UserDataDecode.username,
      scopes: UserDataDecode.scopes,
      firstName: UserDataDecode.firstName,
    });

    // const db = await openDB<MyDB>("Tournaments", 1, {
    //   upgrade(db) {
    //     db.createObjectStore("Tournaments");
    //   },
    // });

    // await db.put("Tournaments", 7, "Jen");

    // // await db.get("Tournaments", 3);

    navigate("/");
    // } catch (error) {
    //   console.error(error);
    // }
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
            variant="standard"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
  );
};

export default Login;
