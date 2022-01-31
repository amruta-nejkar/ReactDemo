import { LoginUser } from "./index";
 import { useLocation } from "react-router-dom";
 const WelcomePage=()=>
{
    const location = useLocation();
    return(
        <>
        <div>
         <h1>welcome to your  account</h1>
        </div>

        </>
    )
}
export default WelcomePage;