import * as React from 'react';
import { useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useLocation, useNavigate } from "react-router-dom";
import Validation from '../Validation/validation';

const  LoginUser=()=> {
    const [errors,setErrors]=useState({});
    const navigator = useNavigate();
    const loc = useLocation();
    const message = loc.state;
    const [values, setValues] = useState(
        {
            email: "",
            password: "",
        }
    )

    const handleBlur=()=>{
        console.log("in blur")
        setErrors(Validation(values));
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.email&& !errors.password) {
          console.log("in if",errors.email)
          const token = "jwt"
          localStorage.setItem("userToken", token);
    
          if (token) {
            navigator('/welcome', { state: values.email })
          } else {
            navigator('/')
          }
    
        } else {
          console.log("error")
        }
        
      };
      const handleClose = () => {
        navigator('/')
      }
      const onEmailChange = (e) => {

        setValues({
          email: e.target.value,
          password: values.password
        })
      }
      const onPasswordChange = (e) => {
        setValues({
          email: values.email,
          password: e.target.value
        })
      }
  
    return (
    <>
     
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
           <h1>{message}</h1>
            <h1>login page</h1>
            <br></br>
            <h3>Sign into your account</h3>
            <br></br>
            <TextField
                id="email"
                label="Email-id"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={onEmailChange}
            />
             {errors.email && <p>{errors.email}</p>}
            <br></br>
            <TextField
                type='password'
                id="password"
                label="Password"
                value={values.password}
                onBlur={handleBlur}
                onChange={onPasswordChange}
                required
               
            />
             {errors.password && <p>{errors.password}</p>}
            <br></br>
            <Button onClick={handleSubmit}  variant="contained" disableElevation>
                Submit
            </Button>
            <br></br>
            <h4>Or</h4>
            <Button onClick={handleClose} variant="contained" disableElevation>
                Cancle
            </Button>
        </Box>
       </>
    );
}
export default LoginUser;