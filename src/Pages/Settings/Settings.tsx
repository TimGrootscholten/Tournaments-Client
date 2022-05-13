import React from "react";
import { Button, ButtonGroup, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Assets/css/settings.scss";
import Restricted from "../../Permission/Restricted";
import { Permissions } from "../../Permission/TournamentPermissions";
import { IUserData } from "../../Types";

type Props = {
  userData: IUserData;
};

const Settings: React.FunctionComponent<Props> = ({ userData }) => {
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
        <Restricted
          userRole={userData.scopes}
          ElementPermissions={[
            Permissions.TeamCreate,
            Permissions.TeamUpdate,
            Permissions.TeamDelete,
          ]}
        >
          <Button component={Link} to="/settings/toernooien">
            Toernooien
          </Button>
        </Restricted>
        <Button component={Link} to="/settings/permissie">
          Permissie
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Settings;
