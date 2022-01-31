
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav= styled.nav`
 background: pink;
 text-align: center;
`
const Ul= styled.ul`
 display: flex;
`
const Li= styled.li`
 list-style: none;
 text-decoration: none;
 margin:10px;
 color:black;
`
const Header =()=>{
    return(
    <>
    <Nav>
        <Ul  className="container">
            <Li><Link to="/">DashboardPage</Link></Li>
            <Li><Link to="/about">AboutUsPage</Link></Li>
            <Li><Link to="/contact">Contact</Link></Li>
            <Li><Link to="/counter">Counter</Link></Li>
            <Li><Link to="/selfcounter">Self-Counter</Link></Li>
            <Li><Link to="/modal">Modal</Link></Li>
            <Li><Link to="/loginuser">MUI-Login</Link></Li>

        </Ul>
    </Nav>
</>
    );
}
export default Header;
