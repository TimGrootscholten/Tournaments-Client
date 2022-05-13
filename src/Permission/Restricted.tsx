import React from "react";

type Props = {
  userRole: number[];
  ElementPermissions: number[];
};

const Restricted: React.FunctionComponent<Props> = ({ userRole, ElementPermissions, children }) => {
  for (let i = 0; i < ElementPermissions.length; i++) {
    if (userRole.includes(ElementPermissions[i])) {
      return <>{children}</>;
    }
  }

  return null;
};

export default Restricted;
