import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { Button } from "@mui/material"
import ProfileInputButton from "../../components/ui/ProfileInputButton/ProfileInputButton"

export default function Profile() {
    return (
        <Stack sx={{ width: '100%', maxWidth: 'false', pt: 10 }} spacing={8}>
            <Typography component="div" variant="h3">
                <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1 }}>
                    Profile
                </Box>
            </Typography>
            <Box sx={{ display: "flex", justifyContent: 'flex-start' }} >
                <Box align="left" sx={{ px: 10, pr: 50, textAlign: 10}}>
                    <Typography variant="h5">Username: </Typography>
                    <Typography variant="h5">Specialized field:      </Typography>
                    <Typography variant="h5">Total revenue:</Typography>
                    <Typography variant="h5">Total profit:</Typography>
                </Box>
                <ProfileInputButton />
                <Box />
            </Box>
            <Typography component="div" variant="h4">
                <Box sx={{ textAlign: 'left', fontWeight: 'bold', pl: 10 }}>
                    Analysis
                </Box>
            </Typography>

        </Stack>
    )
}