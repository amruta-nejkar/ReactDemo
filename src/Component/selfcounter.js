import { useState } from "react";
import { useEffect } from "react";

const SelfCounter =()=>{
    const [count,setCount] =useState(0);
    const Updater =()=>{
        let initialcount= count;
        let forword=true;
     setInterval(()=>{
            if(forword){
                if(initialcount!==20 ){
                    initialcount= initialcount+1;
                  }else{
                    forword=false;
                  }
            }else if(!forword){
                if(initialcount>0){
                    initialcount= initialcount-1;      
             }     
             }
            setCount(initialcount);
        },1000)
    }
    useEffect(()=>{
        Updater();
    },[])
    return(
        <>
            <h1>Counts: {count} </h1>
        </>
    )
  }

  export default SelfCounter;