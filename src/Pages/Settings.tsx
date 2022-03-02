import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container } from "@mui/material";
import Account from "../Components/Pages/Settings/Account";
import Permissie from "../Components/Pages/Settings/Permissie";
import Toernooien from "../Components/Pages/Settings/Toernooien";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Assets/css/settings.scss";

const Settings = () => {
  type paramsType = {
    settingpage: string;
  };

  const [page, setPage] = useState(String);
  let { settingpage } = useParams<keyof paramsType>() as paramsType;
  if (settingpage === undefined) {
    settingpage = "account";
  }

  useEffect(() => {
    setPage(settingpage);
  }, [settingpage]);
  return (
    <Container component="main">
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="outlined primary button group"
        fullWidth={true}
      >
        <Button component={Link} to="/settings/account">
          Account
        </Button>
        <Button component={Link} to="/settings/toernooien">
          Toernooien
        </Button>
        <Button component={Link} to="/settings/permissie">
          Permissie
        </Button>
      </ButtonGroup>

      {
        {
          account: <Account />,
          toernooien: <Toernooien />,
          permissie: <Permissie />,
        }[page]
      }
    </Container>
  );
};

export default Settings;
