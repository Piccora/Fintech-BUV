import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { Button } from "@mui/material"
import ProfileInputButton from "../../components/ui/ProfileInputButton/ProfileInputButton"
import { ConditionalChartRender } from "../../components/ui/ConditionalChartRender/ConditionalChartRender"
import { simpleQuery } from "../../FirebaseFirestore"
import { auth } from "../../firebase"
import { useState } from "react"

export default function Profile() {
    const [chartState, setChartState] = useState(false)

    let data = {
        chartType: "ComboChart",
        data: [],
        options: {
            title: "Profit over years",
            vAxis: { title: "Profit (VND)" },
            hAxis: { title: "Month" },
            seriesType: "bars",
            series: { 2: { type: "line" } },
        }
    }

    simpleQuery("finance-data-year", ["userName", "==", auth.currentUser.displayName], "year").then(
        function (result) {
            if (result.length >= 2) {
                let chartData = [
                    ["Year", "Profit", "Revenue", "Cost"],    
                ]
                result.forEach((doc) => {chartData.push([doc[1].year, doc[1].profit, doc[1].revenue, doc[1].cost])})
                data.data = chartData
                
                setChartState(true)
            }
        }
    )

    return (
        <Stack sx={{ width: '100%', maxWidth: 'false', pt: 10 }} spacing={8}>
            <Typography component="div" variant="h3">
                <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1, pt: 6}}>
                    Profile
                </Box>
            </Typography>
            <Box sx={{ display: "flex", justifyContent: 'flex-start',pt: -5, pb: 10}} >
                <Box align="left" sx={{ px: 10, pr: 50, textAlign: 10}}>
                    <Typography variant="h5" sx={{pb: 1.5, pt: 2}}>Username: </Typography>
                    <Typography variant="h5" sx={{pb: 1.5, pt: 2}}>Specialized Field:      </Typography>
                    <Typography variant="h5" sx={{pb: 1.5, pt: 2}}>Total Revenue:</Typography>
                    <Typography variant="h5" sx={{pb: 1.5, pt: 2}}>Total Profit:</Typography>
                </Box>
                <ProfileInputButton />
                <Box />
            </Box>
            <Typography component="div" variant="h4">
                <Box sx={{ textAlign: 'left', fontWeight: 'bold', pl: 10 }}>
                    Analysis
                </Box>
            </Typography>
            {chartState ? <ConditionalChartRender data={data} /> : null}
        </Stack>
    )
}