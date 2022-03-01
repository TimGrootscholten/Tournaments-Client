import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AccountCircle, SportsSoccer, Home, Settings } from "@mui/icons-material";

import { Link } from "react-router-dom";

const Nav = () => {
  const [value, setValue] = useState(0);

  return (
    <nav className="footer mt-auto d-flex justify-content-center">
      <Box className="w-100">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to="/" label="Home" icon={<Home />} />
          <BottomNavigationAction
            component={Link}
            to="/#"
            label="Toernooien"
            icon={<SportsSoccer />}
          />
          <BottomNavigationAction
            component={Link}
            to="/login"
            label="Account"
            icon={<AccountCircle />}
          />
          <BottomNavigationAction
            component={Link}
            to="/settings"
            label="Instellingen"
            icon={<Settings />}
          />
        </BottomNavigation>
      </Box>
    </nav>
  );
};

export default Nav;
