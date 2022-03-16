import React from "react";
import { Button, ButtonGroup, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Assets/css/settings.scss";

const Settings = () => {
  type paramsType = {
    settingpage: string;
  };

  let { settingpage } = useParams<keyof paramsType>() as paramsType;
  if (settingpage === undefined) {
    settingpage = "account";
  }

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
    </Container>
  );
};

export default Settings;
