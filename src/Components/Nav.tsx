import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AccountCircle, SportsSoccer, DateRange, Home, Settings } from "@mui/icons-material";

import { Link } from "react-router-dom";

const Nav = () => {
  const [value, setValue] = useState(0);

  return (
    <nav className="footer mt-auto d-flex justify-content-center">
      <Box sx={{ width: 500 }}>
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
