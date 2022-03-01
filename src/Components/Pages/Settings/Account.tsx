import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Account = () => {
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
  const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) => {
    return { name, calories, fat, carbs, protein };
  };
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Gegevens
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
          <Button type="submit" fullWidth variant="outlined" color="success" sx={{ mt: 3, mb: 2 }}>
            Opslaan
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Permissies
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default Account;
