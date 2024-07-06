import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Box } from '@mui/material';

export default function PersonalizedReportDialog(resultData) {
  const [open, setOpen] = React.useState(false);
  const [overallFinance, setOverallFinance] = React.useState("")
  const [profitToRev, setProfitToRev] = React.useState("")

  const handleClickOpen = () => {
    report();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const report = () => {
    let overallFinancialSituation = ""
    if (resultData.data.price > resultData.data.atc) {
      overallFinancialSituation += "We recognized your Price is higher than the Average Total Cost (ATC). This indicates that the price your business charges for each product exceeds the average cost for each output, which means your business is making a profit. However, please be careful if the price is far higher than the ATC as it would make your products less attractive than competitors.\n"
    } else if (resultData.data.price == resultData.data.atc) {
      overallFinancialSituation += "We saw that your Price is equal to the Average Total Cost (ATC). When the price matches your cost for each output on average, it means your business is at a break-even point. Your business could continue to produce but it will not make any loss or profit.\n"
    } else if (resultData.data.avc < resultData.data.price < resultData.data.atc) {
      overallFinancialSituation += "It seems that your Price is lower than ATC, but higher than AVC. In this case, your price could not cover the whole cost on average for each output produced, which indicates your business is experiencing a loss. However, you could continue to produce in the short run to minimize losses as you can still cover your average variable cost, but you should re-evaluate your business’s financial situation in the next month.\n"
    } else if (resultData.data.profit < resultData.data.avc) {
      overallFinancialSituation += "We have analyzed your data and see that your price could not cover your average variable cost. In this situation, we advise you to pause production.\n"
    }

    setOverallFinance(overallFinancialSituation)

    let costRev = ""

    if (((resultData.data.profit / resultData.data.revenue) * 100) >= 15) {
      costRev += "It seems that your Average Profit Margin is higher than the Average Profit Margin compared to the overall market. Here are some questions and recommendations to evaluate and improve the financial situation."
    } else {
      costRev += "It seems that your Average Profit Margin is lower than the Average Profit Margin compared to the overall market. Here are some questions and recommendations to evaluate and improve the financial situation.\n\nWhat are some risks of production that you might face? Do you have any ways to safeguard products?\nHere are some risks that farmers might face:\nClimate and Weather\nPests and Diseases\nHere are some recommendations that you could consider:\nClimate and Weather risks: Drought, flood\nPest and Diseases: Biological control, crop rotation"
    }

    setProfitToRev(costRev)
    
  }
  

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        Personalized Report
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
          Personalized Report
        </Box>
      </Typography></DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Typography variant="h5" sx={{ mb: 3 }}>
            <Box sx={{ fontWeight: 'bold' }}>
              1. Overall financial situation
            </Box>
          </Typography>
          <Typography sx={{ mb: 3 }}>{overallFinance}</Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            <Box sx={{ fontWeight: 'bold' }}>
              2. Profit to revenue
            </Box>
          </Typography>
          <Typography sx={{ mb: 3 }}>{profitToRev}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
