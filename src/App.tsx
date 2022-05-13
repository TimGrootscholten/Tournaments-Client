import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/global.scss";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registreren from "./Pages/Registreren";
import Nav from "./Components/Nav";
import Settings from "./Pages/Settings/Settings";
import Toernooien from "./Pages/Settings/Toernooien";
import Account from "./Pages/Settings/Account";
import Permissie from "./Pages/Settings/Permissie";
import ToernooiAdd from "./Pages/Settings/ToernooiAdd";
import ToernooiEdit from "./Pages/Settings/ToernooiEdit";
import { IUserData } from "./Types";
import { IAuthResponse } from "./api/tournamentapiclient";

const App = () => {
  const [userToken, setUserToken] = useState<IAuthResponse | undefined>(undefined);
  const [clientId, setClientId] = useState("");
  const [userData, setUserData] = useState<IUserData>({
    firstName: "",
    scopes: [],
    username: "",
    isLogin: false,
  });

  useEffect(() => {
    const localId = localStorage.getItem("clientId");
    if (localId === null) {
      let guid = uuidv4();
      setClientId(guid);
      localStorage.setItem("clientId", guid);
    } else {
      setClientId(localId);
    }
  }, [clientId]);

  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/">
            <Route index element={<Home userData={userData} />} />
            <Route
              path="login"
              element={
                <Login
                  clientId={clientId}
                  setUserToken={setUserToken}
                  userToken={userToken}
                  setUserData={setUserData}
                />
              }
            />
            <Route path="registreren" element={<Registreren />} />

            <Route path="settings">
              <Route
                index
                element={
                  <>
                    <Settings userData={userData} /> <Account />
                  </>
                }
              />
              {/* <Restricted userRole={userData.scopes} ElementPermission={Permissions.TeamCreate}> */}
              <Route
                path="account"
                element={
                  <>
                    <Settings userData={userData} /> <Account />
                  </>
                }
              />
              {/* </Restricted> */}
              <Route
                path="permissie"
                element={
                  <>
                    <Settings userData={userData} /> <Permissie />
                  </>
                }
              />
              <Route path="toernooien">
                <Route
                  index
                  element={
                    <>
                      <Settings userData={userData} /> <Toernooien />
                    </>
                  }
                />
                <Route
                  path="add"
                  element={
                    <>
                      <Settings userData={userData} /> <ToernooiAdd />
                    </>
                  }
                />
                <Route
                  path="edit/:id"
                  element={
                    <>
                      <Settings userData={userData} /> <ToernooiEdit />
                    </>
                  }
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
      <Nav userData={userData} />
    </BrowserRouter>
  );
};

export default App;
