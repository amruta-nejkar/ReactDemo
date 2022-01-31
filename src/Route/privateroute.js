import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    // const auth = true;
    // return auth ? children : <Navigate to="/loginuser" />;
    let token = localStorage.getItem('userToken');
    console.log("token is",token)     
    return  token?children:<Navigate to="/loginuser"/>  
  }
  export default PrivateRoute;