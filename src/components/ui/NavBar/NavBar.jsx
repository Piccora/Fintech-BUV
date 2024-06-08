import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase';

export default function NavBar() {
  const [session, setSession] = useState(false);
  let currentUserName = "";
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      currentUserName = auth.currentUser.displayName;
      setSession(true)
    } else {
      currentUserName = ""
      setSession(false)
    }
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link href="/" underline="none" color="primary">Logo</Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {session ? (<Typography>{currentUserName}</Typography>) : (<Button color="inherit" href="/sign-in">Login</Button>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
