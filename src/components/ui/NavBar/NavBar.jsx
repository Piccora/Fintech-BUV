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
import { signingOut } from '../../../FirebaseAuthentication';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [session, setSession] = useState(false);
  const navigate = useNavigate();
  onAuthStateChanged(auth, async (user) => {
    user ? setSession(true) : setSession(false)
  })

  const handleClick = () => {
    signingOut().then( () => {
      window.location.reload()
      navigate("/")
    }
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link href="/" underline="none" color="primary">Logo</Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {session ? (<Button variant="text" sx={{ color: 'white' }} onClick={handleClick} >{auth.currentUser.displayName}</Button>) : (<Button color="inherit" href="/sign-in">Login</Button>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
