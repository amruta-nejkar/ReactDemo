import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isSubmitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState('');
  const [myText, setText] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setName('');
    setEmail('');
    setPosition('')
    setSubmitted(false);
  };
  const handleSubmit = () => {
    setOpen(false);
    displaydata();
    setSubmitted(true);
  };
  const handleName = (e) => {
    setName(e.target.value)
    console.log("name is", name);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("Email is", email);
  }
  const handleText = (e) => {
    setText(e.target.value);
    console.log("text is", myText)
  }

  const handleChange = (e) => {
    setPosition(e.target.value);
    console.log("position is", position)
  };
  const displaydata = () => {
    return (
      <>
        <div>
          <h1>Name is {name}</h1>
          <h1> Email is {email}</h1>
          <h1>Position is {position}</h1>
        </div>
      </>
    )
  }

  return (
    <>
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={handleName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleEmail}

          />
        </DialogContent>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Positions</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={position}
            onChange={handleChange}
            label="position"
            // onChange={setPosition}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Trainee"}>Trainee</MenuItem>
            <MenuItem value={"Trainer"}>Trainer</MenuItem>
            <MenuItem value={"Expert"}>Expert</MenuItem>
          </Select>
        </FormControl>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
          style={{ width: 200 }}
          label="myText"
          onChange={handleText}
        />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      {isSubmitted &&
      <div>
        <h3>Name is :{name}</h3>
        <h3>Email is: {email}</h3>
        <h3>Position is :{position}</h3>
        <h3>Description :{myText}</h3>
      </div>}
    </div>
    </>
  );
}
export default FormDialog;