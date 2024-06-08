import NavBar from '../components/ui/NavBar/NavBar'
import Footer from '../components/ui/Footer/Footer'
import OurTeamCard from '../components/ui/OurTeamCard/OurTeamCard';
import HomePageCarousel from '../components/ui/HomePageCarousel/HomePageCarousel';
import { Stack } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function Homepage() {
    return (
        <>
        <NavBar />
        <HomePageCarousel />
        <Stack spacing={10} sx={{ pt: 10 }}>
            <Item>
                <Typography component="div">
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', m: 1 }} variant="h3">About us</Typography>
                        <Typography sx={{ pt: 5, mx: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Box>
                </Typography>
            </Item>
            <Item>
                <Typography component="div">
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', m: 1 }} variant="h3">Our product</Typography>
                        <Typography sx={{ pt: 5, mx: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Box>
                </Typography>
            </Item>
            <Item>
                <Typography component="div">
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', m: 1 }} variant="h3">Our team</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <OurTeamCard />
                        <OurTeamCard />
                        <OurTeamCard />
                        <OurTeamCard />
                        </Box>
                    </Box>
                </Typography>
            </Item>
            <Item>
            <Typography component="div">
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', m: 1 }} variant="h3">Our vision</Typography>
                        <Typography sx={{ pt: 5, mx: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Box>
                </Typography>
            </Item>
        </Stack>
        <Footer />
        </>
    )
}