import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registreren from "./Pages/Registreren";
import Nav from "./Components/Nav";
import "./Assets/css/global.scss";
import Settings from "./Pages/Settings/Settings";
import Toernooien from "./Pages/Settings/Toernooien";
import Account from "./Pages/Settings/Account";
import Permissie from "./Pages/Settings/Permissie";
import ToernooiAdd from "./Pages/Settings/ToernooiAdd";
import ToernooiEdit from "./Pages/Settings/ToernooiEdit";

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

            <Route path="settings">
              <Route
                index
                element={
                  <>
                    <Settings /> <Account />
                  </>
                }
              />
              <Route
                path="account"
                element={
                  <>
                    <Settings /> <Account />
                  </>
                }
              />
              <Route
                path="permissie"
                element={
                  <>
                    <Settings /> <Permissie />
                  </>
                }
              />
              <Route
                path="toernooien"
                element={
                  <>
                    <Settings /> <Toernooien />
                  </>
                }
              >
                <Route path="add" element={<ToernooiAdd />} />
                <Route path="view:id" element={<ToernooiEdit />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
      <Nav />
    </BrowserRouter>
  );
};

export default App;
