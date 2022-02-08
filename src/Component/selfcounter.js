import { useState } from "react";
import { useEffect } from "react";

const SelfCounter =()=>{
  const [count,setCount] =useState(0);
  const Updater =()=>{
      let initialcount= 0;
      // let x=20;
      // let y=0;
      const interval = setInterval(()=>{
          if(initialcount<20){
            initialcount= initialcount+1;
          }
          else{
              //  y++;
              initialcount=0;
               clearInterval(interval);

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
