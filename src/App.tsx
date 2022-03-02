import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registreren from "./Pages/Registreren";
import Nav from "./Components/Nav";
import "./Assets/css/global.scss";
import Settings from "./Pages/Settings";

const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registreren" element={<Registreren />} />
            <Route path="settings" element={<Settings />}>
              <Route path=":settingpage" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <Nav />
    </BrowserRouter>
  );
};

export default App;
