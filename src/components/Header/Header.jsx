import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar, Typography } from '@mui/material';
import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: 'green',
          position: 'relative',
        }}
      >
        <Toolbar>
          <SentimentVerySatisfiedSharpIcon sx={{ marginRight: '1vh' }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Rozetka
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
