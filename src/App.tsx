import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registreren from "./Pages/Registreren";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registreer" element={<Registreren />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
