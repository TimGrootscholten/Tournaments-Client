import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
// import { PhoneIcon, FavoriteIcon, PersonPinIcon } from "@mui/icons-material";
import ViewAgenda from "@mui/icons-material/ViewAgenda";
import SportsSoccer from "@mui/icons-material/SportsSoccer";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Event from "@mui/icons-material/Event";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Nav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<Event />} label="Events" />
        <Tab icon={<ViewAgenda />} label="stand" />
        <Tab icon={<SportsSoccer />} label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
    </React.Fragment>
  );
};

export default Nav;
