import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import axios from "axios";

const Ul = styled.ul`
   display: flex;
   color:white;
  text-decoration: none;
  list-style:none;

`
const Li = styled.li`
 list-style: none;
 text-decoration: none;
 margin:10px;
 color:white;
`
function getData() {
  axios
    .get("http://localhost:3001/users")
    .then((response) => {
      getData(response.data);
    })
}

const filter = createFilterOptions();
const Header = () => {
  const removeSession=()=>{
    localStorage.removeItem("getToken")
  }
  const [value, setValue] = React.useState(null);
  const [data, setData] = useState([]);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Ul className="container">
              <Li><Link to="/">DashboardPage</Link></Li>
              <Li><Link to="/about">AboutUsPage</Link></Li>
              <Li><Link to="/contact">Contact</Link></Li>
              <Li><Link to="/counter">Counter</Link></Li>
              <Li><Link to="/selfcounter">Self-Counter</Link></Li>
              <Li><Link to="/modal">Modal</Link></Li>
              <Li><Link to="/loginuser">MUI-Login</Link></Li>
              <Li><Link to="/registration" onClick={removeSession}>Logout</Link></Li>
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setValue({
                      title: newValue,
                    });
                  } else if (newValue && newValue.inputValue) {
                    // Create a new value from the user input
                    setValue({
                      title: newValue.inputValue,
                    });
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  const { inputValue } = params;
                  // Suggest the creation of a new value
                  const isExisting = options.some((option) => inputValue === option.title);
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({
                      inputValue,
                      title: `Add "${inputValue}"`,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={getData}
                getOptionLabel={(option) => {
                  // Value selected with enter, right from the input
                  if (typeof option === 'string') {
                    return option;
                  }
                  // Add "xxx" option created dynamically
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  // Regular option
                  return option.title;
                }}
                renderOption={(props, option) => <li {...props}>{option.title}</li>}
                sx={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                  <TextField {...params} label="" />
                )}
              />


            </Ul>
          </Toolbar>
        </Container>
      </AppBar>


    </>
  );
}
export default Header;
