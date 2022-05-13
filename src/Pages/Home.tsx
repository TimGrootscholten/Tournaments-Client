import React from "react";
import Restricted from "../Permission/Restricted";
import { Permissions } from "../Permission/TournamentPermissions";
import { IUserData } from "../Types";

type Props = {
  userData: IUserData;
};

const Home: React.FunctionComponent<Props> = ({ userData }) => {
  return (
    <div>
      Home
      <Restricted userRole={userData.scopes} ElementPermissions={[Permissions.TeamCreate]}>
        <div>create</div>
      </Restricted>
      <Restricted userRole={userData.scopes} ElementPermissions={[Permissions.TeamRead]}>
        <div>read</div>
      </Restricted>
      <Restricted userRole={userData.scopes} ElementPermissions={[Permissions.TeamUpdate]}>
        <div>update</div>
      </Restricted>
      <Restricted userRole={userData.scopes} ElementPermissions={[Permissions.TeamDelete]}>
        <div>delete</div>
      </Restricted>
    </div>
  );
};

export default Home;
