import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
    // const auth = false;
    // return auth ? children : <Navigate to="/welcome" />;
    let token = localStorage.getItem('userToken');
    console.log("token is",token)
    return token?children:<Navigate to="/welcome"/>;
  }
  export default PublicRoute;