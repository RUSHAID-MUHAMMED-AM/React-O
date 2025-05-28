import { useState } from "react"
export default function Sub(){
    const[val,setVal]=useState("subscribe");
  
  return (
    <div>
        <button onClick={()=>setVal((prevState)=>prevState==="subscribe"?"SUBSCRIBED":"subscribe")
            
        }>{val}</button>
    </div>
  )
}