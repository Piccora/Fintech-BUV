import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Box } from '@mui/material';

export default function SuggestionDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [resultData, setResultData] = React.useState({
    revenue: 1,
    breakEvenUnit: 1,
    breakEvenRevenue: 1,
    profit: 1,
    atc: 1,
    avc: 1,
  })

  const handleClickOpen = () => {
    calculation(props.inputData)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const calculation = (data) => {
    const revenue = Number(data.unitSold) * Number(data.price);
    const cost = Number(data.fixedCost) + Number(data.variableCost);
    const avc = Number(data.variableCost) / Number(data.unitSold);
    const breakEvenUnit = Number(data.fixedCost) / (Number(data.price) - avc)
    const breakEvenRevenue = breakEvenUnit * Number(data.price)
    const profit = revenue - cost
    const atc = cost / Number(data.unitSold)
    setResultData({
      revenue: revenue,
      breakEvenUnit: breakEvenUnit,
      breakEvenRevenue: breakEvenRevenue,
      profit: profit,
      atc: atc,
      avc: avc
    })

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Calculate
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle><Typography variant="h4" sx={{ mb: 3 }}>
                <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1 }}>
                    Suggestion
                </Box>
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
                <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1 }}>
                    Insights
                </Box>
            </Typography></DialogTitle>
        <DialogContent>
          <Box>
          <DialogContentText sx={{ mb: 1 }}>
          Explanation
          </DialogContentText>
          </Box>
          <Box sx={{ display: 'flex', justifyContent:"space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
          Revenue:
          </DialogContentText>
          <Typography>{resultData.revenue} VND</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent:"space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
          Break even point (in unit):
          </DialogContentText>
          <Typography>{resultData.breakEvenUnit} VND</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent:"space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
          Break even point (in revenue):
          </DialogContentText>
          <Typography>{resultData.breakEvenRevenue} VND</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent:"space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
          Profit:
          </DialogContentText>
          <Typography>{resultData.profit} VND</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent:"space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
          Average Total Cost:
          </DialogContentText>
          <Typography>{resultData.atc} VND</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent:"space-between", mb: 3 }}>
          <DialogContentText sx={{ mr: 15 }}>
          Average Variable Cost:
          </DialogContentText>
          <Typography>{resultData.avc} VND</Typography>
          </Box>
          <Typography variant="h5" sx={{ mb: 3 }}>
                <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1 }}>
                    Insights
                </Box>
            </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
  }}