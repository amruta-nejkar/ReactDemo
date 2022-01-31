import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
 import axios from 'axios';

const ModalData = () => {
  const [open, setOpen] = React.useState(false);
  const [ id,setId]=useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isSubmitted, setSubmitted] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setId('');
    setName('');
    setEmail('');
    setSubmitted(false);
  };
  const handleSubmit = () => {
    // setOpen(false);
    // displaydata();
    // setSubmitted(true);
    console.log(id);
    console.log(name);
    console.log(email);
    axios.post('http://localhost:3001/users', {
      id,
      name,
      email
  })
  };
  const handleId=(e)=>{
      setId(e.target.value)
      console.log("Id is",id)

  }
  const handleName = (e) => {
    setName(e.target.value)
    console.log("name is", name);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("Email is", email);
  }
  // const displaydata = () => {
  //   return (
  //     <>
  //       <div>
  //         <h1>Id is{id}</h1>
  //         <h1>Name is {name}</h1>
  //         <h1> Email is {email}</h1>
  //       </div>
  //     </>
  //   )
  // }

  return (
    <>
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add User Data
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter User Data</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Id"
            type="id"
            fullWidth
            variant="standard"
            onChange={handleId}
          />
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
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      {isSubmitted &&
      <div>
          <h3>Id is:{id}</h3>
        <h3>Name is :{name}</h3>
        <h3>Email is: {email}</h3>
      </div>}
    </div>
    </>
  );
}
export default ModalData;