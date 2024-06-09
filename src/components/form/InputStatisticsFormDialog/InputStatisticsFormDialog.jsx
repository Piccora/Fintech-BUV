import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography, Box, Select, MenuItem, OutlinedInput, InputAdornment } from '@mui/material';
import SuggestionDialog from '../../ui/SuggestionDialog/SuggestionDialog';

export default function InputStatisticsFormDialog() {
  const [open, setOpen] = React.useState(false);
  const [timePeriod, settimePeriod] = React.useState('By month');
  const [data, setData] = React.useState({
    fixedCost: 0,
    variableCost: 0,
    price: 0,
    unitSold: 0
  })

  const handleChangeTimePeriod = (event) => {
    settimePeriod(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeFixedCost = e => {
    setData(currentValue => ({
      ...currentValue,
      fixedCost: Number(e.target.value),
    }))
  }

  const changeVariableCost = e => {
    setData(currentValue => ({
      ...currentValue,
      variableCost: Number(e.target.value),
    }))
  }

  const changePrice = e => {
    setData(currentValue => ({
      ...currentValue,
      price: Number(e.target.value),
    }))
  }

  const changeUnitSold = e => {
    setData(currentValue => ({
      ...currentValue,
      unitSold: Number(e.target.value),
    }))
  }

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        Input statistics
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
            // const email = formJson.email;
            console.log(formJson)
            handleClose();
          },
        }}
      >
        <DialogTitle>
          <Box sx={{ display: 'flex' }}>
          <Typography component="div" variant="h5" sx={{ flexGrow: 1 }}>
                <Box sx={{ textAlign: 'center', fontWeight: 'bold', m: 1 }}>
                    Input data
                </Box>
            </Typography>
            
            <Select
          value={timePeriod}
          onChange={handleChangeTimePeriod}
          displayEmpty
          sx={{ width: '23%' }}
        >
          <MenuItem value="By month">
            By month
          </MenuItem>
          <MenuItem value="By year">By year</MenuItem>
        </Select>
        </Box>
            </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', pb: 4 }}>
            {timePeriod === "By month" && (<TextField id="month" label="Month" variant="standard" sx={{ width: '20%', pr: 5 }} />)}
          <TextField id="year" label="Year" variant="standard" sx={{ width: '14%' }} />
          </Box>
          <DialogContentText>
            <Box sx={{ pb: 3 }}>
            <Typography>
                <Box sx={{fontWeight: 'bold'}}>
                    Input data
                </Box>
            </Typography>
            <Typography>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
            </Typography>
            </Box>
            <Box sx={{ pb: 3 }}>
            <Typography>
                <Box sx={{ fontWeight: 'bold' }}>
                    Input data
                </Box>
            </Typography>
            <Typography>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
            </Typography>
            </Box>
          </DialogContentText>
          <DialogContentText>
            <Box>
            <Typography>
                <Box sx={{fontWeight: 'bold'}}>
                    Input data
                </Box>
            </Typography>
            <Typography>
            Explanation: To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
            </Typography>
            <Typography>
            Example: To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
            </Typography>
            </Box>
          </DialogContentText>
          <OutlinedInput
            id="fixedCost"
            onChange={changeFixedCost}
            endAdornment={<InputAdornment position="end">VND</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            sx={{ mb: 3 }}
          />
          <DialogContentText>
            <Box>
            <Typography>
                <Box sx={{fontWeight: 'bold'}}>
                    Input data
                </Box>
            </Typography>
            <Typography>
            Explanation: To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
            </Typography>
            <Typography>
            Example: To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
            </Typography>
            </Box>
          </DialogContentText>
          <OutlinedInput
            id="variableCost"
            onChange={changeVariableCost}
            endAdornment={<InputAdornment position="end">VND</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            sx={{ mb: 3 }}
          />
            <Box sx={{ display: 'flex', justifyContent:'flex-start', mb: 3 }}>
            <Typography>
                <Box sx={{fontWeight: 'bold', mr: 3 }}>
                    Price per unit:
                </Box>
            </Typography>
            <TextField
              id="price"
              onChange={changePrice}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Box>
            <Box sx={{ display: 'flex', justifyContent:'flex-start', mb: 3 }}>
            <Typography>
                <Box sx={{fontWeight: 'bold', mr: 5 }}>
                    Unit sold:
                </Box>
            </Typography>
            <TextField
              id="unitSold"
              onChange={changeUnitSold}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button><SuggestionDialog inputData={data} /></Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
