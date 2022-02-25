import React, { useState } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction  component={Link}
        to="/signal" label="Nearby" icon={<LocationOnIcon />}/>
      </BottomNavigation>
    </Box>
      </nav>
  );
};

export default Nav;
