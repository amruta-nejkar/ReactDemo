import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@material-ui/core'
import axios from "axios";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));
const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#C0C0C0',
            color: '#000000'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const GetData = () => {

    const [open, setOpen] = useState(false);
    const [opendata, setOpenData] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
     const classes = useStyles();

    const handleOpen = () => {
        setOpenData(true);
        setId();
        setUserName();
        setEmail();

    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClosed = () => {
        setOpenData(false);
    };

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios
        .get("http://localhost:3001/users")
        .then((response) => {
          setData(response.data);
        })
    }
    function editData(userid) {
        let item = data[userid - 1];
        setId(item.id);
        setUserName(item.username)
        setEmail(item.email)
        setOpen(true);
    }
    function dataUpdate() {
        axios.put('http://localhost:3001/users', {
            id: id,
            username: username,
            email: email
          })
            .then((response) => {
              console.log("resp is", response)
              getData(response.data);
            })
         setOpen(false);
         
    }

    function saveData() {
       axios.post('http://localhost:3001/users', {
            id: id,
            username: username,
            email: email
          })
            .then((response) => {
              getData(response.data);
            })
            setOpenData(false);

        
    }

    function deleteData(id) {
        axios
        .delete(`http://localhost:3001/users/${id}`)
        .then((response) => {
          getData(response.data);
        })
    }
    return (
        <>
            <h1>Table Data</h1>
            <Button variant="outlined" onClick={handleOpen}>Add User Data</Button>
            <br />
            <br />
            <Dialog open={opendata} onClose={handleClosed}>
                <DialogTitle>Add user data</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        label="Id"
                        fullWidth
                        variant="standard"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Name"
                        fullWidth
                        variant="standard"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={saveData} type="submit" disabled={!id  || !username || !email}>Save</Button>
                    <Button onClick={handleClosed}>Cancel</Button>

                </DialogActions>
            </Dialog>

       <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item,i) => (
                    <TableRow className={classes.row} key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>     
                        <Button  variant="contained" style={{marginRight:10}} onClick={() => editData(item.id)} >Edit</Button>
                        <Button  variant="contained" onClick={() => deleteData(item.id)}>Delete</Button> 
                        </TableCell>
                        </TableRow>
                ))}
            </TableBody>
        </Table> 

            
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Edit the Data</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="id"
                            label="UserId"
                            fullWidth
                            variant="standard"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            fullWidth
                            variant="standard"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="mail"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={dataUpdate}>Update</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}
export default GetData;