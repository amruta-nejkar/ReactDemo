import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Validation from '../Validation/validation';
const Registration=()=>{
    const navigator = useNavigate();
    
    const [errors,setErrors]=useState({
    name:'',
    email:'',
    password:''
   });

    const [values,setValues]=useState({
      name:'',
      email:'',
      password:''
    })
    const handleBlur=()=>{
      console.log("In signup ");
      console.log(Validation(values));
      setErrors(Validation(values));
    }

    
  
    const handleSubmit = (e) => {
     
     if(!errors.email&&!errors.password&&!errors.name){

      const details = values;
      let userDetails = localStorage.getItem('userData');
      if(userDetails==null){
        userDetails=[]
        userDetails.push(details);
        localStorage.setItem('userData',JSON.stringify(userDetails))
      }else{
        let newData = JSON.parse(userDetails)
        newData.push(details)
        localStorage.setItem("userData",JSON.stringify(newData))
  
      };
      const message = "Registration Successfully"
      navigator('/loginuser',{state:message})
    }
  }
  

    const handleClose=()=>{
       setValues({
         name:'',
         email:'',
         password:''
       })
    }
  
   
    return (
      <>
      <h1>Register</h1>
        <TextField
          label="Name"
          required
          value={values.name}
          onBlur={handleBlur}
          onChange={(e)=>{
            setValues({
              name: e.target.value,
               email:values.email,
               password: values.password
            })}}
        />
          {errors.name && <p>{errors.name}</p>}
        <br/>
        <br/>
        
        <TextField
          label="Email"
          type="email"
          required
          value={values.email}
          onBlur={handleBlur}
          onChange={(e)=>{
            setValues({
               name:values.name,
               email: e.target.value,
               password: values.password
            })}}
        />
          {errors.email && <p>{errors.email}</p>}
          <br/>
          <br/>
        <TextField
          label="Password"
          type="password"
          required
          value={values.password}
           onBlur={handleBlur}
          onChange={(e)=>{
            setValues({
              name:values.name,
              email: values.email,
              password: e.target.value
            })}}
         
        />
        {errors.password && <p>{errors.password}</p>}
        <br/>
        <br/>
          <Button  variant="contained" onClick={handleClose}>
            Cancle
          </Button>
          <br/><br/>
          <Button type="submit" onClick={handleSubmit}  variant="contained" color="primary"  >
            Register
          </Button>
      </>
    );
  } 
 
 export default Registration;