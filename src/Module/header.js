import * as React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Search from '../Module/index';



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
const Header = () => {
 
  const removeSession = () => {
    localStorage.removeItem("getToken")
  }




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
              <Li><Link to="/search">Search</Link></Li>
</Ul>
          </Toolbar>

        </Container>
      </AppBar>
     


    </>
  );
}
export default Header;
