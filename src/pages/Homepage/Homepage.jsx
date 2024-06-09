import OurTeamCard from '../../components/ui/OurTeamCard/OurTeamCard';
import HomePageCarousel from '../../components/ui/HomePageCarousel/HomePageCarousel';
import { Stack } from '@mui/material'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './homepage.css'

// const Box = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

export default function Homepage() {
    return (
        <>
        <HomePageCarousel />
        <Stack spacing={20} sx={{ pt: 10 }}>
            <Box>
                <Typography component="div">
                    <Box className="body1">
                        <Typography sx={{ fontWeight: 'bold', m: 1, fontSize: 50, marginTop: -18, pt: 3 }} variant="h3">About us</Typography>
                        <Typography sx={{ pt: 5, mx: 10, fontSize: 20 }}>We are CashMate, a fintech solution that aims to help farmers/sole proprietors from remote areas </Typography>
        
                           <Box sx={{ display: "flex" }}>
                              <Box sx={{ float: "left", px: 16, fontSize: 20, pt: 5, pb: 5}}>
                                <h2>Mission</h2>
                                <p>To empower farmers and marginalised communities in remote areas of Vietnam by providing accessible financial literacy education and innovative fintech tools that simplify the calculation of basic financial ratios. We aim to enhance their financial understanding and decision-making capabilities, thereby fostering sustainable economic growth and prosperity within these communities.</p>
                              </Box>
                              <Box sx={{ float: "right", px: 16, fontSize: 20, pb: 5, pt: 5}}>
                                <h2>Vision</h2>
                                <p>To be the leading catalyst for financial empowerment in Vietnam’s rural and less developed regions. Our vision is to create a future where every farmer and aspiring business owner has the knowledge and resources to manage their finances confidently and effectively, contributing to the economic vitality of their localities. We strive to bridge the financial literacy gap, ensuring that our financial education and digital tools remain accessible and easy to use.</p>
                              </Box>  
                              </Box> 
                    </Box>
                </Typography>
            </Box>
            <Box>
                <Typography component="div">
                    <Box className="body2">
                        <Typography sx={{ fontWeight: 'bold', m: 1, fontSize: 50, marginTop: -18, pt: 5 }} variant="h3">Our product</Typography>
                        <Typography sx={{ pt: 5, mx: 10, fontSize: 20, pb: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Box>
                </Typography>
            </Box>
            <Box>
                <Typography component="div" className=''>
                    <Box className="body3">
                        <Typography sx={{ fontWeight: 'bold', m: 1, fontSize: 50, marginTop: -18, pt: 5, pb: 1}} variant="h3">Our team</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3, pb: 3 }}>
                        <OurTeamCard className='member1'/>
                        <OurTeamCard className='member2'/>
                        <OurTeamCard className='member3'/>
                        <OurTeamCard className='member4'/>
                        </Box>
                    </Box>
                </Typography>
            </Box>
            <Box>
            <Typography component="div">
                    <Box className="body4">
                        <Typography sx={{ fontWeight: 'bold', m: 1, fontSize: 50, marginTop: -18, pt: 5}} variant="h3">Our vision</Typography>
                        <Typography sx={{ pt: 5, mx: 10, pb: 5 }}>To be the leading catalyst for financial empowerment in Vietnam’s rural and less developed regions. Our vision is to create a future where every farmer and aspiring business owner has the knowledge and resources to manage their finances confidently and effectively, contributing to the economic vitality of their localities. We strive to bridge the financial literacy gap, ensuring that our financial education and digital tools remain accessible and easy to use.
                        </Typography>
                    </Box>
                </Typography>
            </Box>
        </Stack>
        </>
    )
}