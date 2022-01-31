import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
const column = [
  { field: 'id', headerName: 'ID', width: 140 },
  { field: 'username', headerName: 'Name',width: 140  },
  { field: 'email', headerName: 'Email', width: 140},

{ field: 'Action', headerName: 'Action', width: 240,
renderCell: () => {

         return (
           <>

          <Button variant="contained" color="primary" startIcon={<EditIcon />} >
             Delete
          </Button> &nbsp;
          <Button variant="contained" color="primary" startIcon={<EditIcon />} >
             Edit
          </Button>
          </>
         );
       }
}
 ];


const DataTable = () => {
    const [tabledata,setTabledata]= useState([])
    useEffect (() => {
 fetch('http://localhost:3001/users')
   .then((item) =>item.json())
 .then((item) => setTabledata(item))
}, [])
console.log(tabledata);

return(
<>

<h1>Table Data</h1>
<div style={{ height: 300, width: '80%', margin: "50px" }}>
      <DataGrid
        rows={tabledata}
        columns={column}
        pageSize={4}
      />
    </div>
</>
)
}
export default DataTable;
