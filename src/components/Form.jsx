import { useState } from "react"
import Item from "./Item"
export default function Form(){
    const[name,setName]=useState("")
    const[todo,setTodo]=useState([])
    return (
        <div>
            <form onSubmit={(e)=>{e.preventDefault()
                setTodo([...todo,name]);
                setName("");
            }
            }>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>

                   <button type="submit" >SUBMIT</button>
            {todo.map(item=>{
                return <Item key={item} item={item}/>
            })}
            </form>
         
        </div>
    )
}