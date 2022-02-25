import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registreren from "./Pages/Registreren";
import Nav from "./Components/Nav";

import Box from "@mui/material/Box";

function App() {
  return (
    <Box
      className="app d-flex flex-column h-100"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Nav/>}/>
          <Route path="/">
            <Route index element={<><Home /></>} />
            {/* <Route element={<Nav/>} /> */}
            <Route path="login" element={<Login />} />
            <Route path="registreren" element={<Registreren />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
