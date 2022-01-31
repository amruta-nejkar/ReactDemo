import { useLocation } from "react-router";
import {useNavigate} from "react-router-dom"

const ProfilePage = () =>{
    const location = useLocation();
    let userData = location.state;
    let navigator = useNavigate();
    
    const redirectLogin =()=>{
         navigator('/')
    }
    return(
        <>
        <h3>User-Name :{userData.users.name} </h3>
        <h3>User-Email :  {userData.users.email} </h3>
        <button onClick={redirectLogin}>Logout</button>
        </>
    )
}
export default ProfilePage;