 const Validation = (values)=>{
    let errors={};
    let emailPattern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)
    if(!values.name){
        
        errors.name=" name requried"
    }
    if(!values.email){
      errors.email="Email required";
    }else if(!emailPattern){
      errors.email="Email is invalid"
  }
  if(!values.password){
    errors.password="password required"
  }else if(values.password.length<8){
    errors.password="Password must be more that five "
  }
  return errors
  }
  export default Validation;