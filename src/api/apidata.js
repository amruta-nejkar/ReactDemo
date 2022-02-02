import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogTitle from '@mui/material/DialogTitle';


const GetData = () => {

    const [open, setOpen] = useState(false);
    const [opendata, setOpenData] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");

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
        fetch("http://localhost:3001/users").then((result) => {
            result.json().then((response) => {
                setData(response);
            })
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
        let item = { id, username, email }
        fetch(`http://localhost:3001/users/${id}`,
            {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)

            }).then((result) => {
                result.json().then((response) => {
                    getData(response);
                })
            })
        setOpen(false);
    }

    function saveData() {
       
        let item = { id, username, email }

        fetch(`http://localhost:3001/users`,
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)

            }).then((result) => {
                result.json().then((response) => {
                    getData(response);
                })
            })
        setOpenData(false);
    }

    function deleteData(id) {
        
        fetch(`http://localhost:3001/users/${id}`,
            {
                method: 'delete'

            }).then((result) => {
                result.json().then((response) => {
                    getData(response);
                })
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
            <table border=''>
            <tbody >
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
                {
                    data.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button variant="contained"  startIcon={<DeleteIcon />} onClick={() => deleteData(item.id)} >
                                    Delete
                                </Button> &nbsp;
                                <Button variant="contained"  startIcon={<EditIcon />} onClick={() => editData(item.id)} >
                                    Edit
                                </Button>
                            </td>
                        </tr>)

                }
            </tbody>
            </table>
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