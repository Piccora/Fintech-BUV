import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Box } from '@mui/material';
import Chart from 'react-google-charts';
import PersonalizedReportDialog from '../PersonalizedReportDialog/PersonalizedReportDialog';
import { addCollection } from '../../../FirebaseFirestore';
import { auth } from '../../../firebase';

export default function SuggestionDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [resultData, setResultData] = React.useState({
    revenue: 1,
    cost: 1,
    price: 1,
    variableCost: 1,
    fixedCost: 1,
    unitSold: 1,
    breakEvenUnit: 1,
    breakEvenRevenue: 1,
    profit: 1,
    atc: 1,
    avc: 1,
  })

  const handleClickOpen = () => {
    calculation(props.inputData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const calculation = (data) => {
    console.log(data.type)
    const revenue = Number(data.unitSold) * Number(data.price);
    const cost = Number(data.fixedCost) + Number(data.variableCost);
    const avc = Number(data.variableCost) / Number(data.unitSold);
    const breakEvenUnit = Number(data.fixedCost) / (Number(data.price) - avc)
    const breakEvenRevenue = breakEvenUnit * Number(data.price)
    const profit = revenue - cost
    const atc = cost / Number(data.unitSold)
    const resultDataCal = {
      revenue: revenue,
      cost: cost,
      price: Number(data.price),
      variableCost: Number(data.variableCost),
      fixedCost: Number(data.fixedCost),
      unitSold: Number(data.unitSold),
      breakEvenUnit: breakEvenUnit,
      breakEvenRevenue: breakEvenRevenue,
      profit: profit,
      atc: atc,
      avc: avc,
      month: Number(data.month),
      year: Number(data.year),
    }
    addData(resultDataCal)
    setResultData(resultDataCal)
    }

    const addData = (data) => {
      if (data.month != 0) {
        data["userName"] = auth.currentUser.displayName
        addCollection(data, "finance-data-month")
      } else {
        delete data.month
        data["userName"] = auth.currentUser.displayName
        addCollection(data, "finance-data-year")
      }
    }

return (
  <React.Fragment>
    <Button variant="text" onClick={handleClickOpen}>
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
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5" sx={{ mb: 3 }}>
          <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1 }}>
            Explanation
          </Box>
        </Typography>
        <Box>
          <DialogContentText sx={{ mb: 1 }}>
            <Typography sx={{ mb: 3 }}>Break-even point (in unit): The point at which businesses can recover their costs.</Typography>
            <Typography sx={{ mb: 3 }}>Break-even point (in revenue): The amount of money that a business has to make in order to cover all its costs.</Typography>
            <Typography sx={{ mb: 3 }}>ATC (Average Total Cost): How much does it cost to produce each unit of output on average.</Typography>
            <Typography sx={{ mb: 3 }}>AVC (Average Variable Cost): How much does it cost on average to make a product, considering only costs that vary with production?</Typography>
          </DialogContentText>
        </Box>
        <Typography variant="h5" sx={{ mb: 3 }}>
          <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1 }}>
            Insights
          </Box>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
            Revenue:
          </DialogContentText>
          <Typography>{Math.round(resultData.revenue)} VND</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
            Break even point (in unit):
          </DialogContentText>
          <Typography>{Math.round(resultData.breakEvenUnit)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
            Break even point (in revenue):
          </DialogContentText>
          <Typography>{Math.round(resultData.breakEvenRevenue)} VND</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
            Profit:
          </DialogContentText>
          <Typography>{Math.round(resultData.profit)} VND</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 1 }}>
          <DialogContentText sx={{ mr: 15 }}>
            Average Total Cost:
          </DialogContentText>
          <Typography>{Math.round(resultData.atc)} VND</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: "space-between", mb: 3 }}>
          <DialogContentText sx={{ mr: 15 }}>
            Average Variable Cost:
          </DialogContentText>
          <Typography>{Math.round(resultData.avc)} VND</Typography>
        </Box>
        <Typography variant="h5" sx={{ mb: 3 }}>
          <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1 }}>
            Conclusion
          </Box>
        </Typography>
        <Chart chartType='PieChart' width="auto" height="auto" data={[["Category", "Amount"], ["Profit", resultData.profit], ["Revenue", resultData.revenue - resultData.profit]]} options={{
          title: "% profit to revenue",
          pieHole: 0.8,
          is3D: false
        }} />
        <Chart chartType='PieChart' width="auto" height="auto" data={[["Category", "Amount"], ["Cost", resultData.cost], ["Revenue", resultData.revenue - resultData.cost]]} options={{
          title: "% cost to revenue",
          pieHole: 0.8,
          is3D: false
        }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <PersonalizedReportDialog data={resultData} />
      </DialogActions>
    </Dialog>
  </React.Fragment>
);
}