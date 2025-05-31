import { useEffect } from "react"
export default function Useeffect(){

   useEffect(async()=>{
     const api="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
     const response=await fetch(api);
     const data=await response.json();
     console.log(data);
   },[])    
    return (
        <div>
        </div>
    )
}