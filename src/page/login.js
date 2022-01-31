import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { InputField,Lable} from "../Component/styled";

const LoginPage =()=>{
  
    const [users,setUsers] =useState(
        {
            name: "",
            email:"",
            Password:"",
        }
    )
    let navigate = useNavigate();
    const handleChange =(e) =>{
      setUsers({
            ...users,
            [e.target.name]:e.target.value,
            [e.target.email]:e.target.value,
            [e.target.Password]:e.target.value
    
        })
    }
    let data = users;
    const redirectHandler =() =>{
        navigate('/profile',{state: {users}})
    }
    return(
        <>
         
             <div>
                 <h2>USER DEATILS</h2>
             <Lable>User-FullName</Lable>
             <InputField type="text" id="name" placeholder="Enter name" onChange={handleChange} />  
             <Lable>User-Email</Lable>
             <InputField type="email" id="email" placeholder="Enter email" onChange={handleChange}  />
             <Lable>Password</Lable>
             <InputField type="password" id="password" placeholder="Password" onChange={handleChange}  />  
             <button onClick={redirectHandler}> Submit</button>
         </div>
        
        </>
    )
}
export default LoginPage;