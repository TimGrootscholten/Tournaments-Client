import React, { useState } from "react";
import {
  Button,
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
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material";

import { Link } from "react-router-dom";

const Toernooien = () => {
  const [verwijderDialog, setVerwijderDialog] = useState(false);
  const createData = (naam: string, id: number) => {
    return { naam, id };
  };
  const rows = [createData("toernooi 2", 1), createData("toernooi 1", 2)];

  const deleteToernooi = (id: number) => {
    setVerwijderDialog(true);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="table-account"
      >
        <Typography component="h1" variant="h5">
          Toernooien
        </Typography>
        <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }} component={Link} to="add">
          Nieuw
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Naam</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Verwijder</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.naam}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="warning"
                      component={Link}
                      to={`edit/${row.id}`}
                    >
                      <Edit />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => deleteToernooi(row.id)}
                    >
                      <DeleteOutline />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Dialog open={verwijderDialog} keepMounted onClose={() => setVerwijderDialog(false)}>
        <DialogTitle>Weet u het zeker dat u toernooi 2 wilt verwijderen?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setVerwijderDialog(false)}>Annuleren</Button>
          <Button onClick={() => setVerwijderDialog(false)} color="error">
            Verwijderen
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Toernooien;
